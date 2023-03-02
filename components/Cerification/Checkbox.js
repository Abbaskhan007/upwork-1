import { Checkbox as MuiCheckBox, Grid } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";

function Checkbox({ makeCheckList, checkList }) {
  console.log("---- Labels ---", checkList);
  const keys = Object.keys(checkList);
  const values = Object.values(checkList);
  console.log("keys: ", keys);
  console.log("Value: ", values);
  return (
    <>
      {keys.map((label, index) => {
        return (
          <Grid
            item
            xs={12}
            md={12}
            ls={12}
            sx={{
              width: "100%",
              height: "51px",
              padding: "16px 24px",
              gap: "10px",
            }}
            key={index}
          >
            <FormControlLabel
              key={index}
              control={
                <MuiCheckBox
                  key={index}
                  onChange={makeCheckList}
                  inputProps={{ name: label }}
                  color="default"
                  checked={checkList[label]}
                />
              }
              label={label}
            />
          </Grid>
        );
      })}
    </>
  );
}

export default Checkbox;
