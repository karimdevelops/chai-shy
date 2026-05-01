import { Link } from "@tanstack/react-router";
import "../styles/Auth.css";

export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl md:text-5xl">Signup</h1>
      <form
        className="flex flex-column flex-gap-30"
        action="/api/auth/signup"
        method="POST"
        autoComplete="off"
      >
        <div className="flex flex-col md:flex-row gap-5">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            required
          />
          <input name="lastName" type="text" placeholder="Last Name" required />
        </div>
        <input
          name="email"
          type="email"
          id="email"
          placeholder="Email"
          required
        />
        <div className="flex flex-col md:flex-row gap-5">
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            required
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
