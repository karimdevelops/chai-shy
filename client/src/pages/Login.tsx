import { Link } from "@tanstack/react-router";
import FormInput from "../components/FormInput";
import "../styles/Auth.css";

export default function Login() {
  return (
    <div className="flex flex-col justify-between items-center gap-8">
      <h1 className="text-3xl md:text-4xl">Welcome back</h1>
      <form
        className="flex flex-col gap-6"
        action="/api/auth/login"
        method="POST"
      >
        <FormInput
          name="email"
          type="email"
          id="email"
          placeholder="Email"
          required={true}
        />
        <FormInput
          name="password"
          type="password"
          id="passwd"
          placeholder="Password"
          required={true}
        />
        <button className="btn theme-btn">Log in</button>
        <p className="auth-choice">or</p>
        <button className="btn transparent-btn icon-btn flex flex-center">
          <img src="/google.svg" alt="google" />
          Continue with Google
        </button>
      </form>
      <div className="flex flex-center flex-column flex-gap-20">
        <p className="info-text">Don't have an account?</p>
        <Link to="/signup">
          <button className="btn transparent-btn">Signup</button>
        </Link>
      </div>
    </div>
  );
}
