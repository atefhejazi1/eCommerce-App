import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, type signUpType } from "@validations/signUpSchema";
import { Heading } from "@components/common";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Input } from "@components/Form";
import useCheckEmailAvailability from "@hooks/useCheckEmailAvailability";
function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getFieldState,
    trigger,
  } = useForm<signUpType>({
    mode: "onBlur",
    resolver: zodResolver(signUpSchema),
  });

  const {
    emailAvailabilityStatus,
    enteredEmail,
    checkEmailAvailability,
    resetCheckEmailAvailability,
  } = useCheckEmailAvailability();

  const submitForm: SubmitHandler<signUpType> = (data) => {
    console.log(data);
  };

  const emailOnBlurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
    await trigger("email");
    const value = e.target.value;
    const { isDirty, invalid } = getFieldState("email");

    if (isDirty && !invalid && enteredEmail !== value) {
      checkEmailAvailability(value);
    }

    if (isDirty && invalid && enteredEmail) {
      resetCheckEmailAvailability();
    }
  };

  return (
    <>
      <Heading title="User Registration" />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit(submitForm)}>
            <Input
              label="First Name "
              name="firstName"
              register={register}
              error={errors.firstName?.message}
            />

            <Input
              label="Last Name "
              name="lastName"
              register={register}
              error={errors.lastName?.message}
            />

            <Input
              label="Email Address"
              name="email"
              register={register}
              onBlur={emailOnBlurHandler}
              error={
                errors.email?.message
                  ? errors.email?.message
                  : emailAvailabilityStatus === "notAvailable"
                  ? "This email is already in use."
                  : emailAvailabilityStatus === "failed"
                  ? "Error from the server."
                  : ""
              }
              formText={
                emailAvailabilityStatus === "checking"
                  ? "We're currently checking the availability of this email address. Please wait a moment."
                  : ""
              }
              success={
                emailAvailabilityStatus === "available"
                  ? "This email is available for use."
                  : ""
              }
              disabled={emailAvailabilityStatus === "checking" ? true : false}
            />
            <Input
              label="Password "
              name="password"
              type="password"
              register={register}
              error={errors.password?.message}
            />

            <Input
              label="Confirm Password "
              type="password"
              name="confirmPassword"
              register={register}
              error={errors.confirmPassword?.message}
            />

            <Button variant="info" type="submit" style={{ color: "white" }}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default Register;
