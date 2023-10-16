import DashBoardLayout from "../Layout/DashBoardLayout/DashBoardLayout";
import Cart from "../Pages/DashBoard/Cart/Cart";
import AllUsers from "../Pages/DashBoard/Users/AllUsers";
import OrderBox from "../Pages/OrderBox/OrderBox/OrderBox";
import LogIn from "../Pages/UserFile/LogIn";
import SignUp from "../Pages/UserFile/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: MainLayout } = require("../Layout/MainLayout/MainLayout");
const { default: Home } = require("../Pages/Home/Home/Home");

export const routers = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<LogIn/>
            },
            {
                path:'/signup',
                element:<SignUp/>
            },
            {
                path:'/orderbox/:id',
                element:<OrderBox/>,
                loader: ({params}) =>fetch(`http://localhost:4000/products/${params.id}`)
            },
            {
                path:'/dashboard',
                element:<DashBoardLayout/>,
                children:[
                    {
                        path:'/dashboard',
                        element:<Cart/>
                    },
                    {
                        path:'/dashboard/allusers',
                        element:<AllUsers/>
                    }
                ]
            }
        ]
    }
]);