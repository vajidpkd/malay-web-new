import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const ViewAllSchems = lazy(() => import("./pages/ViewAllSchems"));
const SchemeDeatils = lazy(() => import("./pages/SchemeDeatils"));
const AllProducts = lazy(() => import("./pages/AllProducts"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const ViewAllWishList = lazy(() => import("./pages/ViewAllWishList"));
const ContactInfo =lazy(()=> import("./pages/ConatctInfo"))
const KycDetails = lazy(() => import("./pages/KycDetails"));

import { ThemeProvider, createTheme } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";


export default function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "'Urbanist', sans-serif",
    },
  });

  // Hook to scroll to the top when the location changes
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={"loading"}>
        <Router>
          <Header />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/viewallschems" element={<ViewAllSchems />} />
            <Route path="/products" element={<AllProducts />} />
            {/* <Route path="/schemedeatils" element={<SchemeDeatils />} /> */}
            <Route path="/productdetails/:id" element={<ProductDetails />} />
            <Route path="/schemedeatils" element={<SchemeDeatils />} />
            <Route path="/wishList" element={<ViewAllWishList />} />
            <Route path="/ContactInfo" element={<ContactInfo/>}/>
          </Routes>
          <Footer />
        </Router>
      </Suspense>
    </ThemeProvider>
  );
}
