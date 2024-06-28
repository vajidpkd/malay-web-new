import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductDetailsById } from "../service/api/api";
import { Container, Button, Stack, Typography } from "@mui/material";

import SwiperCore from "swiper";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination]);

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState();
  console.log(productDetails);

  useEffect(() => {
    const productDetails = async () => {
      const response = await getProductDetailsById(id);
      setProductDetails(response[0]);
    };
    productDetails();
  }, [id]);

  const navigate = useNavigate();
  console.log(productDetails, "details");

  return (
    <Container className="flex justify-between py-16">
      <div className="md:hidden">
        <Swiper
          slidesPerView={1}
          speed={700}
          loop={true}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img
              src={`https://${productDetails?.Img1}`}
              alt=""
              className="w-full h-[200px] object-contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`https://${productDetails?.Img1}`}
              alt=""
              className="w-full h-[200px] object-contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`https://${productDetails?.Img1}`}
              alt=""
              className="w-full h-[200px] object-contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`https://${productDetails?.Img1}`}
              alt=""
              className="w-full h-[200px] object-contain"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex justify-between md:w-[45%] h-[350px]  p-3 max-md:hidden">
        <Stack spacing={2} className=" overflow-scroll hide-scroll pe-3">
          <div className="border border-solid border-light_gray p-[1px] flex items-center">
            <img
              src={`https://${productDetails?.Img1}`}
              alt=""
              className="h-[100px] w-full object-cover"
            />
          </div>
          <div className="border border-solid border-light_gray p-[1px] flex items-center">
            <img
              src={`https://${productDetails?.Img2}`}
              alt=""
              className="h-[100px] w-full object-cover"
            />
          </div>
          <div className="border border-solid border-light_gray p-[1px] flex items-center">
            <img
              src={`https://${productDetails?.Img3}`}
              alt=""
              className="h-[100px] w-full object-cover"
            />
          </div>

          <div className="border border-solid border-light_gray p-[1px] flex items-center">
            <img
              src={`https://${productDetails?.Img4}`}
              alt=""
              className="h-[100px] w-full object-cover"
            />
          </div>
        </Stack>

        <div className="w-[380px] border border-solid border-light_gray flex items-center justify-center bg-white">
          <img
            src={`https://${productDetails?.Img1}`}
            alt=""
            className="w-full h-[200px] object-contain"
          />
        </div>
      </div>

      <div className="w-[45%] max-md:hidden">
        <div>
          <Typography className="font-semibold text-3xl pb-5">
            {productDetails?.ItemName}
          </Typography>
          <div
            className="w-full h-[2px]"
            style={{
              background: "#E8E8E8",
            }}
          ></div>
        </div>

        <Typography className="py-5">{productDetails?.Description}</Typography>

        <Typography className="text-xl font-semibold">
          {productDetails?.Weight} g
        </Typography>

        <div className="flex gap-3 md:gap-16 pt-10 max-md:flex-col max-md:hidden">
          <Button
            className="border-primary hover:border-primary text-black font-medium  normal-case px-5 w-[170px]"
            variant="outlined"
            onClick={() => navigate("/products")}
          >
            View All Products
          </Button>
          <Button className="bg-primary hover:bg-primary text-white font-medium  normal-case px-5 w-[170px]">
            Contact
          </Button>
        </div>
      </div>
    </Container>
  );
};
export default ProductDetails;
