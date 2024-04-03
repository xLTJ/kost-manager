import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <header className={'navbar sticky top-0 bg-base-300 text-base-300-content gap-4 z-50'}>
            <div className={'navbar-start'}>
                <NavLink className={'btn btn-ghost text-2xl font-bold'} to={'/'}>Kostmanager<span
                    className={'text-accent'}>TM</span></NavLink>
            </div>
            <div className={"navbar-end"}>
                <ul className={"menu menu-horizontal text-lg"}>
                    <li className={""}><NavLink to={'/about'}>About</NavLink></li>
                    <li><a>Epic style</a></li>
                    <li><a>AAAAAAA</a></li>
                    <div className={"btn btn-primary font-bold ml-5 "}><a>Log In</a></div>
                </ul>
            </div>
        </header>
    )
}