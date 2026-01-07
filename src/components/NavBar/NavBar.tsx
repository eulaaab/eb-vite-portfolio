import { useState } from "react";
import { Link } from "react-router-dom";
import cs from "classnames";
import classes from "./NavBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faRectangleList,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const hideMenu = () => {
    setIsActive(false);
  };

  return (
    <div>
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            Eula Bengco{" "}
          </a>
          <a
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            role="button"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-end">
          <div
            className={`navbar-menu  ${isActive ? "is-active" : ""}`}
            role="button"
            aria-label="menu"
            aria-expanded="false"
          >
            <Link
              className={cs(classes.item, "navbar-item")}
              to="/about"
              onClick={hideMenu}
            >
              <FontAwesomeIcon icon={faInfo} className="mr-3" />
              About
            </Link>
            <Link
              className={cs(classes.item, "navbar-item")}
              to="/experience"
              onClick={hideMenu}
            >
              <FontAwesomeIcon icon={faRectangleList} className="mr-3" />
              Experience
            </Link>
            <Link
              className={cs(classes.item, "navbar-item")}
              to="/toolkit"
              onClick={hideMenu}
            >
              <FontAwesomeIcon icon={faToolbox} className="mr-3" />
              Toolkit
            </Link>
          </div>
        </div>
        {/* </a> */}
      </nav>
    </div>
  );
};

export default NavBar;
