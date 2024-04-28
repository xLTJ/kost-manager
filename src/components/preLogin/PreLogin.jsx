import Header from "./Header.jsx";
import {Outlet} from "react-router";
import {useUserStore} from "../../Services/Store.js";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function PreLogin() {
    const navigate = useNavigate()
    const savedUser = localStorage.getItem('user');

    if (savedUser) {
        const user = JSON.parse(savedUser);
        useUserStore.getState().updateUser(user);
        useUserStore.getState().userLoggedIn(true);
        console.log('User logged in')
    }

    useEffect(() => {
        if (useUserStore.getState().isLoggedIn) {
            navigate('/app')
        }
    }, [navigate]);

    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}