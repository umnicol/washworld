import { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import ProductsList from '../components/ProductsList';
import { Products } from '../types';
import axios from 'axios';


const Products = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    axios.get('https://b46f027d-3a5f-4de6-9075-5e861759e531.mock.pstmn.io/products/:BV99123')
      .then((response) => setProducts(response.data.response.products))
      .catch((error) => console.log(error));
  }, []);
  

  return (
    <Container maxWidth="sm" sx={{ marginTop: '5rem' }}>
      <Typography sx={{ fontWeight: 'bold', fontSize:'30px' }}>
        Available Products
      </Typography>
      <ProductsList products={products} />
    </Container>
  );
};

export default Products;
