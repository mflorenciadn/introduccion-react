import * as React from "react";
import "./Button.css";

const Button = ({ children, onClick, disabled }) => (
  <button onClick={onClick} disabled={disabled}>
    {children}
  </button>
);

export default Button;
