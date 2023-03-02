import React, { useEffect, useState } from "react";
import { StrokeSvg, EllipseSvg } from "./assets/icons/SvgIconEngine";
import { createUseStyles } from "react-jss";
import Grid from "@mui/material/Grid";
import { categories } from "./categoriesData";
import CategoriesCard from "./common/CategoriesCard";
import CertificationsCard from "./common/CertificationsCard";
import { certifications } from "./certificationsData";
import Link from "next/link";

const Body = () => {
  const styles = useStyles();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage:
            width > 568
              ? 'url("/backgroundImage.svg")'
              : 'url("/backgroundImage_responsive.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className={styles.main}
      >
        <div className={styles.textdiv}>
          <h1 className={styles.theading}>
            Find Top certifications for <br /> Your next career Move
          </h1>

          <p className={styles.ptext}>
            Level up your career and secure your dream job with <br /> our
            industry-recognized certification information at <br /> your
            fingertips
          </p>
          <div className={styles.btndiv}>
            <Link
              href="/certifications"
              passHref
              style={{
                textDecoration: "none",
              }}
            >
              <button className={styles.cebtn}>Certifications</button>
            </Link>
            <Link
              href="/categories"
              passHref
              style={{
                textDecoration: "none",
              }}
            >
              <button className={styles.cabtn}>Categories</button>
            </Link>
          </div>
        </div>
      </div>
      <Grid container style={{ backgroundColor: "#F5F7FF" }}>
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          lg={6}
        >
          <Grid item>
            <p className={styles.certificationsHeading}>
              Popular online Certifications
            </p>
          </Grid>
          <Grid item className={styles.popularGrid}>
            <EllipseSvg fill="#F3F4F6" className={styles.popularEllipse} />
            <Link
              href="/certifications"
              passHref
              style={{
                textDecoration: "none",
              }}
            >
              <StrokeSvg fill="#111827" className={styles.popularStroke} />
            </Link>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          xs={12}
          md={12}
          lg={12}
        >
          {certifications?.map((item, index) => {
            if (Math.abs(index % 2) == 1) {
              return (
                <Grid
                  item
                  className={styles.certificateCard}
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  xs={12}
                  md={5}
                  lg={5}
                  key={index}
                >
                  <CertificationsCard data={item} key={index} />
                </Grid>
              );
            } else {
              return (
                <Grid
                  item
                  className={styles.certificateCard}
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  xs={12}
                  md={5}
                  lg={5}
                  key={index}
                >
                  <CertificationsCard data={item} key={index} />
                </Grid>
              );
            }
          })}
        </Grid>
        <Grid
          item
          className={styles.veiwAlldiv}
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-end"
          xs={12}
          md={11}
          lg={11}
        >
          <Grid item>
            <p className={styles.veiwAlltext}>View all</p>
          </Grid>
          <Grid item className={styles.popularGrid}>
            <EllipseSvg fill="#000000" className={styles.viewAllEllipse} />
            <Link
              href="/certifications"
              passHref
              style={{
                textDecoration: "none",
              }}
            >
              <StrokeSvg fill="white" className={styles.viewAllStroke} />
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          lg={6}
        >
          <Grid item>
            <p className={styles.certificationsHeading}>
              Popular online categories
            </p>
          </Grid>
          <Grid item className={styles.popularGrid}>
            <EllipseSvg fill="#F3F4F6" className={styles.popularEllipse} />
            <StrokeSvg fill="#111827" className={styles.popularStroke} />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={12}
          lg={12}
          sx={{ width: "20%" }}
        >
          {categories?.map((item, index) => {
            if ([1, 4, 7, 6].includes(index)) {
              return (
                <Grid
                  item
                  className={styles.categoryCard}
                  xs={12}
                  md={4}
                  lg={4}
                  key={index}
                >
                  <CategoriesCard data={item} key={index} sx={{}} />
                </Grid>
              );
            } else if ([2, 5, 8].includes(index)) {
              return (
                <Grid
                  item
                  className={styles.categoryCard}
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  xs={12}
                  md={4}
                  lg={4}
                  key={index}
                >
                  <CategoriesCard data={item} key={index} />
                </Grid>
              );
            } else if ([0, 3].includes(index)) {
              return (
                <Grid
                  item
                  className={styles.categoryCard}
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  xs={12}
                  md={4}
                  lg={4}
                  key={index}
                >
                  <CategoriesCard data={item} key={index} />
                </Grid>
              );
            }
          })}
        </Grid>
        <Grid
          item
          className={styles.veiwAlldiv}
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-end"
          xs={12}
          md={11}
          lg={11}
        >
          <Grid item>
            <p className={styles.veiwAlltext}>View all</p>
          </Grid>
          <Grid item className={styles.popularGrid}>
            <EllipseSvg fill="#000000" className={styles.viewAllEllipse} />
            <Link
              href="/categories"
              passHref
              style={{
                textDecoration: "none",
              }}
            >
              <StrokeSvg fill="white" className={styles.viewAllStroke} />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const useStyles = createUseStyles({
  popularGrid: {
    position: "relative",
    paddingLeft: "5px",
  },
  viewAllEllipse: {
    width: "32px",
    height: "32px",
  },
  popularEllipse: {
    width: "48px",
    height: "48px",
  },
  popularStroke: {
    width: "8px",
    height: "14px",
    position: "absolute",
    display: "block",
    left: "45.67%",
    bottom: "37.5%",
  },
  viewAllStroke: {
    width: "7.41px",
    height: "12px",
    position: "absolute",
    display: "block",
    left: "46.67%",
    bottom: "37.67%",
  },
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 780,
  },
  textdiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
  },
  theading: {
    color: "#010079",
    fontSize: "44.37px",
    fontWeight: 600,
    textTransform: "uppercase",
    fontStyle: "normal",
    fontFamily: "Oceanwide",
    lineHeight: "62px",
    textAlign: "center",
    textTransform: "uppercase",
  },
  ptext: {
    color: "#6F6F6F",
    fontSize: "21.3037px",
    fontFamily: "Raleway",
    fontWeight: 400,
    fontStyle: "normal",
    letterSpacing: "0.236872px",
    lineHeight: "25px",
    textAlign: "center",
  },
  btndiv: {
    display: "flex",
    gap: 25,
    marginTop: 50,
  },
  cebtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
    background: "#CD9703",
    color: "#010079",
    fontSize: 21,
    lineHeight: "31px",
    fontFamily: "Oceanwide, system-ui",
    fontStyle: "normal",
    fontWeight: "600",
    padding: "15px 30px",
    border: "#CD9703",
    width: "194.17px",
    height: "61.08px",
    cursor: "pointer",
  },
  cabtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
    background: "#FFFFFF",
    color: "#010079",
    fontSize: 21,
    fontFamily: "Oceanwide, system-ui",
    lineHeight: "31px",
    fontStyle: "normal",
    fontWeight: "600",
    padding: "15px 35px",
    border: "2px solid #CD9703",
    cursor: "pointer",
    width: 186,
    height: 61,
  },
  certificationsMaindiv: {
    height: "100%",
    background: "#F5F7FF",
    padding: 40,
  },
  certificationsContainer: {
    width: "75%",
    margin: "0 auto",
  },
  certificationsHeadingdiv: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  certificationsHeading: {
    color: "#111827",
    fontSize: "26px",
    fontWeight: 600,
    fontStyle: "normal",
    fontFamily: "Oceanwide",
    lineHeight: "39px",
  },
  iconAngleright: {
    position: "absolute",
  },
  certificateCardDiv: {
    display: "flex",
    direction: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  certificateCard: {
    marginBottom: 25,
    marginTop: 25,
  },
  veiwAlldiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 10,
  },
  veiwAlltext: {
    color: "rgba(0, 0, 0, 0.54)",
    fontSize: 18,
    fontWeight: 600,
    fontStyle: "normal",
    fontFamily: "Inter",
    lineHeight: "27px",
  },
  veiwAllIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#000000",
    height: "30px",
    width: "30px",
    borderRadius: 50,
    cursor: "pointer",
  },
  categoriesMaindiv: {
    height: "100%",
    background: "#FFFFFF",
    padding: 40,
  },
  categoriesContainer: {
    width: "75%",
    margin: "0 auto",
  },
  categoryCardDiv: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    marginTop: 10,
  },
  categoryCard: {
    // marginBottom: 30,
    // marginTop: 30,
    width: "10% !important",
  },
  "@media (max-width: 768px)": {
    certificationsContainer: {
      width: "100%",
      margin: "0 auto",
    },
    categoriesContainer: {
      width: "100%",
      margin: "0 auto",
    },
  },
  "@media (max-width: 568px)": {
    main: {
      height: 400,
      paddingBottom: 50,
    },
    theading: {
      color: "#010079",
      fontSize: 23,
      fontWeight: 500,
      textTransform: "uppercase",
      fontStyle: "normal",
      fontFamily: "Oceanwide, system-ui",
    },
    ptext: {
      color: "#6F6F6F",
      fontSize: 12,
      fontWeight: 300,
      fontStyle: "normal",
      letterSpacing: "0.236872px",
    },

    iconAngleright: {
      display: "none",
    },
    certificationsHeadingdiv: {
      justifyContent: "center",
    },

    veiwAlldiv: {
      justifyContent: "center",
    },
  },
});

export default Body;
