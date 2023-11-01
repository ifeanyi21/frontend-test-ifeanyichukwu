import React from "react";
import Product1 from "../assests/icons/Product Icons.svg";
import Product2 from "../assests/icons/vector.svg";
import Product3 from "../assests/icons/vector1.svg";
import Product4 from "../assests/icons/Product Icons2.svg";
import { Tooltip } from "@mui/material";

const AppBar = () => {
  return (
    <div className="AppBar fixed top-[40%] left-[16px] inline-flex p-1 rounded-[100px]">
      <div className="flex flex-col gap-2 items-start">
        <Tooltip title="Link in Bio" placement="right" arrow>
          <div className="p-2 appBarImage">
            <img className="h-[24px] w-[24px]" src={Product1} alt="" />
          </div>
        </Tooltip>
        <Tooltip title="Store" placement="right" arrow>
          <div className="p-2 appBarImage">
            <img className="h-[24px] w-[24px]" src={Product2} alt="" />
          </div>
        </Tooltip>

        <Tooltip title="Media Kit" placement="right" arrow>
          <div className="p-2 appBarImage">
            <img className="h-[24px] w-[24px]" src={Product3} alt="" />
          </div>
        </Tooltip>

        <Tooltip title="Invoicing" placement="right" arrow>
          <div className="p-2 appBarImage">
            <img className="h-[24px] w-[24px]" src={Product4} alt="" />
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default AppBar;
