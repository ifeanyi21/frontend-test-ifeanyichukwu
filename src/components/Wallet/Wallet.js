import React from "react";
import Info from "../assests/icons/info.svg";
import { useQuery } from "react-query";
import { getWallet } from "../api/api";
import Spinner from "../Spinner/Spinner";
import Chart from "../Charts/LineChart";

const Wallet = () => {
  const { isLoading, data } = useQuery("wallet", getWallet);

  console.log(data);

  if (isLoading) return <Spinner />;
  return (
    <div className="flex justify-between">
      <div>
        <div className="flex gap-16">
          <div>
            <p className="text-sm text-[#56616B]">Available Balance</p>
            <p className="text-3xl font-bold text-[#131316]">USD {data.balance.toFixed(2)}</p>
          </div>
          <div>
            <button className="px-7 py-[14px] w-[167px] bg-black text-white rounded-[100px] font-semibold text-base">
              Withdraw
            </button>
          </div>
        </div>
        <Chart />
      </div>
      <div>
        <div className="mb-8 w-[271px]">
          <div className="flex justify-between">
            <p className="text-sm text-[#56616B]">Ledger Balance</p>
            <button>
              <img src={Info} alt="info" />
            </button>
          </div>
          <p className="text-[28px] font-bold text-[#131316]">USD {data.ledger_balance.toFixed(2)}</p>
        </div>
        <div className="mb-8">
          <div className="flex justify-between">
            <p className="text-sm text-[#56616B]">Total Payout</p>
            <button>
              <img src={Info} alt="info" />
            </button>
          </div>
          <p className="text-[28px] font-bold text-[#131316]">USD {data.total_payout.toFixed(2)}</p>
        </div>
        <div className="mb-8">
          <div className="flex justify-between">
            <p className="text-sm text-[#56616B]">Total Revenue</p>
            <button>
              <img src={Info} alt="info" />
            </button>
          </div>
          <p className="text-[28px] font-bold text-[#131316]">USD {data.total_revenue.toFixed(2)}</p>
        </div>
        <div>
          <div className="flex justify-between">
            <p className="text-sm text-[#56616B]">Pending Payout</p>
            <button>
              <img src={Info} alt="info" />
            </button>
          </div>
          <p className="text-[28px] font-bold text-[#131316]">USD {data.pending_payout.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
