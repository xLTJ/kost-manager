import {Navigate, Outlet} from "react-router";
import MainAppHeader from "./MainAppHeader.jsx";
import {useUserStore} from "../../Services/Store.js";

export default function MainAppRoot() {
    const isLoggedIn = useUserStore(state => state.isLoggedIn);

    return (
        <>
            {isLoggedIn ? null : <Navigate to={'/register'}/>}
            <MainAppHeader/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}