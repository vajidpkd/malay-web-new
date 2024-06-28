import { Fragment } from "react";
import AboutUsBanner from "../components/AboutUsBanner";
import { Typography, Container, Stack, Button } from "@mui/material";
import SchemeSection from "../components/SchemeSection";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <section>
        <AboutUsBanner />
      </section>

      <Container className="py-16">
        <Typography className="text-primary text-3xl font-semibold">
          About Us
        </Typography>

        <Stack className="pt-10 flex" spacing={5}>
          <Typography className="text-xl font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            autem, ducimus quae doloribus recusandae eaque quibusdam libero non
            voluptatum similique est excepturi debitis quia odio possimus velit!
            Atque cumque nihil quidem dolores, voluptatum similique est
            excepturi debitis quia odio possimus velit! Atque cumque nihil
            quidem dolores,
          </Typography>
          <Typography className="text-xl font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            autem, ducimus quae doloribus recusandae eaque quibusdam libero non
            voluptatum similique est excepturi debitis quia odio possimus velit!
            Atque cumque nihil quidem dolores, voluptatum similique est
            excepturi debitis quia odio possimus velit! Atque cumque nihil
            quidem dolores,
          </Typography>
          <Typography className="text-xl font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            autem, ducimus quae doloribus recusandae eaque quibusdam libero non
            voluptatum similique
          </Typography>
        </Stack>
      </Container>

      <section className="bg-light_red py-16">
        <Container className="flex max-md:flex-col justify-between">
          <div className="md:w-[42%]">
            <Typography className="text-primary text-3xl font-semibold pb-5">
              Our mission
            </Typography>
            <Typography className="text-xl font-medium">
              Lorem ipsum{" "}
              <span className="font-bold">Dolor sit amet consectetur </span>
              adipisicing elit. Deleniti earum optio aut eveniet distinctio
              corporis doloremque repellendus vero, fugiat et unde mollitia a
              ipsum, rem animi incidunt consequuntur at voluptatum? Lorem ipsum
              dolor sit amet consectetur, adipisicing elit
            </Typography>
          </div>
          <div className="md:w-[42%] max-md:pt-14">
            <Typography className="text-primary text-3xl font-semibold pb-5">
              Our vision
            </Typography>
            <Typography className="text-xl font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              doloremque mollitia cumque vitae! Itaque, sit fuga? Ad fugit,
              earum officiis consectetur ducimus molestiae corrupti dolor ut
              quod, iste, tenetur laudantium. Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </Typography>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="flex justify-between  md:py-16">
          <Typography className="text-primary text-3xl max-md:pb-10 font-semibold">
            Visit Our Scheme
          </Typography>
          <Button
            className="border-primary hover:border-primary text-black font-semibold text-lg normal-case px-5 max-sm:hidden"
            variant="outlined"
            onClick={() => navigate("/viewallschems")}
          >
            View all palns
          </Button>
        </Container>
        <SchemeSection />
      </section>

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
export default AboutUs;
