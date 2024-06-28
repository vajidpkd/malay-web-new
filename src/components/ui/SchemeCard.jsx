import { Button, Typography } from "@mui/material";
import {
  iconRupees,
  iconTickBlack,
  iconRupeesWhite,
  iconTickWhite,
} from "../../assets";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

// import { useEffect, useState } from "react";

const SchemeCard = ({ buttonWidth, data }) => {
  const navigate = useNavigate();
  return (
    <div className="shadow-6xl rounded-xl p-5 hover:bg-primary group hover:text-white cursor-pointer h-[450px] relative">
      <Typography className="font-bold">{data.SchemeName}</Typography>

      <div className="flex items-center py-2">
        <img
          src={iconRupees}
          alt="rupees icon"
          className="h-[20px] group-hover:hidden"
        />
        <img
          src={iconRupeesWhite}
          alt="rupees icon"
          className="h-[20px] hidden group-hover:block"
        />
        <Typography className="font-bold text-lg ps-2">
          {data.SchemeAmount}
          <span
            className="font-normal text-[12px] pe-3"
            style={{ marginLeft: "3px" }}
          >
            anualy
          </span>
        </Typography>
      </div>
      <Typography className="text-[12px] max-w-[250px]">
        {data.details}
      </Typography>
      {data.detailslist.map((item, index) => (
        <div className="pt-3" key={index}>
          <div className="flex items-center mb-3">
            <img
              src={iconTickBlack}
              alt="icon ticke"
              className="h-[12px] pe-2 group-hover:hidden"
            />
            <img
              src={iconTickWhite}
              alt="icon ticke"
              className="h-[12px] pe-2 hidden group-hover:block"
            />
            <Typography className="text-[13px]">{item}</Typography>
          </div>
        </div>
      ))}
      <div className="  absolute bottom-0 right-0 left-0">
        <div className="w-full py-10 flex justify-end items-center flex-col px-3">
          <Button
            className={`bg-primary group-hover:bg-white rounded-xl  group-hover:text-primary text-white ${
              buttonWidth ? buttonWidth : "w-[300px]"
            }`}
            onClick={() => navigate("/schemedeatils?Id=" + data.SchemeID)}
          >
            details
          </Button>
          <Typography className="text-xs pt-2">
            100% Lorem ipsum dolor sit amet consectetu.
          </Typography>
        </div>
      </div>
    </div>
  );
};
SchemeCard.propTypes = {
  data: PropTypes.array,
};

export default SchemeCard;
