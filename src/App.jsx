import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import LandingPage from "./components/preLogin/LandingPage.jsx";
import About from "./components/preLogin/About.jsx";
import PreLogin from "./components/preLogin/PreLogin.jsx";
import Login from "./components/Authentication/Login.jsx";
import Register from "./components/Authentication/Register.jsx";
import Home from "./components/MainApp/home/Home.jsx";
import MainAppRoot from "./components/MainApp/MainAppRoot.jsx";
import SearchPage from "./components/MainApp/search/SearchPage.jsx";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path={'/'}>
        <Route path={'/'} element={<PreLogin/>}>
            <Route path={'/'} element={<LandingPage/>}/>
            <Route path={'/about'} element={<About/>}/>
        </Route>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/register'} element={<Register/>}/>
        <Route path={'/app'} element={<MainAppRoot/>}>
            <Route path={'/app'} element={<Home/>}/>
            <Route path={'/app/search'} element={<SearchPage/>}/>
        </Route>
    </Route>
), {basename: "/kost-manager/"})

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App
