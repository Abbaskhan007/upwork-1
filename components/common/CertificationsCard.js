import React from "react";
import { createUseStyles } from "react-jss";
import { BiCloud } from "react-icons/bi";
import { UserLockSvg } from "../assets/icons/SvgIconEngine";

const CertificationsCard = ({
  data: {
    Company,
    Certification,
    Designation,
    CategoryIcon,
    Title,
    CategoryDetails,
    Background,
  },
}) => {
  const styles = useStyles();

  return (
    <div className={styles.maindiv}>
      <div className={styles.titles} style={{ background: Background }}>
        <div className={styles.cicondiv}>
          <BiCloud color="#FFFFFF" className={styles.icon} />
        </div>
        <div className={styles.tcdiv}>
          <p className={styles.tcname}>{Company}</p>
          <p className={styles.ttheading}>
            {Certification} <br />
            {Designation}
          </p>
        </div>
        <div className={styles.uicondiv}>
          {CategoryIcon ? (
            <CategoryIcon color="#FFFFFF" className={styles.icon} />
          ) : null}
        </div>
      </div>
      <div className={styles.detaildiv}>
        <div>
          <p className={styles.tiheading}>{Title}</p>
        </div>
        <div>
          <button className={styles.tbtn}>Program Details</button>
        </div>
        <div className={styles.itdiv}>
          {CategoryDetails.map(({ Icon, IconTitle }, index) => {
            return (
              <>
                <Icon color="#6F6F6F" className={styles.icon}></Icon>
                <p className={styles.icontext}>{IconTitle}</p>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const useStyles = createUseStyles({
  maindiv: {
    background: "#FFFFFF",
    borderRadius: "15px",
    border: "2.71303px solid #4B56D2",
    width: 450,
    height: 200,
    display: "flex",
  },
  titles: {
    borderRadius: "12px 0px 0px 14px",
    width: 180,
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  detaildiv: {
    flex: 1,
    paddingLeft: 18,
  },
  cicondiv: {
    display: "flex",
    justifyContent: "flex-end",
    padding: 8,
  },
  tcdiv: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
  },
  tcname: {
    fontFamily: "Inter, sans-serif",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "8.91128px",
    color: "#FFFFFF",
    margin: 0,
    marginBottom: 5,
    lineHeight: "20px",
  },
  ttheading: {
    fontFamily: "Inter, sans-serif",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "14.8521px",
    color: "#FFFFFF",
    margin: 0,
    lineHeight: "20px",
  },
  uicondiv: {
    display: "flex",
    justifyContent: "flex-start",
    padding: 8,
  },
  icon: {
    width: 20,
    height: 20,
  },
  tiheading: {
    fontFamily: "Oceanwide, sans-serif",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "20.2946px",
    color: "#221D77",
    textAlign: "left",
    lineHeight: "24px",
    width: "240.11px",
    height: "43.81px",
  },
  tbtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    background: "#FFFFFF",
    color: "#CD9703",
    fontSize: "10.0214px",
    fontFamily: "Inter, sans-serif",
    fontStyle: "normal",
    padding: "4px 8px",
    cursor: "pointer",
    border: "2.5px solid #CD9703",
    borderRadius: "6.68096px",
    fontWeight: 600,
    lineHeight: "22px",
  },
  itdiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 2,
    marginTop: 15,
    marginRight: 4,
  },
  icontext: {
    fontFamily: "Inter, sans-serif",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "9.90872px",
    color: "rgba(0, 0, 0, 0.54)",
    lineHeight: "22px",
  },
  "@media (max-width: 568px)": {
    maindiv: {
      width: 410,
    },
    titleName: {
      width: "170px",
    },
  },
});

export default CertificationsCard;
