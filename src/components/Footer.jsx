import { Box, Grid, Container, Typography, Divider, Link } from "@mui/material";
import { Fragment, useState } from "react";
import { iconFacebook, iconInsta } from "../assets";

export const footerData = [
  {
    headerText: "New to Saathh?",
    footerLinks: [
      "What is Saathh?",
      "What is CRM?",
      "Customer Success Stories",
      "Product Pricing",
      "Contact Us",
    ],
  },
  {
    headerText: "Popular Links",
    footerLinks: [
      "Popular Links",
      "Small Business CRM",
      "Saathh Automation",
      "Customer Service Solutions",
    ],
  },
];

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <Fragment>
      <div className="bg-black text-white">
        <Container className="pt-16">
          <Box className="mb-10 text-midnightblue">
            <Grid container>
              <Grid xs={12} sm={6} md={4} lg={2.8}>
                <Box>
                  <Typography className="text-2xl font-medium">
                    Sparke with every step
                  </Typography>
                </Box>
                <Box className="py-5">
                  <Typography>Sparke with every step</Typography>
                </Box>
                <Box></Box>

                <Box className="flex space-x-2 pt-2">
                  <div>
                    <a
                      className="text-midnightblue"
                      href="https://www.linkedin.com/company/saathh-official/"
                    >
                      {" "}
                      {/* <LinkedInIcon /> */}
                    </a>
                  </div>
                  <div>
                    <a
                      className="text-midnightblue"
                      href="https://www.instagram.com/saathh_official/"
                    >
                      {" "}
                      {/* <InstagramIcon /> */}
                    </a>
                  </div>
                  <div>
                    <a
                      className="text-midnightblue"
                      href="https://www.facebook.com/saathhofficial"
                    >
                      {/* <FacebookIcon /> */}
                    </a>
                  </div>
                  <div>
                    <a
                      className="text-midnightblue"
                      href="https://www.youtube.com/@Saathhofficial"
                    >
                      {/* <YouTubeIcon /> */}
                    </a>
                  </div>
                </Box>
              </Grid>

              {footerData.map((item, index) => (
                <Grid
                  key={index}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={2.8}
                  className="max-sm:pe-15 xl:ps-20"
                >
                  <Typography className="mb-6 font-bold text-midnightblue">
                    {item.headerText}
                  </Typography>
                  {item.footerLinks.map((item) => (
                    <Typography className="pb-3 text-xs" key={index}>
                      {item}
                    </Typography>
                  ))}
                </Grid>
              ))}

              <Grid
                xs={12}
                sm={6}
                md={4}
                lg={2.8}
                className="max-sm:pe-15 xl:ps-20"
              >
                <Typography className="mb-6 font-bold text-midnightblue">
                  Follow Us
                </Typography>

                <div className="flex">
                  <img
                    src={iconInsta}
                    alt="instagram icon"
                    className="h-[50px]"
                  />
                  <img
                    src={iconFacebook}
                    alt="icon facebook"
                    className="h-[50px] ms-5"
                  />
                </div>
              </Grid>
            </Grid>
          </Box>
          <Divider className="bg-midnightblue" />

          <div className="w-full flex justify-between">
            <Typography className="py-3 text-xs">
              © {currentYear},Cysgen technologies
            </Typography>
            <Typography className="py-3 text-xs">privacy policy</Typography>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default Footer;
