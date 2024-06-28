import {
  Box,
  Stack,
  Typography,
  FormControl,
  TextField,
  Button,
  Container,
} from "@mui/material";

import { Fragment } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { iconEmailRed, iconLocationRed, iconPhoneRed } from "../assets";

const ContactUs = () => {
  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    name: Yup.string().required("Required"),
    subject: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  //mail sending
  const handleMailto = (values) => {
    const { name, phone, email, message } = values;
    const subject = "Contact Form Sumbishion";
    const mailtoLink = `mailto:saathhofficial@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\n Phone: ${phone}  \nEmail: ${email}\n Messeage:\n ${message}`
    )}`;

    window.open(mailtoLink);
  };

  return (
    <div>
      <Container>
        <Stack className="py-10 md:py-16">
          <Typography className="text-primary text-3xl font-semibold text-center">
            Contact Us
          </Typography>
          <Typography className="text-center font-medium pt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae hic
            quis, eos cupiditate pariatur unde cum nisi perspiciatis aspernatur
            architecto. Reiciendis dolore perspiciatis officiis, provident
            quibusdam, nemo ipsam totam error exercitationem, dignissimos saepe
            magni. Delectus sequi beatae alias deserunt officia aliquid, commodi
            doloremque, laborum rem architecto atque laboriosam dolorum
            explicabo!
          </Typography>
        </Stack>

        <div className="flex  max-md:flex-col-reverse justify-between items-start pb-16">
          <div className="w-full md:w-[40%]">
            <Box>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  phone: "",
                  message: "",
                }}
                onSubmit={handleMailto}
                validationSchema={ContactSchema}
              >
                {({ values, handleChange, touched, errors }) => (
                  <Form>
                    <FormControl className="w-[100%]">
                      <Stack spacing={2}>
                        <TextField
                          id="outlined-read-only-input"
                          label="Name"
                          name="name"
                          variant="outlined"
                          value={values.name}
                          onChange={handleChange}
                          error={touched && errors.name}
                          helperText={errors.name}
                        />

                        <TextField
                          id="outlined-basic"
                          label="Email"
                          name="email"
                          type="email"
                          variant="outlined"
                          value={values.email}
                          onChange={handleChange}
                          error={touched && errors.email}
                          helperText={errors.email}
                        />

                        <TextField
                          id="outlined-read-only-input"
                          label="Phone"
                          name="phone"
                          type="number"
                          variant="outlined"
                          value={values.phone}
                          onChange={handleChange}
                          error={touched && errors.phone}
                          helperText={errors.phone}
                        />

                        <TextField
                          id="outlined-multiline-static"
                          label="Enter your message"
                          multiline
                          name="message"
                          rows={3}
                          value={values.message}
                          onChange={handleChange}
                          error={touched && errors.message}
                          helperText={errors.message}
                        />
                        <div className="flex justify-end">
                          <Button
                            variant="outlined"
                            type="submit"
                            className=" normal-case  w-[200px]  border-primary text-black hover:border-primary"
                            hyj
                          >
                            Submit
                          </Button>
                        </div>
                      </Stack>
                    </FormControl>
                  </Form>
                )}
              </Formik>
            </Box>
          </div>
          <Stack className="w-full md:w-[50%] max-md:pb-10" spacing={4}>
            <div className="flex max-w-[400px]">
              <img
                src={iconLocationRed}
                alt="location iocn"
                className="h-[20px] me-2"
              />
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, assumenda. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Culpa, aperiam.
              </Typography>
            </div>
            <div className="flex max-w-[400px]">
              <img
                src={iconPhoneRed}
                alt="location iocn"
                className="h-[20px] me-2"
              />
              <Stack spacing={0.5}>
                <Typography>+91 9400347416</Typography>
                <Typography>+91 9400347418</Typography>
              </Stack>
            </div>
            <div className="flex max-w-[400px] items-center">
              <img
                src={iconEmailRed}
                alt="location iocn"
                className="h-[13px] me-2"
              />
              <Typography>vajidpkd21@gmail.com</Typography>
            </div>
          </Stack>
        </div>
      </Container>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.077682155415!2d76.06663697503653!3d10.651073161493379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba79544643e3f47%3A0xdea1350c65d53747!2sMalaya%20Gold%20and%20Diamonds!5e0!3m2!1sen!2sin!4v1718866576119!5m2!1sen!2sin"
        className="w-full"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactUs;
