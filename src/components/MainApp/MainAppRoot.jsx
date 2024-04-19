import {Outlet} from "react-router";
import MainAppHeader from "./MainAppHeader.jsx";

export default function MainAppRoot() {
    return (
        <>
            <MainAppHeader/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}