import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DefaultLayout from '../config/layout/DefaultLayout';
import { Box, CircularProgress, Paper } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getProducts, ProductType } from '../store/models/ProductsSlice';
import { useEffect } from 'react';

const columns: GridColDef<ProductType[][number]>[] = [
  { field: 'id', headerName: 'Id', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'image',
    headerName: 'Image',
    width: 150,
    editable: true,
  },
  {
    field: 'createdAt',
    headerName: 'Created at',
    width: 150,
    editable: true,
  },
];

function Products() {
  const dispatch = useAppDispatch();
  const productsRedux = useAppSelector(state => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (productsRedux.loading) {
    return (
      <DefaultLayout>
        <CircularProgress />
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <Paper>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={productsRedux.products}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </Paper>
    </DefaultLayout>
  );
}

export default Products;
