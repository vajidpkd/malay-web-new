import { Typography } from "@mui/material";
import SwiperCore from "swiper";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState, useRef } from "react";
import { getAllCategory } from "../service/api/api";
import { IconArrowRightBig } from "../assets";

import { setSelectedCategory } from "../redux/filter";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// Install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination]);

const Category = () => {
  const [categorys, setCategorys] = useState([]);
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getCategorys = async () => {
      const response = await getAllCategory();
      setCategorys(response);
      console.log(response);
    };
    getCategorys();
  }, []);

  return (
    <div>
      <Swiper
        slidesPerView={2}
        navigation={{ prevEl, nextEl }}
        speed={700}
        loop={true}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 4,
            pagination: false,
          },
        }}
      >
        {categorys.map((item) => (
          <SwiperSlide
            key={item.id}
            className="cursor-pointer p-0 w-full"
            onClick={() => {
              navigate("/products");
              dispatch(setSelectedCategory(item?.CatName));
            }}
          >
            <div className="relative h-[200px] sm:h-[200px] md:h-[300px] lg:h-[450px] max-sm:px-2 sm:pe-5">
              <div className="w-full h-full absolute bg-black/5 z-50 flex items-end justify-end px-10 py-5">
                <Typography className="text-white text-sm md:text-xl lg:text-lg font-medium">
                  {item?.CatName}
                </Typography>
              </div>
              <img
                src={`https://${item?.Img}`}
                alt="category img"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-pagination custom-pagination"></div>

      <div className="w-full flex justify-end py-5 px-10">
        <div
          ref={(node) => setPrevEl(node)}
          className="custom-prev-button"
        ></div>
        <div
          ref={(node) => setNextEl(node)}
          className="cursor-pointer max-sm:hidden custom-next-button"
        >
          <Typography className="font-semibold text-black/90 flex items-center">
            Swipe To See More
            <img
              src={IconArrowRightBig}
              alt="icon arrow"
              className="h-[20px] ms-3"
            />
          </Typography>
        </div>
      </div>

      <style jsx>{`
        .custom-pagination {
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #000;
          opacity: 0.2;
          border-radius: 50%;
          margin: 3px;
          cursor: pointer;
        }
        .swiper-pagination-bullet-active {
          background-color: #fff;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Category;
