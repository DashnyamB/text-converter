import React from "react";
import "./style.scss";

const Input = (props) => {
  return (
    <div>
      <input
        className="input"
        type="text"
        name="text"
        placeholder="Энд бичвэрээ бичнэ үү!"
      />
    </div>
  );
};

export default Input;
