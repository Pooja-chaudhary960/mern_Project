import { Fragment } from "react";
import Header from "../Header";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <footer>All right reserved.</footer>
    </>
  );
};

export default MainLayout;
