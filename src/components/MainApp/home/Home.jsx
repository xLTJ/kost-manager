import {useActiveModalStore, useUserStore} from "../../../Services/Store.js";
import {Navigate} from "react-router";
import BigRecipeSearchbar from "../generalComponents/BigRecipeSearchbar.jsx";
import {useEffect, useState} from "react";
import {getSavedRecipes} from "../../../Services/firebase.js";
import CardCarousel from "./CardCarousel.jsx";
import RecipeModal from "../generalComponents/RecipeModal.jsx";

// Home page component.
export default function Home() {
    const isLoggedIn = useUserStore(state => state.isLoggedIn);
    const [savedRecipes, setSavedRecipes] = useState([])
    const activeModal = useActiveModalStore(state => state.activeModal);
    const modalContent = useActiveModalStore(state => state.modalContent);

    // Redirect to login page if user is not logged in.
    useEffect(() => {
        const fetchSavedRecipes = async () => {
            const userUID = useUserStore.getState().userData.uid;
            const savedRecipes = await getSavedRecipes(userUID)

            // get the last 10 saved recipes, and reverse the order so the most recent is first
            setSavedRecipes(savedRecipes.slice(0, 10));
            console.log(savedRecipes)
        }

        fetchSavedRecipes().catch(console.error);
    }, []);

    return (
        <div>
            {activeModal ? <RecipeModal recipeData={modalContent}/> : null}
            <div className={"hero h-[50vh]"}
                 style={{backgroundImage: 'url(https://live.staticflickr.com/2912/33261917251_da121a456c_h.jpg)'}}>
                <div className="hero-overlay bg-black bg-opacity-50 shadow-2xl"></div>
                <div className={"hero-content text-center text-neutral-content"}>
                    <div className={""}>
                        <h1 className={"text-4xl font-bold my-10"}><span
                            className={"text-accent"}>Welcome</span> {useUserStore.getState().username}</h1>
                        <BigRecipeSearchbar/>
                    </div>
                </div>
            </div>
            <div className={"container mx-auto align-middle py-10 px-4"}>
                <div className={"min-h-96"}>
                    <h2 className={"text-3xl font-bold"}>Recently Saved</h2>
                    {savedRecipes ? <CardCarousel items={savedRecipes}/> : null}
                </div>
            </div>
        </div>
    )
}