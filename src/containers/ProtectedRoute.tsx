import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import LayoutTemplate from "./LayoutTemplate";

interface ProtectedRoutesProps {}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({}) => {
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  if (!getCookie("user_token")) {
    return <Navigate to="/" replace />;
  }
  return (
    <LayoutTemplate>
      <Outlet />
    </LayoutTemplate>
  );
};

export default ProtectedRoutes;
