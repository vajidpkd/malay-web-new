import { Fragment, useEffect } from "react";
import { Typography } from "@mui/material";
import { iconWishlist, iconWishlistRed } from "../../assets";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishList } from "../../redux/wishlist";

const ProductCard = ({ data }) => {
  const naviage = useNavigate();
  const dispath = useDispatch();
  const { wishlist = [] } = useSelector((state) => state.wishlist);

  const isInWishlist = useSelector((state) =>
    state.wishlist.wishlist.some((item) => item.ItemId === data.ItemId)
  );

  return (
    <div className="w-full h-[280px] sm:h-[340px]">
      <div className="h-[180px] sm:h-[250px] shadow-6xl w-full rounded-md relative flex items-center justify-center">
        <div className="p-5 absolute right-0 top-0">
          {isInWishlist ? (
            <img
              onClick={() => dispath(toggleWishList(data))}
              src={iconWishlistRed}
              alt="wishlist icon"
              className="w-[20px] h-[12px]"
            />
          ) : (
            <img
              onClick={() => dispath(toggleWishList(data))}
              src={iconWishlist}
              alt="wishlist icon"
              className="w-[20px] h-[20px]"
            />
          )}
        </div>

        <img
          src={`https://${data?.Img1}`}
          onClick={() => naviage(`/productdetails/${data?.ItemId}`)}
          alt="product img"
          className="h-[90px] sm:h-[130px] w-[100%] object-contain z-40"
        />
      </div>
      <div
        className="pt-3"
        onClick={() => naviage(`/productdetails/${data?.ItemId}`)}
      >
        <Typography className="font-semibold">{data?.ItemName}</Typography>
        <Typography className="text-[12px] font-medium h-[30px]">
          {data?.Description}
        </Typography>
      </div>
    </div>
  );
};
export default ProductCard;
