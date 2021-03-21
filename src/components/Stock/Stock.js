import React, { Fragment, useEffect, useState } from "react";

//redux imports
import { useDispatch, useSelector } from "react-redux";
import { getStocks } from "../../actions/stockActions";

const Stock = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStocks());
  }, [dispatch]);

  return <Fragment></Fragment>;
};

export default Stock;
