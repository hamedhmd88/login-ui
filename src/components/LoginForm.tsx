import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../assets/dp-full-logo.png";
import "../LoginForm.css";
// LoginForm component handles the login form logic and rendering


export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string }>(); // Form handling with react-hook-form

  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const [showPassword, setShowPassword] = useState(false); // State for password visibility toggle

  // Handle form submission
  const onSubmit = async (data: { email: string; password: string }) => {
    setIsLoading(true);
    // Simulate API request (replace with real API)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    setIsLoading(false);
  };

  return (
    <div className="form-wrapper">
      <img src={logo} alt="logo" className="logo" />
      <h3 className="system-title">سامانه جامع داده پرداز</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        {/* Email input field */}
        <div className="input-group">
          <input
            type="email"
            id="email"
            placeholder=" "
            {...register("email", {
              required: "لطفا این فیلد را پرکنید",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "پست الکترونیک معتبر وارد کنید",
              },
            })}
            className={`form-input ${errors.email ? "error" : ""}`}
          />
          <label htmlFor="email" className="input-label">
            پست الکترونیک
          </label>
        </div>
        {errors.email && (
          <span className="error-text">{errors.email.message}</span>
        )}

        {/* Password input field with toggle */}
        <div className="input-group">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder=" "
            {...register("password", {
              required: "لطفا این فیلد را پرکنید",
              minLength: {
                value: 4,
                message: "رمز عبور باید حداقل ۴ کاراکتر باشد",
              },
            })}
            className={`form-input ${errors.password ? "error" : ""}`}
          />
          <label htmlFor="password" className="input-label">
            رمز عبور
          </label>
          <span
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
        {errors.password && (
          <span className="error-text">{errors.password.message}</span>
        )}

        {/* Remember me checkbox */}
        <div className="remember-row">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">مرا به خاطر داشته باش</label>
        </div>

        {/* Submit button with loading state */}
        <button
          type="submit"
          className={`submit-btn ${isLoading ? "loading" : ""}`}
          disabled={isLoading}
        >
          {isLoading ? "در حال ورود به وب سایت..." : "ورود"}
        </button>
      </form>
    </div>
  );
}