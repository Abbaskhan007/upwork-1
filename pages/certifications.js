import Filter from "@/components/Cerification/Filter";
import { Grid } from "@mui/material";
import Head from "next/head";
import { certifications } from "../components/certificationsData";
import { useState, useRef, useEffect, useLayoutEffect } from "react";
import CertificationsCard from "../components/common/CertificationsCard";

export default function Certifications({ children }) {
  const initailCheckBoxes = {
    All: true,
    Security: false,
    Networking: false,
    "AI/ML": false,
    Developer: false,
    Cloud: false,
    "Data Engineer": false,
    "Proj. Management": false,
  };

  const checkList = [
    "All",
    "Security",
    "Networking",
    "AI/ML",
    "Developer",
    "Cloud",
    "Data Engineer",
    "Proj. Management",
  ];
  const [filteredCertification, setFilteredCertification] =
    useState(certifications);
  const [active, setActive] = useState([...checkList]);
  const [labels, setLabels] = useState({ ...initailCheckBoxes });

  const makeCheckList = e => {
    if (e.target.name === "All") {
      let check = active.find(item => item === e.target.name);
      if (check) {
        setActive([]);
        setLabels({ ...initailCheckBoxes, All: false });
        return;
      } else {
        setActive([...checkList]);
        setLabels({ ...initailCheckBoxes });
        return;
      }
    }
    if (active.includes("All")) {
      setActive([e.target.name]);
      setLabels({ ...labels, All: false, [e.target.name]: true });
      return;
    }
    console.log("Name of checkList:", e.target.name);
    let check = active.find(item => item === e.target.name);
    if (check) {
      let newActives = active.filter(item => item !== e.target.name);
      labels[e.target.name] = false;
      setActive(newActives);
    } else {
      setActive([...active, e.target.name]);
      labels[e.target.name] = true;
    }
  };

  console.log("Active", active);

  useEffect(() => {
    const newCertifications = certifications.filter(ctg =>
      active.includes(ctg.Category)
    );
    setFilteredCertification(newCertifications);
  }, [active]);

  return (
    <>
      <Head>
        <title>Certifications</title>
      </Head>
      <div>
        <div
          style={{
            width: "100%",
            margin: "0 auto",
          }}
        >
          <Grid container spacing={1}>
            <Grid
              item
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              xs={12}
              md={12}
              lg={12}
            >
              <Grid
                item
                xs={12}
                md={2}
                lg={2}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                  width: "207px",
                  height: "482px",
                }}
              >
                <Filter makeCheckList={makeCheckList} checkList={labels} />
              </Grid>

              <Grid
                item
                xs={12}
                md={8}
                lg={8}
                sx={{
                  marginLeft: "50px",
                }}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                {filteredCertification?.map((item, index) => {
                  return (
                    <Grid
                      item
                      sx={{
                        marginBottom: "25px",
                        marginTop: "25px",
                      }}
                      container
                      direction="row"
                      justifyContent="space-around"
                      alignItems="center"
                      xs={12}
                      md={6}
                      lg={6}
                      key={index}
                    >
                      <CertificationsCard data={item} key={index} />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
