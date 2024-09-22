import { Button, Divider, TextField } from '@mui/material';
import DefaultLayout from '../config/layout/DefaultLayout';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { decrement, increment, incrementByAmount } from '../store/models/CounterSlice';
import { useState } from 'react';
import { addCategory, cleanCategories } from '../store/models/CategoriesSlice';

function ReduxTest() {
  const config = {
    navigation: true,
    footer: true,
  };

  const dispatch = useAppDispatch();

  const [value, setValue] = useState<string>('');
  const [categoryValue, setCategoryValue] = useState<string>('');

  function incrementRedux() {
    console.log('IN');
    dispatch(increment());
  }

  function decrementRedux() {
    console.log('dec');
    dispatch(decrement());
  }

  function handleClick() {
    dispatch(incrementByAmount(Number(value)));

    setValue('');
  }

  function addCategoryRedux() {
    dispatch(addCategory(categoryValue));

    setCategoryValue('');
  }

  function deleteCategoriesRedux() {
    dispatch(cleanCategories());
  }

  const categories = useAppSelector(state => state.categories.data);

  return (
    <DefaultLayout config={config}>
      <h1>Redux Teste</h1>

      <Button variant="outlined" onClick={incrementRedux}>
        +
      </Button>
      <Button variant="outlined" onClick={decrementRedux}>
        -
      </Button>

      <Divider sx={{ margin: '20px' }} />

      <TextField
        variant="outlined"
        type="text"
        value={categoryValue}
        label={'Categoria'}
        onChange={ev => setCategoryValue(ev.target.value)}
      />

      <TextField
        variant="outlined"
        type="text"
        value={value}
        label={'Valor'}
        onChange={ev => setValue(ev.target.value)}
      />

      <Button variant="outlined" onClick={addCategoryRedux}>
        adicionar categoria
      </Button>

      <Button variant="outlined" onClick={handleClick}>
        adicionar valor
      </Button>

      <Button variant="outlined" onClick={deleteCategoriesRedux}>
        deletar categorias
      </Button>
      {categories.map(item => (
        <div>{item}</div>
      ))}
    </DefaultLayout>
  );
}

export default ReduxTest;
