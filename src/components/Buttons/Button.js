import React from "react";

const Button = ({ text, onClick, css }) => {
  return (
    <button
      className={`${css} px-6 py-3 w-full border-[#EFF1F6] border-[1px] rounded-[100px] flex justify-center items-center`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
