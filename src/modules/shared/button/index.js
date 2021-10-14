import React from "react";
import "./style.scss";

const Button = ({ text, color, size, light }) => {
  return (
    <button
      className={`button 
      ${color ? `is-${color}` : ""} 
      ${size ? `is-${size}` : ""} 
      ${light && "is-light"} `}
    >
      {text}
    </button>
  );
};

export default Button;
