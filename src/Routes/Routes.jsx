import {createBrowserRouter} from "react-router-dom";
import Main from "../Pages/Main/Main";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import Home from "../Pages/Home/Home";
import Coffee from "../Pages/Coffee/Coffee";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
            path:'/addcoffee',
            element:<AddCoffee/>
        },
       {
        path:'/coffee',
        element:<Coffee/>,
        loader: () => fetch('http://localhost:5000/coffee')
      }
      ]
    }
  ]);
  export default router;