import HomePage from "./routes/homePage/homePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import { Layout, RequiredAuth } from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePage/profilePage";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage"
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import NewPostPage from "./routes/newPostPage/newPostPage";
import { listPageLoader, singlePageLoader } from "./lib/loaders";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/list",
          element:<ListPage/>,
          loader: listPageLoader,
        },
        {
          path:"/:id",
          element:<SinglePage/>,
          loader: singlePageLoader,
        },
        
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        }
      ]
    },
    {
      path:"/",
      element:<RequiredAuth />,
      children:[
        {
          path:"/profile",
          element:<ProfilePage />
        },
        {
          path:"/profile/update",
          element: <ProfileUpdatePage />
        },
        {
          path:"/add",
          element: <NewPostPage />
        }
      ]
    }
  ]);

  return (

    <RouterProvider router={router}/>
  );
}

export default App;
