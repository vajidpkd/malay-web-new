import { Container, Stack, Typography, Button } from "@mui/material";
import { iconRupees, iconThumbs, iconTickBlack } from "../assets";
import { useNavigate, useLocation } from "react-router-dom";
// import { useLocation } from 'react-router-dom';
import { getIndividualScheme } from "../service/api/api";
import { useState, useEffect} from "react";


const SchemeDeatils = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const schemeId = queryParams.get("Id");
  

  const [scheme, setScheme] = useState([]);

  useEffect(() => {
    const fetchSchemes = async () => {
      const response = await getIndividualScheme(schemeId);
      setScheme(response);
    };
    fetchSchemes();
    // schemeData();
  }, [schemeId]);
  console.log(scheme, "schemesss");

  return (
    <Container className="py-16">
      {scheme.map((item) => (
        <div key={item.SchemeName}>
          <div className="max-w-[600px]">
            <Typography className="text-3xl font-semibold">
              {item.SchemeName}
            </Typography>
            <Typography className="pt-5">{item.details}</Typography>
          </div>

          <div className="flex items-center py-5">
            <img src={iconRupees} className="h-[20px]" alt="rupees icon" />
            <Typography className="text-xl font-semibold">
              {item.Amount} <span className="text-xs font-normal">annualy</span>
            </Typography>
          </div>

          <div className="feachers">
            <div className="flex items-center">
              <img src={iconThumbs} className="h-[33px]" alt="thumbs icon" />
              <Typography className="text-xl font-semibold ps-5">
                Feachers
              </Typography>
            </div>
         
            <Stack spacing={2} className="pt-5 max-w-[500px]">
    {item?.detailslist?.map((dls, index) => (
      <div className="flex" key={index}>
        <img
          src={iconTickBlack}
          alt="icon tick"
          className="h-[12px] pe-2"
        />
        <Typography className="text-sm leading-[15px]">
          {dls}
        </Typography>
      </div>
    ))}
  </Stack>
          </div>

          <div className="flex gap-3 md:gap-16 ps-5 max-w-[500px] pt-10">
            <Button
              className="border-primary max-sm:text-xs hover:border-primary text-black font-medium normal-case px-5 w-[170px] md:w-[170px]"
              variant="outlined"
              onClick={() => navigate("/viewallschems")}
            >
              See Other Schemes
            </Button>
            <Button className="bg-primary max-sm:text-xs hover:bg-primary text-white font-medium normal-case px-5 w-[170px] md:w-[170px]" onClick={()=> navigate('/ContactInfo')}>
              Contact
            </Button>
          </div>
        </div>
      ))}
    </Container>
  );
};
export default SchemeDeatils;
