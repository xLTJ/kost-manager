import {createSearchParams, NavLink, useNavigate} from "react-router-dom";
import {useState} from "react";
import SearchBar from "./search/SearchBar.jsx";

export default function MainAppHeader() {
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
                <ul className={"menu menu-horizontal text-lg"}>
                    <li className={""}><NavLink to={'/about'}>Change this</NavLink></li>
                    <li><a>Epic style</a></li>
                    <li><a>AAAAAAA</a></li>
                    <NavLink to={'/'}>
                        <div className={"btn btn-primary font-bold ml-5 "}>Log Out</div>
                    </NavLink>
                </ul>
            </div>
        </header>
    )
}