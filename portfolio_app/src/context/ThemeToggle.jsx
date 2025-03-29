import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Form from "react-bootstrap/Form";

function ThemeToggle() {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <Form.Check
        type="switch"
        id="theme-switch"
        checked={theme === "dark"}
        onChange={toggleTheme}
        className="ms-2"
        />
    );
}

export default ThemeToggle;