import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import adRoutes from "../../routes/adRouters";
import HeaderAdmin from "../HeaderPage/HeaderAdmin";
import FooterComponent from "../../common/footer/footer";

const DefaultAdmin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
  }, []);
  const showContentMenu = (adRoutes) => {
    let result = null;
    if (adRoutes) {
      result = adRoutes.map((item, index) => {
        return (
          <Route key={index} path={item.path} element={item.component()} />
        );
      });
    }
    return result;
  };
  return (
    <>
      <HeaderAdmin />
      <Routes>{showContentMenu(adRoutes)}</Routes>
      <FooterComponent />
    </>
  );
};

export default DefaultAdmin;
