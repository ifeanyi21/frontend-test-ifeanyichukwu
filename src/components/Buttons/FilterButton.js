import React from "react";

const FilterButton = ({ text, icon, onClick }) => {
  return (
    <button
      className="text-base bg-[#EFF1F6] rounded-[100px] font-semibold flex justify-center items-center"
      style={{ padding: "12px 20px 12px 30px" }}
      onClick={onClick}
    >
      {text}
      <span className="ml-1">
        <img src={icon} alt={text} />
      </span>
    </button>
  );
};

export default FilterButton;
