import PropTypes from "prop-types";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
  Button,
  Container,
} from "@mui/material";
import { useState, useEffect } from "react";
import {
  iconArrowBig,
  iconMenu,
  iconSerch,
  iconWishlist,
  logoIcon,
} from "../assets";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const drawerWidth = 240;
const navItems = [
  { displayText: "Home", navLink: "/" },
  { displayText: "Products", navLink: "/products" },
  { displayText: "About Us", navLink: "/aboutus" },
  { displayText: "Contact Us", navLink: "/contactus" },
];

import { setSearchTerm } from "../redux/filter";
import { getTodaysGoldRate } from "../service/api/api";

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [nextNav, setNextNav] = useState(null);
  const [goldRate, setGoldRate] = useState(0);

  const wishlist = useSelector((state) => state.wishlist.wishlist);
  console.log(wishlist.length, "length");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!mobileOpen && nextNav) {
      navigate(nextNav);
      setNextNav(null);
    }
  }, [mobileOpen, nextNav, navigate]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleNavigation = (navLink) => {
    setNextNav(navLink);
    setMobileOpen(false);
  };

  // gold rate api caa
  useEffect(() => {
    const fetchGoldRate = async () => {
      try {
        const response = await getTodaysGoldRate();
        setGoldRate(response[0]);
      } catch (error) {
        throw error;
      }
    };
    fetchGoldRate();
  }, []);

  const drawer = (
    <Box className="p-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center max-md:text-xs">
          <img src={logoIcon} alt="logo" className="h-[30px] md:h-[55px]" />
          <Typography className="max-md:text-xs font-DMSerifText">
            Malaya Gold and Diamonds
          </Typography>
        </div>
        <img
          src={iconArrowBig}
          alt="arrow big"
          className="h-[10px]"
          onClick={handleDrawerToggle}
        />
      </div>
      <List disablePadding className="p-0 m-0 pt-5">
        {navItems.map((item) => (
          <ListItem
            key={item.displayText}
            disablePadding
            className="m-[0] pb-7"
          >
            <ListItemButton
              onClick={() => handleNavigation(item.navLink)}
              className="p-0"
            >
              <p className="!text-xs font-medium">{item.displayText}</p>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{ display: "flex" }}
      className="sticky top-0 left-0 right-0 z-50 w-full p-0"
    >
      <div className="w-full">
        <div className="bg-white py-2">
          <Container className="flex justify-between items-center">
            <div className="flex items-center">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                className="md:hidden"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <img src={iconMenu} alt="menu icon" className="h-[10px]" />
              </IconButton>
              <div className="flex items-center max-md:text-xs">
                <img
                  src={logoIcon}
                  alt="logo"
                  className="h-[30px] md:h-[55px]"
                />
                <Typography className="max-md:text-xs font-DMSerifText">
                  Malaya Gold and Diamonds
                </Typography>
              </div>
            </div>
            <div
              onClick={() => {
                navigate("/products");
              }}
              className="max-md:hidden border border-solid border-light_gray px-3 py-1.5 rounded-md flex items-center justify-between md:w-[40%] lg:w-[55%]"
            >
              <input
                type="text"
                className="bg-transparent border-none outline-none w-[90%]"
                placeholder="Search products.."
                onChange={(e) => dispatch(setSearchTerm(e.target.value))}
              />
              <img
                src={iconSerch}
                alt="search icon"
                className="h-[20px] cursor-pointer"
              />
            </div>
            <img
              src={iconWishlist}
              alt="wishlist icon"
              className="h-[26px] max-md:hidden cursor-pointer"
              onClick={() => navigate("/wishList")}
            />
            <div
              className="flex items-center cursor-pointer "
              onClick={() => navigate("/wishList")}
            >
              <div className="relative">
                <img
                  src={iconWishlist}
                  alt="wishlist icon"
                  className="h-[15px] md:hidden me-3 cursor-pointer"
                />
                <div className="absolute top-[-14px] right-[43px] transform translate-x-1/4 bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs cursor-pointer">
                  {wishlist.length}
                </div>
              </div>

              <Typography className="font-medium max-md:text-xs">
                Live Rate :
                {goldRate.Rate && (
                  <span className="text-primary "> {goldRate?.Rate}</span>
                )}
              </Typography>
            </div>
          </Container>

          <Container className="pt-2">
            <div
              onClick={() => navigate("/products")}
              className="md:hidden border border-solid border-light_gray px-3 py-0.5 rounded-md flex items-center justify-between md:w-[40%] lg:w-[55%]"
            >
              <input
                type="text"
                className="bg-transparent border-none outline-none w-[90%]"
                placeholder="Search products.."
                onChange={(e) => dispatch(setSearchTerm(e.target.value))}
              />
              <img
                src={iconSerch}
                alt="search icon"
                className="h-[20px] cursor-pointer"
              />
            </div>
          </Container>
        </div>
        <div className="bg-light_white max-md:hidden">
          <Container>
            <div className="flex">
              <Box className="flex items-center justify-between w-full max-md:hidden">
                <div>
                  {navItems.map((item, index) => (
                    <Button
                      onClick={() => navigate(item.navLink)}
                      key={index}
                      sx={{ color: "#000000" }}
                      className="normal-case font-semibold pe-5 py-3 text-base"
                    >
                      {item.displayText}
                    </Button>
                  ))}
                </div>
                <Typography className="font-medium text-black">
                  <span className="me-3 font-normal text-xl">|</span>
                  Exclusive Products
                </Typography>
              </Box>
            </div>
          </Container>
        </div>
      </div>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          className="md:hidden"
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
