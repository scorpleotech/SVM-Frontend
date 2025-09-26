import React from "react";
import Header from "./header";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoaderComponent from "../Components/LoaderComponent";

const GuestLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.userLogin);
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      {loading && <LoaderComponent loading={loading} />}
    </div>
  );
};

export default GuestLayout;
