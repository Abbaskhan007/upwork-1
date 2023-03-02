import React from "react";
import { createUseStyles } from "react-jss";

const CategoriesCard = ({ data: { Name, Background, IconName } }) => {
  const styles = useStyles();

  return (
    <div className={styles.categoryCard}>
      <div
        style={{
          background: Background,
          width: 320,
          height: 168,
          borderRadius: "14.687px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconName style={{ width: 60, height: 50 }} color="#FFFFFF" />
      </div>
      <p className={styles.categoryText}>{Name}</p>
    </div>
  );
};

const useStyles = createUseStyles({
  categoryCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryText: {
    fontFamily: "Oceanwide",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "18.552px",
    lineHeight: " 28px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
});

export default CategoriesCard;
