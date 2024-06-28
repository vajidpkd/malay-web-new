import { TextField, styled } from "@mui/material";

// custom form for creation
export const CustomTextField = styled((props) => (
    <TextField {...props} fullWidth />
))({
    "& label.Mui-focused": {
        color: "#000",
    },
    "& .MuiOutlinedInput-root": {
        "&:hover fieldset": {
            borderColor: "#000",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#000",
        },
    },
});