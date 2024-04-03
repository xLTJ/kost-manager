import Header from "./Header.jsx";
import {Outlet} from "react-router";

export default function PreLogin() {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}