import Head from "next/head";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { categories } from "../components/categoriesData";
import CategoriesCard from "@/components/common/CategoriesCard";
import { Typography } from "@mui/material";
import { createUseStyles } from "react-jss";

export default function Categories({ children }) {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Head>
        <title>Categories</title>
      </Head>
      <Typography className={styles.title} variant="h3">
        Browse Categories
      </Typography>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          {categories.map(ctg => (
            <Grid item xs={4}>
              <CategoriesCard
                data={{
                  Name: ctg.Name,
                  Background: ctg.Background,
                  IconName: ctg.IconName,
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    padding: "24px 32px",
    maxWidth: "1050px",
    margin: "auto",
  },
  title: {
    margin: "20px 0px",
    marginBottom: "36px",
    color: "#010079",
    fontWeight: "600",
    fontSize: 40,
  },
});
