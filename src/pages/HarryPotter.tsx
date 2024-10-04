import { Box, CircularProgress, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useEffect } from 'react';
import { getCharacters } from '../store/models/HarryPotterSlice';

function HarryPotter() {
  const dispatch = useAppDispatch();
  const hPRedux = useAppSelector(state => state.characters);

  useEffect(() => {
    dispatch(getCharacters());
    console.log(hPRedux);
  }, []);

  if (hPRedux.loading) {
    return (
      <>
        <CircularProgress />
      </>
    );
  }

  return (
    <>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center' }}>
        {hPRedux.characters.map(character => (
          <Box
            key={character.id}
            sx={{
              backgroundImage: `url(${character.image})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: '400px',
              width: '300px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              color: 'gray',
              margin: '10px',
            }}
          >
            <Typography variant="h5">{character.name}</Typography>
            {`${character.wizard}` ? <Typography>Bruxo: Sim</Typography> : <Typography>Bruxo: Não</Typography>}
            <Typography>{character.house}</Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default HarryPotter;
