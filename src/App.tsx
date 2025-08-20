import "./App.css";
import layer20 from "./assets/Layer 20.png";
import LoginForm from "./components/LoginForm";
import Sidebar from "./components/Sidebar";


// Main App component that composes the login page
export default function App() {
  return (
    <>
      <div className="login-page" dir="rtl">
        <img src={layer20} alt="layer20" className="bottom-left-image" />
        <div className="login-container">
          {/* Login form section */}
          <LoginForm />
          {/* Sidebar section */}
          <Sidebar />
        </div>
      </div>
      <div className="horizontal-line-container">
        <div className="horizontal-line "></div>
        <div className="horizontal-line "></div>
      </div>
    </>
  );
}