import Grid from "@mui/material/Grid";
import React from "react";
import Link from "@mui/material/Link";
import { createUseStyles } from "react-jss";
import { CertificationFyiSvg, ClipArtSvg } from "./assets/icons/SvgIconEngine";
import Typography from "@mui/material/Typography";
export const Footer = () => {
  const styles = useStyles();
  return (
    <footer className={styles.maindiv}>
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid item>
            <ClipArtSvg fill="#000000" className={styles.ClipArtSvg} />
          </Grid>
          <Grid item>
            <CertificationFyiSvg
              className={styles.CertificationFyiSvg}
              fill="#000000"
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          xs={12}
          md={12}
          lg={12}
        >
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Grid
                item
                xs={6}
                md={4}
                lg={4}
                container
                pl={0}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Link href="#" underline="hover" className={styles.footerText}>
                  About
                </Link>
              </Grid>
              <Grid
                item
                xs={6}
                md={4}
                lg={4}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Link href="#" underline="hover" className={styles.footerText}>
                  Facebook
                </Link>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Grid
                item
                xs={6}
                md={4}
                lg={4}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{ marginTop: 4 }}
              >
                <Link href="#" underline="hover" className={styles.footerText}>
                  Privacy
                </Link>
              </Grid>
              <Grid
                item
                xs={6}
                md={4}
                lg={4}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{ marginTop: 4 }}
              >
                <Link href="#" underline="hover" className={styles.footerText}>
                  Twitter
                </Link>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
              style={{ marginTop: 4 }}
            >
              <Grid
                item
                xs={6}
                md={4}
                lg={4}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{ marginTop: 4 }}
              >
                <Link href="#" underline="hover" className={styles.footerText}>
                  Contact
                </Link>
              </Grid>
              <Grid
                item
                xs={6}
                md={4}
                lg={4}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{ marginTop: 4 }}
              >
                <Link href="#" underline="hover" className={styles.footerText}>
                  Linkedin
                </Link>
              </Grid>
            </Grid>
            <Grid
              item
              xs={6.7}
              md={6.8}
              lg={6.8}
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Grid style={{ marginTop: 4 }} item>
                <Link href="#" underline="hover" className={styles.footerText}>
                  Instagram
                </Link>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid style={{ marginTop: 30 }} item>
                <Link
                  href="mailto:contact@lift.agencyr.com"
                  underline="always"
                  className={styles.contactText}
                >
                  contact@lift.agencyr.com
                </Link>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              pt={6}
            >
              <Grid item>
                <Typography align="center " className={styles.footerText}>
                  &copy; {new Date().getFullYear()} certifications.fyi. All
                  rights reserved.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};

const useStyles = createUseStyles({
  maindiv: {
    padding: "4em 0",
  },
  footerText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "20px",
    color: "inherit",
  },
  contactText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "22px",
    color: "inherit",
    marginTop: "20px",
  },
  CertificationFyiSvg: { width: 244, height: "39px", display: "block" },
  ClipArtSvg: {
    width: "49.95px",
    height: "44.54px",
    display: "block",
    paddingLeft: "46px",
  },
});
