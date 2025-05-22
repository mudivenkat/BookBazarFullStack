import {
      createBrowserRouter,
    } from "react-router";
import App from "../App";

const router = createBrowserRouter(
      [  { path:"/",
          element:<App/>,
          children: [
            { path: "",
                  element:
                  <div>Home</div>
            },
            {path:"/orders",
                  element: <div>Orders</div>
            },
            {
                  path:"/about",
                  element: <div>About</div>
            }
            
      ]
      }
]
)

export default router;