import { Box, Button, Paper, Typography } from '@mui/material';
import DefaultLayout from '../config/layout/DefaultLayout';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addProductToCart, clearCart } from '../store/models/CartSlice';
import { ProductType } from '../store/models/ProductsSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from '../components/Modal';

function Store() {
  const navigate = useNavigate();
  const productsRedux = useAppSelector(state => state.products);
  const cartRedux = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const modalContent = cartRedux.map(cart => cart.product);

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

  function toggleModal() {
    setOpen(!open);
  }

  function clearModal() {
    dispatch(clearCart());
  }

  return (
    <DefaultLayout>
      <Box>
        <Button onClick={toggleModal}> Ver Carrinho</Button>
      </Box>
      <Box sx={{ display: 'flex', gap: '20px', margin: '20px' }}>
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
      </Box>
      {open ? (
        <Modal actionCancel={toggleModal} actionConfirm={clearModal} title={'Meu carrinho'} content={modalContent} />
      ) : (
        ''
      )}
    </DefaultLayout>
  );
}

export default Store;
