import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running Shoes",
    price: "$200",
    image:
      "https://www.shutterstock.com/image-photo/bangkok-thailand-march-26-2018-nike-1079458139",
  },
  {
    id: 2,
    name: "Macbook Air",
    description: "Apple Macbook",
    price: "$1000",
    image:
      "https://www.shutterstock.com/image-photo/kiev-ukraine-may-15-2016brand-new-422976961",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
