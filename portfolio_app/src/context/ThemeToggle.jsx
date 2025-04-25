import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Form from "react-bootstrap/Form";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="d-flex align-items-center gap-2">
      <FaSun color={theme === "light" ? "#f39c12" : "#ccc"} />
      <Form.Check
        type="switch"
        id="theme-switch"
        checked={theme === "dark"}
        onChange={toggleTheme}
        className="mb-0"
        style={{
          cursor: "pointer",
        }}
      />
      <FaMoon color={theme === "dark" ? "#f1c40f" : "#ccc"} />
    </div>
  );
}

export default ThemeToggle;
