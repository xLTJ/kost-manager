import {capitalizeFirstLetter} from "../../../Services/helperFunctions.js";
import {Link} from "react-router-dom";
import {useActiveModalStore} from "../../../Services/Store.js";

export default function ResultCard ({result}) {
    const recipe = result.recipe;


    const handleCardClick = (e) => {
        e.preventDefault();
        useActiveModalStore.getState().openModal(recipe);
    }

    return (
        <button className={"card card-compact max-h-[32rem] bg-base-100 shadow-xl max-w-72 hover:scale-105 transition ease-in-out"} onClick={handleCardClick}>
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