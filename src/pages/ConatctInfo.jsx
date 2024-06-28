import {
  Box,
  Stack,
  Typography,
  FormControl,
  TextField,
  Button,
  Container,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import axios from "axios";
// import { Fragment } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

// import { iconEmailRed, iconLocationRed, iconPhoneRed } from "../assets";

const ContactInfo = () => {
  const ContactSchema = Yup.object().shape({
    CustomerName: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    CustomerName: Yup.string().required("Required"),
    Address: Yup.string().required("Required"),
    Place: Yup.string().required("Required"),
    Mobile: Yup.string().required("Required"),
    Gender: Yup.string().required("Required"),
    DOB: Yup.string().required("Required"),
    landmark: Yup.string().required("Required"),
    Email: Yup.string().email("Invalid email").required("Required"),
  });

  //mail sending
  //   const handleMailto = async (values) => {

  //   };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      //   const additionalFields = {
      //     EmpCode: selectedStaff?.value,
      //   };

      const finalValues = { ...values };
      // console.log(finalValues, "final value");

      const jsonDataa = JSON.stringify(finalValues);
      const datas = `data=${jsonDataa}`;
      console.log(datas, "datassss");

      const response = await axios.post(
        "https://malaya.profitoneerp.com/index.php/Admin/add_lead",
        datas,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(response);
      Swal.fire({
        text: "Lead created successfully.",
        icon: "success",
        confirmButtonText: "Ok",
        confirmButtonColor: "#00977B",
        timer: 1500,
      }).then((result) => {
        if (result.isConfirmed || result.dismiss === Swal.DismissReason.timer) {
          resetForm();
        }
      });
    } catch (error) {
      console.error("Error:", error);

      Swal.fire({
        text: "An error occurred while creating the Lead..",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#FF0000",
      }).then(() => {});
    }
  };

  return (
    <div>
      <Container>
        <Stack className="py-10 md:py-10">
          <Typography className="text-primary text-3xl font-semibold">
            Contact Info
          </Typography>
        </Stack>

        <div className="pb-16">
          <div className="w-full md:w-[80%]">
            <Box>
              <Formik
                initialValues={{
                  CustomerName: "",
                  Address: "",
                  Place: "",
                  Email: "",
                  Mobile: "",
                  landmark: "",
                  Lattitude: "",
                  logittude: "",
                  Gender: "",
                  EmpCode: "",
                  EntryDate: "",
                  DOB: "",
                  Img: "",
                  BranchID: 1,
                  UID: "",
                  LeadID: 0,
                }}
                onSubmit={handleSubmit}
                validationSchema={ContactSchema}
              >
                {({ values, handleChange, touched, errors }) => (
                  <Form>
                    <FormControl className="w-[100%]">
                      <Stack spacing={2}>
                        <TextField
                          id="outlined-read-only-input"
                          label="Name"
                          name="CustomerName"
                          variant="outlined"
                          value={values.CustomerName}
                          onChange={handleChange}
                          error={touched && errors.CustomerName}
                          helperText={errors.CustomerName}
                        />

                        <TextField
                          id="outlined-basic"
                          label="Address"
                          name="Address"
                          type="text"
                          rows={3}
                          multiline
                          variant="outlined"
                          value={values.Address}
                          onChange={handleChange}
                          error={touched && errors.Address}
                          helperText={errors.Address}
                        />
                        <div className="flex gap-2">
                          <TextField
                            id="outlined-read-only-input-1"
                            label="Phone No"
                            name="Mobile"
                            type="number"
                            variant="outlined"
                            value={values.Mobile}
                            onChange={handleChange}
                            error={touched && errors.Mobile}
                            helperText={errors.Mobile}
                            style={{ flex: 1 }} // Adjust width as needed
                          />
                          <TextField
                            id="outlined-read-only-input-2"
                            label="Email"
                            name="Email"
                            type="email"
                            variant="outlined"
                            value={values.Email}
                            onChange={handleChange}
                            error={touched && errors.Email}
                            helperText={errors.Email}
                            style={{ flex: 1 }} // Adjust width as needed
                          />
                        </div>

                        <div className="flex gap-2">
                          <FormControl style={{ flex: 1 }}>
                            <InputLabel id="demo-simple-select-label">
                              Gender
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              label="Gender"
                              name="Gender"
                              value={values.Gender}
                              onChange={handleChange}
                              error={touched && errors.Gender}
                            >
                              <MenuItem value={"male"}>Male</MenuItem>
                              <MenuItem value={"female"}>Female</MenuItem>
                              <MenuItem value={"other"}>Other</MenuItem>
                            </Select>
                          </FormControl>

                          <TextField
                            id="outlined-read-only-input-2"
                            label="Date Of Birth"
                            name="DOB"
                            type="date"
                            variant="outlined"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            value={values.DOB}
                            onChange={handleChange}
                            error={touched && errors.DOB}
                            helperText={errors.DOB}
                            style={{ flex: 1 }} // Adjust width as needed
                          />
                        </div>

                        <TextField
                          id="outlined-basic"
                          label="Place / City"
                          name="Place"
                          type="text"
                          variant="outlined"
                          value={values.Place}
                          onChange={handleChange}
                          error={touched && errors.Place}
                          helperText={errors.Place}
                        />

                        <TextField
                          id="outlined-basic"
                          label="Land Mark"
                          name="landmark"
                          type="text"
                          variant="outlined"
                          value={values.landmark}
                          onChange={handleChange}
                          error={touched && errors.landmark}
                          helperText={errors.landmark}
                        />
                        <div className="flex justify-end gap-6">
                          <Button
                            className="border-primary max-sm:text-xs hover:border-primary text-black font-medium normal-case px-5 w-[170px] md:w-[170px]"
                            variant="outlined"
                            // onClick={() => navigate("/viewallschems")}
                          >
                            Cancel
                          </Button>
                          <Button
                            className="bg-primary max-sm:text-xs hover:bg-primary text-white font-medium normal-case px-5 w-[170px] md:w-[170px]"
                            type="submit"
                          >
                            Update
                          </Button>
                        </div>
                      </Stack>
                    </FormControl>
                  </Form>
                )}
              </Formik>
            </Box>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactInfo;
