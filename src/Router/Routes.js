import Content from "../Page/Content/Content";
import SellerPage from "../Page/SellerPage/SellerPage";

const { createBrowserRouter } = require("react-router-dom");
const { default: Drawer } = require("../Layout/Drawer/Drawer");

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Drawer/>,
        children: [
            {
                path: '/',
                element: <Content/>

            },
            {
                path: '/sellerpage',
                element: <SellerPage/>
            }
        ]
    }
])