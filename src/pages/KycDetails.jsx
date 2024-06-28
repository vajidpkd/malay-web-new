import { Button, FormControl, Grid, Typography } from "@mui/material";
import { CustomTextField } from "../components/ui/CustomTextFilde";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { kycUpdate } from "../service/api/api";

const singnupSchema = Yup.object().shape({
  name: Yup.string().required("this filde is requred"),
  email: Yup.string().required("this filde is requred"),
  motherName: Yup.string().required("this filde is requred"),
});

const KycDetails = () => {
  // kyc update function
  const handleAddKyc = async (values) => {
    try {
      console.log(values);
      const data = await kycUpdate(values);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center  flex-col">
      <Button onClick={handleAddKyc}>dddd</Button>
      <Typography className="text-lg pb-5 font-bold">
        KYC UPDATION FORM
      </Typography>
      <Formik
        initialValues={{
          CustomerName: "",
          Address: "",
          MobileNo: "",
          Place: "",
          City: "",
          District: "",
          LandMark: "",
          Email: "",
          AAdharNo: "",
          AAdharImg: "",
          PanNo: "",
          PanImg: "",
          IDCardNo: "",
          IDCardImg: "",
          NomineeName: "",
          NomineeRelation: "",
          NomineeContact: "",
          Scheme: "",
          Employee: "",
          Amount: 100,
          Status: 1,
          userImg: "",
          BranchID: 1,
          Img: "",
          LeadID: 0,
        }}
        validationSchema={singnupSchema}
        onSubmit={handleAddKyc}
      >
        {({ values, handleChange, errors, touched, setFieldValue }) => (
          <Form>
            <FormControl fullWidth className="w-full">
              <Grid container spacing={2} className="w-full">
                <Grid item xs={12} className="w-full">
                  <CustomTextField
                    name="name"
                    label="Name"
                    size="small"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    error={touched.name && errors.name}
                    helperText={touched.name && errors.name}
                  />
                </Grid>

                <Grid item xs={12}>
                  <CustomTextField
                    name="email"
                    label="Email"
                    size="small"
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                    error={touched.email && errors.email}
                    helperText={touched.email && errors.email}
                  />
                </Grid>

                <Grid item xs={12}>
                  <CustomTextField
                    name="motherName"
                    size="small"
                    type="text"
                    value={values.motherName}
                    onChange={handleChange}
                    error={touched.motherName && errors.motherName}
                    helperText={touched.motherName && errors.motherName}
                  />
                </Grid>

                <Grid item xs={12}>
                  <input
                    type="file"
                    accept="image/*"
                    name="userImg"
                    onChange={(event) => {
                      setUserImg(event.currentTarget.files[0]);
                      const file = event.currentTarget.files[0];
                      const reader = new FileReader();
                      reader.onload = (e) => {
                        const img = new Image();
                        img.onload = () => {
                          const canvas = document.createElement("canvas");
                          const ctx = canvas.getContext("2d");
                          canvas.width = img.width;
                          canvas.height = img.height;
                          ctx.drawImage(img, 0, 0, img.width, img.height);
                          canvas.toBlob((blob) => {
                            const blobReader = new FileReader();
                            blobReader.onloadend = () => {
                              setFieldValue("userImg", blobReader.result);
                            };
                            blobReader.readAsDataURL(blob);
                          }, "image/png");
                        };
                        img.src = e.target.result;
                      };
                      reader.readAsDataURL(file);
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button type="submit" className="w-full bg-red-500">
                    Sumbit
                  </Button>
                </Grid>
              </Grid>
            </FormControl>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default KycDetails;
