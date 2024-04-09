import {NavLink} from "react-router-dom";

export default function Login() {
    return (
        <main className={"container mx-auto h-screen flex flex-col items-center justify-center max-w-screen-lg"}>
            <div>
                <h1 className={"text-5xl font-bold"}>Login to Account</h1>
            </div>
            <div className={"card shrink-0 w-full shadow-2xl bg-base-300 max-h-96 max-w-screen-lg mt-10"}>
                <form className={"card-body"}>
                    <div className={"form-control"}>
                        <label className={"label"}>Email</label>
                        <input className={"input"} type={"email"} placeholder={"email"} required={true}/>
                    </div>
                    <div className={"form-control"}>
                        <label className={"label"}>Password</label>
                        <input className={"input"} type={"password"} placeholder={"password"} required={true}/>
                        <label className={"label justify-end"}>
                            <a href="#" className="label-text-alt link link-hover"
                               onClick={() => alert("Get fucked nerd")}>Forgot password?</a>
                        </label>
                    </div>
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