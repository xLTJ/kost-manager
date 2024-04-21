import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import edamamAPI from "../../../Services/edamamAPI.js";
import ResultList from "./ResultList.jsx";
import {useActiveModalStore} from "../../../Services/Store.js";
import RecipeModal from "../generalComponents/RecipeModal.jsx";
import AdvancedSearch from "./AdvancedSearch.jsx";

export default function SearchPage() {
    const [urlSearchParams] = useSearchParams();

    const [searchParams, setSearchParams] = useState({})
    const [recipeResults, setRecipeResults] = useState([]);

    const activeModal = useActiveModalStore(state => state.activeModal);
    const modalContent = useActiveModalStore(state => state.modalContent);

    // Close modal on back button press in order to prevent modal from staying open when user leaves the page.
    useEffect(() => {
        window.addEventListener('popstate', useActiveModalStore.getState().closeModal());

        return () => window.removeEventListener('popstate', useActiveModalStore.getState().closeModal());
    }, []);
    
    useEffect(() => {
        setSearchParams(new URLSearchParams({q: urlSearchParams.get('recipe')}));
    }, [urlSearchParams])

    // Fetch recipes from API when recipeToSearch changes.
    useEffect(() => {
        async function fetchRecipes() {
            const fetchedRecipes = await edamamAPI.searchRecipes(searchParams);
            setRecipeResults(fetchedRecipes.hits);
        }

        fetchRecipes().catch(console.error)
    }, [searchParams]);

    return (
        <div className={"container mx-auto flex"}>
            <AdvancedSearch setSearchQuery={setSearchParams}/>
            <ResultList results={recipeResults}/>
            {activeModal ? <RecipeModal recipeData={modalContent}/> : null}
        </div>
    )
}