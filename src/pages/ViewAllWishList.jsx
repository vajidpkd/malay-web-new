import { Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import WishListCard from "../components/ui/WishListCard";
import { Fragment } from "react";

const ViewAllWishList = () => {
  const { wishlist = [] } = useSelector((state) => state.wishlist);

  return (
    <Container className="py-16">
      <Typography className="font-semibold text-3xl pb-10">
        My Wishlist
      </Typography>
      {wishlist?.map((item, index) => (
        <Fragment key={index}>
          <WishListCard item={item} key={index} />
          <div className="py-7">
            <div
              className="h-[1px] w-full"
              style={{ background: "#d9d9d9" }}
            ></div>
          </div>
        </Fragment>
      ))}
    </Container>
  );
};

export default ViewAllWishList;
