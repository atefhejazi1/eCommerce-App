import { Heading } from "@components/common";
import { Input } from "@components/Form";
import { Form, Button, Row, Col, Alert, Spinner } from "react-bootstrap";
import { Navigate } from "react-router";
import useLogin from "@hooks/useLogin";

const Login = () => {
  const {
    error,
    loading,
    accessToken,
    submitForm,
    register,
    handleSubmit,
    searchParams,
    errors,
  } = useLogin();
  if (accessToken) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <Heading title="User Login" />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          {searchParams.get("message") === "login_required" && (
            <Alert variant="success">
              You Need To Login To View This Content
            </Alert>
          )}
          {searchParams.get("message") === "account_created" && (
            <Alert variant="success">
              Your Account Created Successfully , Please Login
            </Alert>
          )}

          <Form onSubmit={handleSubmit(submitForm)}>
            <Input
              name="email"
              label="Email Address"
              register={register}
              error={errors.email?.message}
            />
            <Input
              type="password"
              name="password"
              label="Password"
              register={register}
              error={errors.password?.message}
            />
            <Button variant="info" type="submit" style={{ color: "white" }}>
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
};

export default Login;
