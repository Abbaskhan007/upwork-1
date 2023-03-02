import { Grid, Button } from "@mui/material";
import { FilterSvg } from "../assets/icons/SvgIconEngine";
import Checkbox from "./Checkbox";

function Filter({ makeCheckList, checkList }) {
  return (
    <>
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: "207px" }}
      >
        <Grid
          item
          sx={{
            width: "51px",
            height: "47px",
          }}
        >
          <Button
            startIcon={<FilterSvg />}
            sx={{
              color: "#000000",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "46px",
            }}
          >
            Filter
          </Button>
        </Grid>
        <Grid
          item
          sx={{
            width: "31px",
            height: "47px",
          }}
        >
          <Button
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: "46px",
              color: "#000000",
            }}
          >
            clear
          </Button>
        </Grid>
      </Grid>
      <Grid
        item
        sx={{
          width: "207px",
          height: "482px",
          background: "#FFFFFF",
          border: "1px solid #DEE2E6",
          boxShadow:
            "0px 1px 2px rgba(0, 0, 0, 0.1), 1px 1px 3px rgba(0, 0, 0, 0.08)",
          borderRadius: "8px",
          color: "#6C757D",
        }}
      >
        <Grid
          item
          sx={{
            padding: "16px 24px 12px",
            gap: "10px",
            width: "100%",
            height: "53px",
            fontFamily: "Raleway",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "21px",
            lineHeight: "25px",
          }}
        >
          <span>Category</span>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Checkbox makeCheckList={makeCheckList} checkList={checkList} />
        </Grid>
      </Grid>
    </>
  );
}

export default Filter;
