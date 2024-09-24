import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DefaultLayout from '../config/layout/DefaultLayout';
import { Box, Paper } from '@mui/material';
import { useAppSelector } from '../store/hooks';
import { ProductType } from '../store/models/ProductsSlice';

const columns: GridColDef<ProductType[][number]>[] = [
  { field: 'id', headerName: 'Id', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 150,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 150,
    editable: true,
  },
  {
    field: 'active',
    headerName: 'Active',
    type: 'number',
    width: 110,
    editable: true,
  },
];

function Products() {
  const products = useAppSelector(state => state.products);

  return (
    <DefaultLayout>
      <Paper>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={products}
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
