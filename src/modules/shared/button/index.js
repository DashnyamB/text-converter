import React from "react";
import "./style.scss";

const Button = ({ text, color, size, light, clicked, action }) => {
  return (
    <button
      className={`button 
      ${color ? `is-${color}` : ""} 
      ${size ? `is-${size}` : ""} 
      ${light && "is-light"} `}
      onClick={() => clicked(action)}
    >
      {text}
    </button>
  );
};

export default Button;
