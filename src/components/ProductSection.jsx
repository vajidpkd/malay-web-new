import { useEffect, useState } from "react";
import { Container, Typography, Grid } from "@mui/material";

import { getAllProducts } from "../service/api/api";
import ProductCard from "../components/ui/ProductCard";

const ProductSection = () => {
  const [producst, setProducsts] = useState([]);

  useEffect(() => {
    const fechProducst = async () => {
      const response = await getAllProducts();
      setProducsts(response);
    };
    fechProducst();
  }, []);

  return (
    <Container>
      <div className="flex flex-col items-center justify-center">
        <Typography variant="h2" className="text-2xl sm:text-3xl font-semibold">
          Our Producst
        </Typography>
        <Typography variant="body1" className="pt-3 font-medium pb-10">
          Adorn Yourself With Timeless Elegance
        </Typography>
      </div>

      <Grid
        container
        className="flex items-center  cursor-pointer"
        spacing={{ xs: 2, md: 3 }}
      >
        {producst?.map((item, index) => (
          <Grid item xs={6} sm={4} md={3} key={index} className="w-full">
            <ProductCard data={item} />
          </Grid>
        ))}
      </Grid>

      <Typography className="underline text-center pt-5 cursor-pointer">
        Discover More...
      </Typography>
    </Container>
  );
};
export default ProductSection;
