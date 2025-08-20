import { useForm } from "react-hook-form";
import "./App.css";
import logo from "./assets/dp-full-logo.png";
import layer9 from "./assets/Layer 9.png";
import layer20 from "./assets/Layer 20.png";
import portalBg from "./assets/portal-bg.png"; // import جدید
import { useState } from "react";
import { FaEye, FaEyeSlash, FaArrowLeft, FaArrowRight } from "react-icons/fa"; // import آیکون‌های جدید

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string }>();

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // state جدید برای toggle password
  const [currentState, setCurrentState] = useState(0);
  const [animate, setAnimate] = useState(false);

  const onSubmit = async (data: { email: string; password: string }) => {
    setIsLoading(true);
    // شبیه‌سازی درخواست (جایگزین با API واقعی)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    setIsLoading(false);
  };

  const handleNext = () => {
    setAnimate(true);
    setTimeout(() => {
      setCurrentState(1);
      setAnimate(false);
    }, 300); // زمان انیمیشن
  };

  const handlePrevious = () => {
    setAnimate(true);
    setTimeout(() => {
      setCurrentState(0);
      setAnimate(false);
    }, 300);
  };

  const originalSidebarText =
    "جلسه بررسی ارزیابی‌های اخیر با حضور مسئولین\nمناطق ویژه راه‌اندازی شد";

  const newSidebarText = "جلسه ارزیابی و ورود اطلاعات";

  const multiLineText =
    "در این ارزیابی مراحلی به جهت اعمال ارزیابی در سامانه وارد شده است.\nارزیابی ها شامل ۱۰ پارامتر کیفی، سنجش و رتبه بندی می باشد.\nسامانه اطلاعات وارد شده را دریافت و در خروجی، اطلاعات را به صورت نمودار و گزارش ارائه می کند.\nسالگرد ۹۹/۴/۹";

  return (
    <>
      <div className="login-page" dir="rtl">
        <img src={layer20} alt="layer20" className="bottom-left-image" />
        <div className="login-container">
          {/* فرم سفید سمت راست */}
          <div className="form-wrapper">
            <img src={logo} alt="logo" className="logo" />
            <h3 className="system-title">سامانه جامع داده پرداز</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">
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

              <div className="remember-row">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">مرا به خاطر داشته باش</label>
              </div>

              <button
                type="submit"
                className={`submit-btn ${isLoading ? "loading" : ""}`}
                disabled={isLoading}
              >
                {isLoading ? "در حال ورود به وب سایت..." : "ورود"}
              </button>
            </form>
          </div>
          {/* بخش آبی سمت چپ */}
          <div className="sidebar">
            <div className="sidebar-header">
              <img
                src={layer9}
                alt="newsletter-icon"
                className="sidebar-icon"
              />
              <div className="sidebar-border"></div>
              <div>
                <h2 className="sidebar-title">NEWSLETTER</h2>
                <p className="sidebar-subtitle">خبرنامه</p>
              </div>
            </div>
            <p className={`sidebar-text ${animate ? "fade-in" : ""}`}>
              {currentState === 0 ? originalSidebarText : newSidebarText}
            </p>

            <div className="sidebar-image-container">
              <div className="timeline-line">
                <div className="timeline-circle top"></div>
                <div className="timeline-circle bottom"></div>
              </div>
              <div
                className={`content-wrapper ${
                  animate ? "fade-out" : "fade-in"
                }`}
              >
                {currentState === 0 ? (
                  <img
                    src={portalBg}
                    alt="portal"
                    className="sidebar-main-img"
                  />
                ) : (
                  <p className="multi-line-text">{multiLineText}</p>
                )}
              </div>
            </div>

            <div className="sidebar-nav">
              <button
                className="nav-btn"
                onClick={handlePrevious}
                disabled={currentState === 0}
              >
                <FaArrowRight className="icon-nav" />{" "}
                <span className="nav-text">قبلی</span>
              </button>
              <button
                className="nav-btn"
                onClick={handleNext}
                disabled={currentState === 1}
              >
                <span className="nav-text">بعدی</span> <FaArrowLeft />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="horizontal-line-container">
        <div className="horizontal-line "></div>
        <div className="horizontal-line "></div>
      </div>
    </>
  );
}

export default App;
