import { Fragment } from "react";
import HompageBanner from "../components/HompageBanner";
import ExculciveProducts from "../components/ExculciveProducts";
import Categorys from "../components/Category";
import ProductSection from "../components/ProductSection";
import SchemeSection from "../components/SchemeSection";
import { Typography, Container } from "@mui/material";

const Home = () => {
  return (
    <Fragment>
      <HompageBanner />
      <section className="pt-10 sm:py-16">
        <ExculciveProducts />
      </section>
      <section className="pt-10 sm:py-16">
        <Categorys />
      </section>
      <section className="pb-10 sm:pb-16">
        <ProductSection />
      </section>

      {/* schema section */}
      <section className="pb-16">
        <Container>
          <div className="flex flex-col items-center justify-center">
            <Typography
              variant="h2"
              className="text-2xl sm:text-3xl font-semibold"
            >
              Our Scheme And Plans
            </Typography>
            <Typography
              variant="body1"
              className="pt-3 font-medium pb-10 max-w-[400px] text-center"
            >
              Adorn Yourself With Timeless Elegance Adorn Yourself With Timeless
              Elegance
            </Typography>
          </div>
        </Container>
        <SchemeSection />
      </section>
    </Fragment>
  );
};

export default Home;
