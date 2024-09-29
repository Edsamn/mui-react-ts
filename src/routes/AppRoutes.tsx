import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';
import Login from '../pages/Login';
import Students from '../pages/Students';
import CreateStudent from '../pages/CreateStudent';
import Test from '../pages/Test';
import ReduxTest from '../pages/ReduxTest';
import AddProduct from '../pages/AddProduct';
import Products from '../pages/Products';
import Transactions from '../pages/Transactions';
import SignUp from '../pages/SignUp';
import Store from '../pages/Store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <Error404 />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/students',
    element: <Students />,
  },
  {
    path: '/test',
    element: <Test />,
  },
  {
    path: '/redux',
    element: <ReduxTest />,
  },
  {
    path: '/students/create',
    element: <CreateStudent />,
  },
  {
    path: '/products/create',
    element: <AddProduct />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/transactions',
    element: <Transactions />,
  },
  {
    path: '/store',
    element: <Store />,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
