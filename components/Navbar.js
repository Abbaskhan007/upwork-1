import React, { useState, useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import { createUseStyles } from "react-jss";
import { CertificationFyiSvg, ClipArtSvg } from "./assets/icons/SvgIconEngine";
const Navbar = (props) => {
  const router = useRouter();
  const styles = useStyles();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    setWidth(window.innerWidth);
  }, []);

  return (
    <header>
      <div className="NavMain">
        <div className="container">
          <nav className="navigation">
            <a href="/">
              <div
                style={{
                  width: width < 468 ? "250px" : "100%",
                  display: "flex",
                  flexFlow: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <ClipArtSvg fill="#CD9703" className={styles.ClipArtSvg} />
                <CertificationFyiSvg
                  fill="#010079"
                  className={styles.CertificationFyiSvg}
                />
              </div>
            </a>
            <button
              className="hamburger"
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              {/* icon from Heroicons.com */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="white"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              className={
                isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
              }
            >
              <ul>
                <li>
                  <Link href="/" className={styles.navLinks}>
                    <span className={router.pathname == "/" ? "active" : ""}>
                      Home
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/certifications" className={styles.navLinks}>
                    <span
                      className={
                        router.pathname == "/certifications" ? "active" : ""
                      }
                    >
                      Certifications
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className={styles.navLinks}>
                    <span
                      className={
                        router.pathname == "/categories" ? "active" : ""
                      }
                    >
                      Categories
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={styles.navLinks}>
                    <span
                      className={router.pathname == "/contact" ? "active" : ""}
                    >
                      Contact
                    </span>
                  </Link>
                </li>
              </ul>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button className="navButton">Get Started</button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

const useStyles = createUseStyles({
  navLinks: {
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "18px",
    display: "flex",
    alignItems: "center",
  },
  ClipArtSvg: {
    width: "45.35px",
    height: "40.44px",
    display: "block",
    paddingLeft: "46px",
  },
  CertificationFyiSvg: {
    width: "252px",
    height: "43px",
    display: "block",
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "33px",
    lineHeight: "43px",
  },
});

export default Navbar;
