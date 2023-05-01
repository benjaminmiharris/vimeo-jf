import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import Footer from "./Footer";
import NavbarCustom from "./Navbar";

import style from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  const { authToken } = useContext(AuthContext);
  return (
    <div className={style.layoutContainer}>
      {authToken && <NavbarCustom />}
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
