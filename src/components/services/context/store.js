import { createContext, useReducer } from "react";
import { FilterReducer } from "../reducer/FilterReducer";

const Filter = createContext();

const INITIAL_STATE = {
  type: [
    "Store Transactions",
    "Get Tipped",
    "Withdrawals",
    "Chargebacks",
    "Cashbacks",
    "Refer & earn",
  ],
  status: ["Successful", "Pending", "Failed"],
  start: "",
  end: "",
  data: [],
  user: null,
};

export function FilterProvider({ children }) {
  const [reactState, dispatch] = useReducer(FilterReducer, INITIAL_STATE);

  return (
    <Filter.Provider value={[reactState, dispatch]}>{children}</Filter.Provider>
  );
}

export default Filter;
