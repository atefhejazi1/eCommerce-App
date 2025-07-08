import { Heading } from "@components/common";
import { Col, Row, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Input } from "@components/Form";
import { Navigate } from "react-router";
import useRegister from "@hooks/useRegister";
function Register() {
  const {
    loading,
    error,
    accessToken,
    register,
    handleSubmit,
    emailAvailabilityStatus,
    submitForm,
    emailOnBlurHandler,
    errors,
  } = useRegister();
  if (accessToken) {
    return <Navigate to={"/"} />;
  }

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

            <Button
              variant="info"
              type="submit"
              style={{ color: "white" }}
              disabled={
                emailAvailabilityStatus === "checking"
                  ? true
                  : false || loading === "pending"
              }
            >
              {loading === "pending" ? (
                <>
                  <Spinner animation="border" size="sm"></Spinner> Loading...
                </>
              ) : (
                "Submit"
              )}
            </Button>
            {error && (
              <p style={{ color: "#dc3545", marginTop: "10px" }}>{error}</p>
            )}
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default Register;
