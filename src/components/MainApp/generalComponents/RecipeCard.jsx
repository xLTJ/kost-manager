import {capitalizeFirstLetter} from "../../../Services/helperFunctions.js";
import {Link} from "react-router-dom";
import {useActiveModalStore} from "../../../Services/Store.js";

// Component for displaying a recipe card.
export default function RecipeCard ({result}) {
    const recipe = result.recipe;

    // Function for handling the card click. When the card is clicked, the modal is opened with the recipe data.
    const handleCardClick = (e) => {
        e.preventDefault();
        useActiveModalStore.getState().openModal(recipe);
    }

    return (
        <button className={"card card-compact max-h-[32rem] bg-base-100 shadow-xl max-w-72 hover:scale-105 transition ease-in-out shrink-0"} onClick={handleCardClick}>
            <figure>
                <img
                    src={recipe.images.REGULAR.url}
                    alt={"pic"}
                />
            </figure>
            <div className={"card-body"}>
                <h2 className={"card-title font-bold text-2xl justify-center"}>{recipe.label}</h2>
                <p>Calories: {Math.round(recipe.calories / recipe.yield)}</p>
                <p>Number of ingredients: {recipe.ingredients.length}</p>
            </div>
        </button>
    )
}