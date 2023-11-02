import React, { useContext, useEffect } from "react";
import { getUser } from "../api/api";
import { useQuery } from "react-query";
import Spinner from "../Spinner/Spinner";
import Filter from "../services/context/store";
import { ACTION_TYPES } from "../services/actions/actions";

const Layout = ({ children }) => {
  const { isLoading, data } = useQuery("user", getUser);

  const [, dispatch] = useContext(Filter);

  useEffect(() => {
    dispatch({ type: ACTION_TYPES.LOGIN, payload: data });
  }, [data, dispatch]);

  if (isLoading) return <Spinner />;
  return <div className="pt-16 px-[140px]">{children}</div>;
};

export default Layout;
