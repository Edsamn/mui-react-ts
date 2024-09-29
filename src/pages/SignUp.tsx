import { Box, Button, Grid2, Paper, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import view from '../assets/anders-jilden-uwbajDCODj4-unsplash.jpg';
import { useAppDispatch } from '../store/hooks';
import { createAccount } from '../store/models/AccountsSlice';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailRegex.test(email);
    return isValid;
  }

  function isSequential(password: string): boolean {
    for (let i = 0; i < password.length - 1; i++) {
      if (parseInt(password[i + 1]) !== parseInt(password[i]) + 1) {
        return false;
      }
    }

    return true;
  }

  function validatePassword(password: string): boolean {
    if (password.length <= 4) {
      console.log('Senha muito curta');
      return false;
    }

    if (!isNaN(Number(password)) && isSequential(password)) {
      console.log('Senha é sequencial');
      return false;
    }
    console.log('Senha válida');
    return true;
  }

  function validateAccount() {
    if (!email || !password || !repeatPassword) {
      return console.log('Preencher os espaços vazios.');
    }

    if (password !== repeatPassword) {
      return console.log('As senhas devem ser iguais.');
    }

    if (validateEmail(email) && validatePassword(password)) {
      dispatch(createAccount({ email, password }));
      navigate('/');
    }
  }

  return (
    <Box sx={{ width: '100vw', display: 'flex', height: '100vh' }}>
      <Box
        sx={{
          width: '50%',
          backgroundImage: `url(${view})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      ></Box>

      <Paper sx={{ width: '50%' }}>
        <Grid2 container spacing={2} justifyContent={'center'} margin="20px">
          <Grid2 size={12}>
            <Typography variant="h2">Sign Up</Typography>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 8 }}>
            <TextField
              fullWidth
              type="text"
              label="Email"
              value={email}
              variant="outlined"
              onChange={ev => setEmail(ev.target.value)}
            ></TextField>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 8 }}>
            <TextField
              fullWidth
              type="password"
              label="Senha"
              value={password}
              variant="outlined"
              onChange={ev => setPassword(ev.target.value)}
            ></TextField>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 8 }}>
            <TextField
              fullWidth
              type="password"
              label="Repetir senha"
              value={repeatPassword}
              variant="outlined"
              onChange={ev => setRepeatPassword(ev.target.value)}
            ></TextField>
          </Grid2>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              height: '80px',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '20px',
            }}
          >
            <Grid2 size={{ xs: 12, md: 8 }}>
              <Button variant="contained" type="button" onClick={validateAccount}>
                Cadastrar
              </Button>
            </Grid2>

            <Grid2>
              <Typography>
                Já possui conta? Faça o <Link to={'/'}>Login</Link>
              </Typography>
            </Grid2>
          </Box>
        </Grid2>
      </Paper>
    </Box>
  );
}

export default SignUp;
