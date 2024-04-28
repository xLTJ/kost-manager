import {Navigate, Outlet} from "react-router";
import MainAppHeader from "./MainAppHeader.jsx";
import {useUserStore} from "../../Services/Store.js";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function MainAppRoot() {
    const navigate = useNavigate()
    const savedUser = localStorage.getItem('user');

    if (savedUser) {
        const user = JSON.parse(savedUser);
        useUserStore.getState().updateUser(user);
        useUserStore.getState().userLoggedIn(true);
        console.log('User logged in')
    }

    useEffect(() => {
        if (!useUserStore.getState().isLoggedIn) {
            navigate('/')
        }
    }, [navigate]);

    return (
        <>
            <MainAppHeader/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}