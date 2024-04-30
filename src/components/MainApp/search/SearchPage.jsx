import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import edamamAPI from "../../../Services/edamamAPI.js";
import ResultList from "./ResultList.jsx";
import {useActiveModalStore, useFilterStore, useRecipeResultsStore} from "../../../Services/Store.js";
import RecipeModal from "../generalComponents/RecipeModal.jsx";
import AdvancedSearch from "./AdvancedSearch.jsx";
import HomeSearch from "../home/HomeSearch.jsx";

export default function SearchPage() {
    const recipeResultsStore = useRecipeResultsStore(state => state.recipeResults);
    const [urlSearchParams] = useSearchParams();

    const [searchParams, setSearchParams] = useState({})
    // const [recipeResults, setRecipeResults] = useState([]);

    const activeModal = useActiveModalStore(state => state.activeModal);
    const modalContent = useActiveModalStore(state => state.modalContent);

    // Close modal on back button press in order to prevent modal from staying open when user leaves the page.
    useEffect(() => {
        window.addEventListener('popstate', () => {
            useActiveModalStore.getState().closeModal()
            useFilterStore.getState().resetFilters()
        });

        return () => window.removeEventListener('popstate', useActiveModalStore.getState().closeModal());
    }, []);

    // Set search parameters from URLSearchParams every time URLSearchParams changes.
    useEffect(() => {
        urlSearchParams.get('recipe') ? setSearchParams(new URLSearchParams({q: urlSearchParams.get('recipe')})) : null;
    }, [urlSearchParams])

    // Fetch recipes from API when recipeToSearch changes.
    useEffect(() => {
        async function fetchRecipes() {
            const fetchedRecipes = await edamamAPI.searchRecipes(searchParams);
            useRecipeResultsStore.getState().setRecipeResults(fetchedRecipes.hits);
        }

        fetchRecipes().catch(console.error)
    }, [searchParams]);

    return (
        <div className={"container mx-auto flex justify-around"}>
            <AdvancedSearch setSearchQuery={setSearchParams}/>
            <div className={"p-10"}>
                <HomeSearch/>
                <ResultList results={recipeResultsStore}/>
            </div>
            {activeModal ? <RecipeModal recipeData={modalContent}/> : null}
        </div>
    )
}