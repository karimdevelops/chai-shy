import { Link } from "@tanstack/react-router";
import FormInput from "../components/FormInput";
import "../styles/Auth.css";

export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl md:text-4xl">Signup</h1>
      <form
        className="flex-column flex-gap-30 flex"
        action="/api/auth/signup"
        method="POST"
        autoComplete="off"
      >
        <div className="flex flex-col gap-5 md:flex-row">
          <FormInput
            name="firstName"
            type="text"
            id="firstName"
            placeholder="First Name"
            required={true}
          />
          <FormInput
            name="lastName"
            type="text"
            id="lastName"
            placeholder="Last Name"
            required={true}
          />
        </div>
        <FormInput
          name="email"
          type="email"
          id="email"
          placeholder="Email"
          autoComplete="email"
          required={true}
        />
        <div className="flex flex-col gap-5 md:flex-row">
          <FormInput
            name="password"
            id="passwd"
            type="password"
            placeholder="Password"
            autoComplete="new-password"
            required={true}
          />
          <FormInput
            name="confirmPassword"
            id="confirmPasswd"
            type="password"
            placeholder="Confirm Password"
            autoComplete="new-password"
            required={true}
          />
        </div>
        <button className="bg-app-primary text-app-background rounded-full p-2 font-bold">
          Signup
        </button>
        <p className="auth-choice">or</p>
        <button className="text-app-primary border-app-primary flex justify-center gap-2 self-center rounded-full border px-5 py-2">
          <img src="/google.svg" alt="google" />
          Continue with Google
        </button>
      </form>
      <div className="flex-center flex-column flex-gap-20 flex">
        <p className="info-text">Don't have an account?</p>
        <Link to="/login">
          <button className="text-app-primary border-app-primary flex justify-center gap-2 rounded-full border px-5 py-2">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
