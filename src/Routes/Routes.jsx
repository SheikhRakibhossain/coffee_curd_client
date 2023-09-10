import {createBrowserRouter} from "react-router-dom";
import Main from "../Pages/Main/Main";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'addcoffee',
            element:<AddCoffee/>
        }
      ]
    }
  ]);
  export default router;