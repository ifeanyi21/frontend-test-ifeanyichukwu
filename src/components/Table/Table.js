import React from "react";
import FilterButton from "../Buttons/FilterButton";
import Transaction from "./Transaction";
import DownloadIcon from "../assests/icons/download.svg";
import FilterModal from "../FilterModal";
import { useQuery } from "react-query";
import Spinner from "../Spinner/Spinner";
import { getTranscations } from "../api/api";

const Table = () => {
  const { isLoading, data } = useQuery("transactions", getTranscations);

  if (isLoading) return <Spinner />;
  return (
    <div className="mt-[82px]">
      <header className="flex justify-between">
        <div>
          <div>
            <p className="text-2xl font-bold">{data.length} Transactions</p>
            <p>Your transactions for the last 7 days</p>
          </div>
        </div>
        <div className="flex gap-3">
          <FilterModal />
          <FilterButton text={"Export list"} icon={DownloadIcon} />
        </div>
      </header>
      <div className="mt-[33px]">
        {data.map((transcation, index) => {
          return (
            <div className="flex justify-between mb-6" key={index}>
              <Transaction data={transcation} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Table;
