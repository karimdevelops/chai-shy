import { Link } from "@tanstack/react-router";
import "../styles/Auth.css";

export default function Signup() {
  return (
    <div className="flex flex-column flex-center flex-gap-20">
      <h1 className="auth-heading">Signup</h1>
      <form
        className="flex flex-column flex-gap-30"
        action="/api/auth/signup"
        method="POST"
        autoComplete="off"
      >
        <div className="flex flex-gap-20">
          <input name="firstName" type="text" placeholder="First Name" />
          <input name="lastName" type="text" placeholder="Last Name" />
        </div>
        <input name="email" type="text" id="email" placeholder="Email" />
        <div className="flex flex-gap-20">
          <input name="password" type="password" placeholder="Password" />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <button className="btn theme-btn">Signup</button>

        <p className="auth-choice">or</p>

        <button className="btn transparent-btn icon-btn flex flex-center">
          <img src="/google.svg" alt="google" />
          Continue with Google
        </button>
      </form>
      <div className="flex flex-center flex-column flex-gap-20">
        <p className="info-text">Already have an account?</p>
        <Link to="/login">
          <button className="btn transparent-btn">Log in</button>
        </Link>
      </div>
    </div>
  );
}
