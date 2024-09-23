import { Box, Button, FormControlLabel, FormGroup, Grid2, Paper, Switch, TextField, Typography } from '@mui/material';
import DefaultLayout from '../config/layout/DefaultLayout';
import { useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { addProduct } from '../store/models/ProductsSlice';

function AddProduct() {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [active, setActive] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  function handleButton() {
    dispatch(addProduct({ name, price, description, active }));
    setName('');
    setPrice('');
    setDescription('');
  }

  return (
    <DefaultLayout>
      <Paper sx={{ padding: '20px', marginY: '20px' }}>
        <Grid2 container spacing={2} justifyContent={'center'}>
          <Grid2 size={12}>
            <Typography variant="h5">Adicionar Produto</Typography>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 8 }}>
            <TextField
              fullWidth
              type="text"
              label="nome"
              value={name}
              variant="outlined"
              onChange={ev => setName(ev.target.value)}
            ></TextField>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 8 }}>
            <TextField
              fullWidth
              type="text"
              label="Preço"
              value={price}
              onChange={ev => setPrice(ev.target.value)}
              variant="outlined"
            ></TextField>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 8 }}>
            <TextField
              fullWidth
              type="text"
              label="Descrição"
              value={description}
              onChange={ev => setDescription(ev.target.value)}
              variant="outlined"
            ></TextField>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 8 }}>
            <FormGroup>
              <FormControlLabel
                control={<Switch defaultChecked checked={active} onChange={ev => setActive(ev.target.checked)} />}
                label="Ativo"
              />
            </FormGroup>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 8 }}>
            <Box display={'flex'} justifyContent={'flex-end'}>
              <Button variant="contained" type="button" onClick={handleButton}>
                Cadastrar
              </Button>
            </Box>
          </Grid2>
        </Grid2>
      </Paper>
    </DefaultLayout>
  );
}

export default AddProduct;
