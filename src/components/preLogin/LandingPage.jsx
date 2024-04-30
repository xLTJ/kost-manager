import Header from "./Header.jsx";
import {useEffect} from "react";
import spoonacularAPI from "../../Services/spoonacularAPI.js";
import {NavLink} from "react-router-dom";
import edamamAPI from "../../Services/edamamAPI.js";

export default function LandingPage() {
    useEffect(() => {
        async function fetchData() {
            const test = await edamamAPI.searchRecipes({q: 'apple pie'});
            console.log(test);
        }

        // fetchData().catch(console.error);
    }, []);

    return (
        <main className={"container mx-auto"}>
            <div className="hero min-h-96 bg-base-100 mt-40">
                <div className="hero-content text-center text-base-100-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to Kostmanager
                            <span className={"font-bold text-accent"}>TM</span></h1>
                        <p className="mb-5">Combining recipe search and nutrition calculation into one!</p>
                        <NavLink to={'/register'} className="btn btn-primary">Sign Up Now!</NavLink>
                    </div>
                </div>
            </div>
            <figure className={"rounded-box h-[48rem] mb-10 bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"}>
            </figure>
        </main>
    )
}