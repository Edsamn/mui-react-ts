import { Box, Button, Paper, Typography } from '@mui/material';
import DefaultLayout from '../config/layout/DefaultLayout';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addProductToCart } from '../store/models/CartSlice';
import { ProductType } from '../store/models/ProductsSlice';

import { useNavigate } from 'react-router-dom';

function Store() {
  const navigate = useNavigate();
  const productsRedux = useAppSelector(state => state.products);
  const dispatch = useAppDispatch();

  const userLogged = localStorage.getItem('userLogged');
  if (!userLogged) {
    navigate('/');
  }

  function addProduct(product: ProductType) {
    const productFind = productsRedux.find(product => product === product);
    if (productFind) {
      dispatch(addProductToCart(product));
    }
  }

  return (
    <DefaultLayout>
      {productsRedux.map(product => (
        <Paper
          sx={{ display: 'flex', width: '150px', height: '150px', justifyContent: 'center', alignItems: 'center' }}
        >
          <Box key={product.id}>
            <Typography variant="h5">{product.name}</Typography>
            <Typography>{product.description}</Typography>
            <Typography variant="h5">{product.price}</Typography>
            <Button onClick={() => addProduct(product)}>Adicionar</Button>
          </Box>
        </Paper>
      ))}
    </DefaultLayout>
  );
}

export default Store;
