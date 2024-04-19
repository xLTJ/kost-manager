import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import spoonacularAPI from "../../../Services/spoonacularAPI.js";

export default function SearchPage() {
    const [searchParams] = useSearchParams();
    const [recipeResults, setRecipeResults] = useState([]);

    const recipeToSearch = searchParams.get('recipe');

    useEffect(() => {
        async function fetchData() {
            const test = await spoonacularAPI.searchRecipe({query: recipeToSearch});
            console.log(test);
        }

        // fetchData().catch(console.error)
    }, [recipeToSearch]);

    return (
        <div className={"container mx-auto"}>
            <h1>U searched for smth idk</h1>
            <h1>{recipeToSearch}</h1>
        </div>
    )
}