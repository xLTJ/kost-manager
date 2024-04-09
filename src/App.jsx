import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import LandingPage from "./components/preLogin/LandingPage.jsx";
import About from "./components/preLogin/About.jsx";
import {Root} from "postcss";
import PreLogin from "./components/preLogin/PreLogin.jsx";
import Login from "./components/Authentication/Login.jsx";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path={'/'}>
        <Route path={'/'} element={<PreLogin/>}>
            <Route path={'/'} element={<LandingPage/>}/>
            <Route path={'/about'} element={<About/>}/>
        </Route>
        <Route path={'/login'} element={<Login/>}/>
    </Route>
), {basename: "/kost-manager/"})

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App
