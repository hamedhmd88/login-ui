import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import layer9 from "../assets/Layer 9.png";
import portalBg from "../assets/portal-bg.png";
import "../Sidebar.css";
// Sidebar component manages the newsletter section with state transitions


export default function Sidebar() {
  const [currentState, setCurrentState] = useState(0); // State for current slide (0 or 1)
  const [animate, setAnimate] = useState(false); // State for animation trigger

  // Handle next button click
  const handleNext = () => {
    setAnimate(true);
    setTimeout(() => {
      setCurrentState(1);
      setAnimate(false);
    }, 300);
  };

  // Handle previous button click
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
    "به استحضار می‌رساند با توجه به جمع آوری و ورود اطلاعات بخش انتقال در سامانه ارس و تخصیص ۱۵ نمره از نمرات کل فصل هر استان به ورود و به روز نگه داشتن اطلاعات مربوطه در سامانه، خواهشمند است اطلاعات درخواستی جمع آوری و تا پایان وقت اداری ۹۸/۲/۲۲ ارسال گردد.";

  return (
    <div className="sidebar">
      {/* Sidebar header */}
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

      {/* Image or text container with timeline */}
      <div className="sidebar-image-container">
        <div className="timeline-line">
          <div className="timeline-circle top"></div>
          <div className="timeline-circle bottom"></div>
        </div>
        <div
          className={`content-wrapper ${animate ? "fade-out" : "fade-in"}`}
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

      {/* Navigation buttons */}
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
  );
}