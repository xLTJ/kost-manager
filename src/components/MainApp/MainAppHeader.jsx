import {createSearchParams, NavLink, useNavigate} from "react-router-dom";
import {useState} from "react";
import SearchBar from "./search/SearchBar.jsx";
import {useUserStore} from "../../Services/Store.js";

export default function MainAppHeader() {
    const logout = () => {
        localStorage.removeItem('user')
        useUserStore.getState().userLoggedIn(false)
    }

    return (
        <header className={'navbar sticky top-0 bg-base-300 text-base-300-content gap-4 z-50'}>
            <div className={'navbar-start'}>
                <NavLink className={'btn btn-ghost text-2xl font-bold'} to={'/app'}>Kostmanager<span
                    className={'text-accent'}>TM</span></NavLink>
            </div>
            <div className={'navbar-center'}>
                <SearchBar/>
            </div>
            <div className={"navbar-end"}>
                <ul className={"menu menu-horizontal text-lg gap-2"}>
                    <li><NavLink to={'/app/search'}>Search</NavLink></li>
                    <li><NavLink to={'/app/nutrition-calculator'}>Nutrition Calculator</NavLink></li>
                    <li><a>:3</a></li>
                    <NavLink to={'/'} onClick={logout}>
                        <div className={"btn btn-primary font-bold ml-5 "}>Log Out</div>
                    </NavLink>
                </ul>
            </div>
        </header>
    )
}