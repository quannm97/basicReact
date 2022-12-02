import { Route, Routes, useNavigate } from "react-router-dom";
import HeaderComponent from "../header/header";
import FooterComponent from "../footer/footer";
import routes from "../../routes/routers";
import React, { useEffect } from "react";
import "./style.css";
const DefaultLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
  }, []);
  const showContentMenu = (routes) => {
    let result = null;
    if (routes) {
      result = routes.map((item, index) => {
        return (
          <Route key={index} path={item.path} element={item.component()} />
        );
      });
    }
    return result;
  };
  return (
    <>
      <HeaderComponent />

      <div className="default-content">
        <Routes>{showContentMenu(routes)}</Routes>
      </div>
      <FooterComponent />
    </>
  );
};
export default DefaultLayout;
