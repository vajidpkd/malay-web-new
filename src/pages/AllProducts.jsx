import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm, setSelectedCategory } from "../redux/filter";
import { getAllProducts, getAllCategory } from "../service/api/api";
import ProductCard from "../components/ui/ProductCard";

const AllProducts = () => {
  const [categorys, setCategorys] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => state.filters.searchTerm);
  const selectedCategory = useSelector(
    (state) => state.filters.selectedCategory
  );

  // product feching and serch vise and categry viese filter
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getAllProducts();
      setProducts(response);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [searchTerm, selectedCategory, products]);

  const filterProducts = () => {
    let updatedProducts = products;
    if (searchTerm) {
      updatedProducts = updatedProducts.filter(
        (product) =>
          product.ItemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.Category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedCategory) {
      updatedProducts = updatedProducts.filter(
        (product) => product?.Category === selectedCategory
      );
    }
    setFilteredProducts(updatedProducts);
  };

  //category data feching
  useEffect(() => {
    const getCategorys = async () => {
      const response = await getAllCategory();
      setCategorys(response);
      console.log(response);
    };
    getCategorys();
  }, []);

  return (
    <Container className="py-10">
      <div className="py-5">
        <select
          onChange={(e) => dispatch(setSelectedCategory(e.target.value))}
          value={selectedCategory}
          className="bg"
        >
          <option value="">All</option>
          {categorys.map((item, index) => (
            <option value={item?.CatName} key={index}>
              {item?.CatName}
            </option>
          ))}
        </select>
      </div>

      <Grid
        container
        className="flex items-center cursor-pointer"
        spacing={{ xs: 2, md: 3 }}
      >
        {filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map((item, index) => (
            <Grid item xs={6} sm={4} md={3} key={index} className="w-full">
              <ProductCard data={item} />
            </Grid>
          ))
        ) : (
          <div className="flex items-center justify-center w-full h-[50vh]">
            No Products In this Category
          </div>
        )}
      </Grid>
    </Container>
  );
};

export default AllProducts;
