import { Container, Grid, Stack, Typography } from "@mui/material";
import SchemeCard from "../components/ui/SchemeCard";
import { Fragment, useState, useEffect } from "react";
import { getAllSchems } from "../service/api/api";

const ViewAllSchems = () => {
  const [scheme, setScheme] = useState([]);

  useEffect(() => {
    const fetchSchemes = async () => {
      const response = await getAllSchems();
      setScheme(response);
    };
    fetchSchemes();
  }, []);

  return (
    <Fragment>
      <Container className="pb-16">
        <div className="max-w-[1000px]">
          <Stack className="py-16" spacing={3}>
            <Typography className="text-3xl text-primary font-semibold">
              The Right Plan For Your future
            </Typography>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
              eum vel distinctio quae, cum dignissimos odio exercitationem harum
              explicabo quisquam. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Non quibusdam, asperiores debitis earum porro
              illum ducimus eum tempora eligendi officiis.
            </Typography>
          </Stack>

          <Grid
            container
            columnSpacing={{ xs: 0, sm: 3, md: 5 }}
            rowSpacing={5}
            className="items-center  w-full"
          >
            {scheme.map((item, index) => (
              <Grid item sm={6} md={4} key={index} className="w-full">
                <SchemeCard buttonWidth={"w-[250px]"} data={item} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>

      <div className="bg-light_white py-7">
        <Container className="flex items-center justify-center text-center">
          <Typography className="font-[450] text-xl">
            Adron Yourself With Timeless Elegance Adron Yourself With Timeless
            Elegance <span className="font-bold">100%</span> Guaranty
          </Typography>
        </Container>
      </div>
    </Fragment>
  );
};
export default ViewAllSchems;
