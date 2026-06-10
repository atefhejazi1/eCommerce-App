import { Input } from "@components/Form";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
import { Link, Navigate } from "react-router";
import useLogin from "@hooks/useLogin";
import styles from "./Auth.module.css";

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

  if (accessToken) return <Navigate to={"/"} />;

  return (
    <div className={styles.authPage}>
      {/* ── Brand panel ── */}
      <div className={styles.brandPanel}>
        <div className={styles.brandLogo}>
          Our <span>eCom</span>
        </div>
        <h2 className={styles.brandTitle}>
          Welcome <span>back</span> to<br />your store
        </h2>
        <p className={styles.brandSub}>
          Sign in and pick up where you left off — your cart and wishlist are waiting.
        </p>
        <div className={styles.brandFeatures}>
          <div className={styles.brandFeature}>
            <span>🛒</span> Instant access to your cart
          </div>
          <div className={styles.brandFeature}>
            <span>❤️</span> Saved wishlist items
          </div>
          <div className={styles.brandFeature}>
            <span>📦</span> Full order history
          </div>
        </div>
      </div>

      {/* ── Form panel ── */}
      <div className={styles.formPanel}>
        <div className={styles.formHeader}>
          <h2 className={styles.formTitle}>Sign in</h2>
          <p className={styles.formSub}>Enter your credentials to continue</p>
        </div>

        {searchParams.get("message") === "login_required" && (
          <Alert variant="warning" className="mb-3" style={{ fontSize: 14 }}>
            Please sign in to view that content.
          </Alert>
        )}
        {searchParams.get("message") === "account_created" && (
          <Alert variant="success" className="mb-3" style={{ fontSize: 14 }}>
            Account created — please log in.
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

          {error && <p className={styles.formError}>{error}</p>}

          <Button variant="info" type="submit" className={styles.submitBtn}>
            {loading === "pending" ? (
              <><Spinner animation="border" size="sm" /> Signing in…</>
            ) : (
              "Sign In"
            )}
          </Button>
        </Form>

        <p className={styles.switchLink}>
          Don't have an account?{" "}
          <Link to="/register">Create one free</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
