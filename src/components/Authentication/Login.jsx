import {NavLink} from "react-router-dom";
import {useState} from "react";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <main className={"container mx-auto h-screen flex flex-col items-center justify-center max-w-screen-lg"}>
            <div>
                <h1 className={"text-5xl font-bold"}>Login to Account</h1>
            </div>
            <div className={"card shrink-0 w-full shadow-2xl bg-base-300 max-h-96 max-w-screen-lg mt-10"}>
                <form className={"card-body"}>
                    <div className={"form-control"}>
                        <label className={"label"}>Email</label>
                        <input className={"input"}
                               type={"email"}
                               placeholder={"email"}
                               required={true}
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={"form-control"}>
                        <label className={"label"}>Password</label>
                        <input className={"input"}
                               type={"password"}
                               placeholder={"password"}
                               required={true}
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <label className={"label justify-end"}>
                        <NavLink to={'/register'} className="label-text-alt link link-hover">Dont have an
                                                                                             account?
                                                                                             Sign up</NavLink>
                    </label>
                    <div className={"form-control mt-8"}>
                        <button className={"btn btn-primary"}>Login</button>
                    </div>
                </form>
            </div>
            <div className={"mt-10 w-full flex justify-start"}>
                <NavLink to={'/'}>
                    <button className={"btn btn-secondary px-10"}>Go Back</button>
                </NavLink>
            </div>
        </main>
    )
}