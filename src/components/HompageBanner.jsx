import SwiperCore from "swiper";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
SwiperCore.use([Autoplay, Navigation, Pagination]);

import { Fragment, useEffect, useState } from "react";
import { getAllBanners } from "../service/api/api";

import { IconArrowLeft, IconArrowRight } from "../assets";
import {
  Typography,
  Container,
  ThemeProvider,
  createTheme,
} from "@mui/material";

const HompageBanner = () => {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  // banner data
  const [bannerData, setBannerData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchAllBanners = async () => {
      try {
        const banners = await getAllBanners();
        setBannerData(banners);
        console.log(banners, "banner");
      } catch (error) {
        setError(error);
      }
    };
    fetchAllBanners();
  }, []);

  const theme = createTheme({
    typography: {
      fontFamily: "Urbanist",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <div className="relative">
          <div className="absolute w-full flex justify-between top-1/2 transform -translate-y-1/2 px-10 z-50 max-md:hidden">
            <div
              ref={(node) => setPrevEl(node)}
              className="cursor-pointer bg-accent/30 shadow-2cl flex items-center rounded-full justify-center w-[50px] h-[50px]"
            >
              <img src={IconArrowLeft} alt="arrow" className="h-[20px]" />
            </div>
            <div
              ref={(node) => setNextEl(node)}
              className="cursor-pointer bg-accent/30 shadow-2cl flex items-center rounded-full justify-center w-[50px] h-[50px]"
            >
              <img src={IconArrowRight} alt="arrow" className="h-[20px]" />
            </div>
          </div>

          <Swiper
            slidesPerView={1}
            navigation={{ prevEl, nextEl }}
            speed={900}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2000,
            }}
          >
            {bannerData?.map((item) => (
              <SwiperSlide key={item.id} className="cursor-pointer relative">
                <div className="max-h-[600px] mb-[-4px] relative">
                  <img
                    src={`https://${item.Img}`}
                    alt="banner img"
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="bg-light_white py-3 sm:py-7">
          <Container className="flex items-center justify-center text-center">
            <Typography className="font-[450] text-[7px] sm:text-xl">
              Adron Yourself With Timeless Elegance Adron Yourself With Timeless
              Elegance <span className="font-bold">100%</span> Guaranty
            </Typography>
          </Container>
        </div>
      </Fragment>
    </ThemeProvider>
  );
};

export default HompageBanner;
