import React from "react";
import Success from "../assests/icons/Ellipse 24.svg";
import Alert from "../assests/icons/Group 6782.svg";
import formatDate from "../FormatDate/FormatDate";

const Transaction = ({ data }) => {
  return (
    <>
      <div className="flex gap-[14px]">
        <div>
          <img src={data.type === "deposit" ? Success : Alert} alt="" />
        </div>
        <div>
          <p className="text-[#131316] font-medium text-base ">
            {data?.metadata?.product_name || "Buy me a coffee"}
          </p>
          <p
            className={`${
              data?.status === "successful"
                ? "text-[#0EA163]"
                : data?.status === "pending"
                ? "text-[#A77A07]"
                : "text-[#56616B]"
            } text-sm font-medium capitalize`}
          >
            {data?.status}
          </p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-[#131316] font-bold text-base">USD {data.amount}</p>
        <p className="text-[#56616B] text-sm font-medium">
          {formatDate(data.date)}
        </p>
      </div>
    </>
  );
};

export default Transaction;
