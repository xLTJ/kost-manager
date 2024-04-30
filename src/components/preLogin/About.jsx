import {NavLink} from "react-router-dom";

export default function About() {
    return (
        <div>
            <main className={"container mx-auto"}>
                <div className="hero py-56 bg-base-100">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">The App is good</h1>
                            <p className="py-6">This is all you need to know now GO USE IT PLS</p>
                            <NavLink to={'/register'} className="btn btn-primary">Sign UP!!!!!!</NavLink>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}