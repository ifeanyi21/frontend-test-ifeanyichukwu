import React, { useContext } from "react";
import Logo from "../assests/icons/mainstack-logo.svg";
import { Link } from "react-router-dom";
import navigation from "../Navigation";
import Bell from "../assests/icons/notifications.svg";
import Message from "../assests/icons/chat.svg";
import Menu from "../assests/icons/menu.svg";
import Filter from "../services/context/store";

const Navbar = () => {
  const [state] = useContext(Filter);
  const { user } = state;
  return (
    <div className="flex px-6 py-[14px] rounded-[100px] shadow justify-between">
      <div className="w-[36px] h-[36px]">
        <img src={Logo} className="w-full" alt="logo" />
      </div>
      <div className="flex gap-5">
        {navigation.map((item) => {
          return (
            <Link
              to={item.url}
              className={`${
                item.name === "Revenue"
                  ? "text-white bg-black"
                  : "text-[#56616B] hover:bg-[#EFF1F6]"
              } flex items-center rounded-[100px]`}
              style={{ padding: "8px 18px 8px 14px" }}
              key={item.name}
            >
              <img
                className="w-[20px] h-[20px] mr-1"
                src={item.image}
                alt="Home icon"
              />
              <span className="text-base">{item.name}</span>
            </Link>
          );
        })}
      </div>
      <div className="flex gap-3">
        <button className="flex h-10 w-10 items-center justify-center">
          <img className="w-[20px] h-[20px]" src={Bell} alt="Home icon" />
        </button>
        <button>
          <img className="w-[20px] h-[20px]" src={Message} alt="Home icon" />
        </button>
        <button
          className="bg-[#EFF1F6] flex items-center rounded-[100px]"
          style={{ padding: " 4px 12px 4px 5px" }}
        >
          <div className="bg-black rounded-[100px] text-white mr-2 w-8 h-8 flex justify-center items-center text-sm">
            {user?.first_name[0] || " "}
            {user?.last_name[0] || " "}
          </div>
          <img
            className="w-[24px] h-[24px] rounded-[100px]"
            src={Menu}
            alt="Home icon"
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
