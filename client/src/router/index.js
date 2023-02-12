import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import {Navigation} from "../components"
import {Home, Settings, NotFound, Recommend} from "../pages"
import {Container} from "@mui/material";

const NavWrapper = () => {
    return (
        <>
            <Navigation/>
            <Container maxWidth={"xl"}>
                <Outlet/>
            </Container>
        </>
    )
}

const router = createBrowserRouter([
    {
        element: <NavWrapper/>,
        children: [
            {
                path: "/",
                element: <Home/>,
                errorElement: <NotFound/>
            },
            {
                path: "/home",
                element: <Home/>,
                errorElement: <NotFound/>
            },{
                path: "/recommend",
                element: <Recommend/>,
                errorElement: <NotFound/>
            },{
                path: "/recommend/:title",
                element: <Recommend/>,
                errorElement: <NotFound/>
            },
            {
                path: "/settings",
                element: <Settings/>,
                errorElement: <NotFound/>
            }
        ]
    },
])


const Router = () => {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
};

export default Router;