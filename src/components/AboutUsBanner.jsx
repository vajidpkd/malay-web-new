import { Container, Typography } from "@mui/material";
import { aboutUsBanner } from "../assets";

const AboutUsBanner = () => {
  return (
    <div
      className="relative bg-light_gray_600 py-10 sm:py-16
     md:py-32 overflow-hidden"
    >
      <Container className="flex justify-between">
        <div className="w-[60%]">
          <Typography
            variant="h1"
            className=" max-sm:leading-none text-[23px]  sm:text-4xl md:text-6xl lg:text-8xl font-semibold"
          >
            Adorn Yourself With
          </Typography>
          <Typography className="max-sm:leading-none  text-[23px] sm:text-4xl md:text-6xl lg:text-8xl font-semibold pt-3">
            Timeless Elegance
          </Typography>
          <Typography
            variant="h2"
            className="text-small sm:text-xl md:text-[24px] lg:text-[28px] pt-3"
          >
            Adorn Yourself With Timeless Elegance
          </Typography>
        </div>
        <div className="absolute right-0 bottom-[-5px] w-[40%] flex justify-end ">
          <div>
            <img
              src={aboutUsBanner}
              alt="aboutus banner img"
              className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-contain"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default AboutUsBanner;
