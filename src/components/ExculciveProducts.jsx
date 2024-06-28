import { Typography, Container, Grid } from "@mui/material";
// import { exclusive } from "../assets";
import { getAllExculsiveProducts } from "../service/api/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ExculciveProducts = () => {
  const [exclusive, setExclusive] = useState([]);
  const navigate = useNavigate()
 
  useEffect(() => {
    const fetchExclusiveProduct = async () => {
      const res = await getAllExculsiveProducts();
      setExclusive(res);
    };
    return () => {
      fetchExclusiveProduct();
    };
  }, []);
  return (
    <Container className="flex items-center justify-center flex-col">
      <Typography variant="h2" className="text-2xl sm:text-3xl font-semibold">
        Exclusive Arrivals
      </Typography>
      <Typography
        variant="body1"
        className="pt-1 sm:pt-3 font-medium pb-5
       sm:pb-10"
      >
        Adorn Yourself With Timeless Elegance
      </Typography>

      <Grid
        container
        className="flex items-center justify-center cursor-pointer"
        spacing={{ xs: 1, md: 3 }}
      >
        {exclusive.map((item, index) => (
          <Grid item xs={3} key={index}>
                <div className="h-[80px] sm:h-[150px] md:h-[250px] image-container overflow-hidden relative hover:rounded-[3px] group" onClick={() => navigate('/ProductDetails/'+item?.ItemId)}>
              <img
                src={`https://${item?.ImgExclusive}`}
                alt="exclusive products"
                className="h-full w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute bottom-0 w-full h-[20px] sm:h-[50px] bg-black/10 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-full text-white flex items-center ps-5">
                  <Typography className="text-[7px] min-[600px]:text-xs sm:text-base">
                    {item.ItemName}
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ExculciveProducts;
