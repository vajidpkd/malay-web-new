import SwiperCore from "swiper";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
SwiperCore.use([Autoplay, Navigation, Pagination]);

import { Fragment, useEffect, useState } from "react";

import { IconArrowLeft, IconArrowRight } from "../assets";
import { Container, Typography } from "@mui/material";
import SchemeCard from "./ui/SchemeCard";
import { getAllSchems } from "../service/api/api";

const SchemeSection = () => {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  // banner data
  const [scheme, setScheme] = useState([]);

  useEffect(() => {
    const fetchSchemes = async () => {
      const response = await getAllSchems();
      setScheme(response);
    };
    fetchSchemes();
  }, []);

  return (
    <div className="relative">
      <div className="absolute w-full flex justify-between top-1/2 transform -translate-y-1/2 px-10 z-50 max-sm:hidden">
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
      <Container className="relative">
        <Swiper
          slidesPerView={1}
          navigation={{ prevEl, nextEl }}
          centeredSlides={true}
          speed={900}
          loop={true}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          style={{
            "--swiper-pagination-color": "#FFFFFF",
            "--swiper-pagination-bullet-inactive-color": "#000",
            "--swiper-pagination-bullet-inactive-opacity": "0.2",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
            // eslint-disable-next-line no-dupe-keys
            "--swiper-pagination-bullet-horizontal-gap": "3px",
          }}
        >
          {scheme?.map((item) => (
            <SwiperSlide key={item.id} className="cursor-pointer relative">
              <div className="p-2">
                <SchemeCard data={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default SchemeSection;
