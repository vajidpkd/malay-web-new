import { Button, Typography } from "@mui/material";
import { iconDelete } from "../../assets";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../../redux/wishlist";
import PropTypes from "prop-types";
import { Fragment } from "react";

const WishListCard = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div className="flex justify-between items-center  pb-3">
        <div className="flex items-center w-[60%]">
          <div className="p-1 md:p-3 bg-white border border-solid border-light_gray w-[130px]">
            <img
              src={`https://${item?.Img1}`}
              alt="product img"
              className="h-[40px] sm:h-[50px] md:h-[100px] w-full object-cover"
            />
          </div>
          <div className="ps-10">
            <Typography className="md:text-2xl font-semibold">
              {item?.ItemName}
            </Typography>
            <Typography className="py-2 max-md:text-small">
              {item?.Description}
            </Typography>
            <Typography className="max-md:text-[10px] font-semibold">
              Gold Weight {item?.Weight} g
            </Typography>
          </div>
        </div>
        <div className="w-[30%] flex justify-end items-center">
          <Button
            className="bg-primary text-white normal-case text-sm px-5 md:px-10 hover:bg-primary"
            onClick={() => navigate("/contactus")}
          >
            Contact
          </Button>
          <img
            src={iconDelete}
            alt="delete icon"
            className="h-[25px] ps-3 md:ps-10 cursor-pointer"
            onClick={() => dispatch(removeFromWishlist(item?.ItemId))}
          />
        </div>
      </div>
    </Fragment>
  );
};

WishListCard.propTypes = {
  item: PropTypes.object,
};

export default WishListCard;
