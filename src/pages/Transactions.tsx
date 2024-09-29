import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid2,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import DefaultLayout from '../config/layout/DefaultLayout';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addBalance, removeBalance } from '../store/models/TransactionsSlice';

function Transactions() {
  const [balance, setBalance] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const [type, setType] = useState<boolean>(true);

  const totalBalance = useAppSelector(state => state.transactions.totalBalance);
  const dispatch = useAppDispatch();

  function handleButton() {
    if (balance && description) {
      if (type === true) {
        dispatch(addBalance({ balance, description, type }));
      } else {
        dispatch(removeBalance({ balance, description, type }));
      }
    }
  }

  return (
    <DefaultLayout>
      <Paper sx={{ padding: '20px', marginY: '20px' }}>
        <Grid2 container spacing={2} justifyContent={'center'}>
          <Grid2 size={12}>
            <Typography variant="h2">Transações</Typography>
          </Grid2>

          <Grid2 size={12}>
            <Typography variant="h6">Saldo Total: R$ {totalBalance}</Typography>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 8 }}>
            <FormControl>
              <FormLabel id="transactions-radio-buttons-group">Tipo da transação</FormLabel>
              <RadioGroup
                aria-labelledby="transactions-radio-buttons-group"
                defaultValue="depósito"
                name="radio-buttons-group"
              >
                <FormControlLabel control={<Radio />} label="Depósito" onClick={() => setType(true)} />
                <FormControlLabel control={<Radio />} label="Saque" onClick={() => setType(false)} />
              </RadioGroup>
            </FormControl>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 8 }}>
            <TextField
              variant="outlined"
              type="number"
              value={balance}
              label={'Valor'}
              placeholder="0"
              onChange={ev => setBalance(Number(ev.target.value))}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 8 }}>
            <TextField
              variant="outlined"
              type="text"
              value={description}
              label={'Descrição'}
              onChange={ev => setDescription(ev.target.value)}
            />
          </Grid2>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 8 }}>
          <Box display={'flex'} justifyContent={'flex-end'}>
            <Button variant="contained" type="button" onClick={handleButton}>
              Finalizar
            </Button>
          </Box>
        </Grid2>
      </Paper>
    </DefaultLayout>
  );
}

export default Transactions;
