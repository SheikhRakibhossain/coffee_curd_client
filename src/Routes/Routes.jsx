import {createBrowserRouter} from "react-router-dom";
import Main from "../Pages/Main/Main";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    },
  ]);
  export default router;