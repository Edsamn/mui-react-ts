import { Box, Button, Grid2, Paper, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import view from '../assets/anders-jilden-uwbajDCODj4-unsplash.jpg';
import { useAppSelector } from '../store/hooks';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function LoginRedux() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const accRedux = useAppSelector(state => state.accounts);

  function handleLogin() {
    if (!email || !password) {
      return console.log('Preencher os espaços vazios.');
    }

    const accFind = accRedux.find(acc => acc.email === email && acc.password === password);

    if (!accFind) {
      console.log('Email e/ou senha incorretos.');
    } else {
      localStorage.setItem('userlogged', JSON.stringify(email));

      navigate('/store');
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
            <Typography variant="h2">Login</Typography>
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
              <Button variant="contained" type="button" onClick={handleLogin}>
                Entrar
              </Button>
            </Grid2>

            <Grid2>
              <Typography>
                Não possui conta? Faça o <Link to={'/signup'}>cadastro</Link>
              </Typography>
            </Grid2>
          </Box>
        </Grid2>
      </Paper>
    </Box>
  );
}

export default LoginRedux;
