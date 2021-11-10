import React from "react";

const PLACE_HOLDER_DEFAULT = "Энд бичвэр ээ бичнэ үү!";

const TextArea = ({ placeholder, color, size, disabled, onChange }) => {
  const getPlaceholder = () => {
    return placeholder ? placeholder : PLACE_HOLDER_DEFAULT;
  };

  return (
    <textarea
      className={`textarea 
      ${color ? `is-${color}` : ""} 
      ${size ? `is-${size}` : ""}
      ${disabled && "disabled"}`}
      placeholder={getPlaceholder()}
      onChange={(e) => onChange(e)}
    ></textarea>
  );
};

export default TextArea;
