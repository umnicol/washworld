import { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import ProductsList from '../components/ProductsList';
import { Products } from '../types';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    // fetch locations data from the mock endpoint
    axios.get('https://b46f027d-3a5f-4de6-9075-5e861759e531.mock.pstmn.io/products/:lpn')
      .then((response) => setProducts(response.data.response.products))
      .catch((error) => console.log(error));
  }, []);
  

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Available Products for LPN
      </Typography>
      <ProductsList products={products} />
    </Container>
  );
};

export default Products;
