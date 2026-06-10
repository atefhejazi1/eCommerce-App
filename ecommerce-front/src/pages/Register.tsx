import { Col, Row, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Input } from "@components/Form";
import { Link, Navigate } from "react-router";
import useRegister from "@hooks/useRegister";
import styles from "./Auth.module.css";

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

  if (accessToken) return <Navigate to={"/"} />;

  return (
    <div className={styles.authPage}>
      {/* ── Brand panel ── */}
      <div className={styles.brandPanel}>
        <div className={styles.brandLogo}>
          Our <span>eCom</span>
        </div>
        <h2 className={styles.brandTitle}>
          Join thousands of<br /><span>happy shoppers</span>
        </h2>
        <p className={styles.brandSub}>
          Create your free account in seconds and start shopping from our curated collection.
        </p>
        <div className={styles.brandFeatures}>
          <div className={styles.brandFeature}>
            <span>✅</span> Free account — no credit card needed
          </div>
          <div className={styles.brandFeature}>
            <span>❤️</span> Save items to your wishlist
          </div>
          <div className={styles.brandFeature}>
            <span>📦</span> Track all your orders in one place
          </div>
          <div className={styles.brandFeature}>
            <span>🔒</span> Secure &amp; private
          </div>
        </div>
      </div>

      {/* ── Form panel ── */}
      <div className={styles.formPanel}>
        <div className={styles.formHeader}>
          <h2 className={styles.formTitle}>Create account</h2>
          <p className={styles.formSub}>It only takes a moment</p>
        </div>

        <Form onSubmit={handleSubmit(submitForm)}>
          <Row>
            <Col sm={6}>
              <Input
                label="First Name"
                name="firstName"
                register={register}
                error={errors.firstName?.message}
              />
            </Col>
            <Col sm={6}>
              <Input
                label="Last Name"
                name="lastName"
                register={register}
                error={errors.lastName?.message}
              />
            </Col>
          </Row>

          <Input
            label="Email Address"
            name="email"
            register={register}
            onBlur={emailOnBlurHandler}
            error={
              errors.email?.message
                ? errors.email.message
                : emailAvailabilityStatus === "notAvailable"
                ? "This email is already in use."
                : emailAvailabilityStatus === "failed"
                ? "Error from the server."
                : ""
            }
            formText={
              emailAvailabilityStatus === "checking"
                ? "Checking availability…"
                : ""
            }
            success={
              emailAvailabilityStatus === "available"
                ? "Email is available."
                : ""
            }
            disabled={emailAvailabilityStatus === "checking"}
          />

          <Input
            label="Password"
            name="password"
            type="password"
            register={register}
            error={errors.password?.message}
          />

          <Input
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            register={register}
            error={errors.confirmPassword?.message}
          />

          {error && <p className={styles.formError}>{error}</p>}

          <Button
            variant="info"
            type="submit"
            className={styles.submitBtn}
            disabled={
              emailAvailabilityStatus === "checking" || loading === "pending"
            }
          >
            {loading === "pending" ? (
              <><Spinner animation="border" size="sm" /> Creating…</>
            ) : (
              "Create Account"
            )}
          </Button>
        </Form>

        <p className={styles.switchLink}>
          Already have an account?{" "}
          <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
