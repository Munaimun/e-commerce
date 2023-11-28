import { Fragment } from "react";
import "./Navigation.styles.scss";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/crown.svg";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        {/* the logo link will take back to the home page */}
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
