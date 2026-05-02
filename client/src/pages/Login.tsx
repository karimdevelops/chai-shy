import { Link } from "@tanstack/react-router";
import FormInput from "../components/FormInput";
import "../styles/Auth.css";
import Button from "../components/ThemeButton";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-between gap-8">
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
        <Button text="Login" />
        <p className="auth-choice">or</p>
        <button className="text-app-primary border-app-primary flex justify-center gap-2 rounded-full border px-5 py-2">
          <img src="/google.svg" alt="google" />
          Continue with Google
        </button>
      </form>
      <div className="flex-center flex-column flex-gap-20 flex">
        <p className="info-text">Don't have an account?</p>
        <Link to="/signup">
          <button className="text-app-primary border-app-primary flex justify-center gap-2 rounded-full border px-5 py-2">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
}
