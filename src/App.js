import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Product";
import RootLayOut from "./pages/Root";
import ErrorPage from "./pages/Error";

// const routeDefintions = createRoutesFromElements(
//   <Route>
//     <Route path="/"  element= {<HomePage/>} />
//     <Route path="/products"  element= {<ProductPage/>} />
//   </Route>
// )

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayOut />,
    errorElement: <ErrorPage/>,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductPage /> }
    ]
  },
]);

// const rourter = createBrowserRouter(routeDefintions)

function App() {
  return(
    <RouterProvider router={router} />
  ) 
}

export default App;
