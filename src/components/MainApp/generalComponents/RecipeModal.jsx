import {useActiveModalStore, useUserStore} from "../../../Services/Store.js";
import NutritionTable from "./NutritionTable.jsx";
import {useState} from "react";
import {addRecipe, getSavedRecipes} from "../../../Services/firebase.js";

export default function RecipeModal({recipeData}) {
    const [showPerPortion, setShowPerPortion] = useState(false)

    const closeModal = () => {
        useActiveModalStore.getState().closeModal();
    }

    const saveRecipe = async () => {
        const recipeUri = recipeData.uri.split('_')[1]
        const userUID = useUserStore.getState().userData.uid;

        await addRecipe(userUID, recipeUri, recipeData)
        const savedRecipes = await getSavedRecipes(userUID)
        console.log(savedRecipes);
    }

    console.log(recipeData)

    return (
        <div className={"fixed inset-0 top-16 z-10 flex flex-col justify-center items-center bg-opacity-60 bg-black"}>
            <div className={"card card-side shrink-0 shadow-2xl bg-base-300 max-w-screen-lg mt-10 max-h-[36rem]"}>
                <div className={"card-body m-5 mr-0 bg-base-200 rounded-xl max-w-80"}>
                    <figure className={"rounded-xl shrink-0 shadow-2xl"}>
                        <img
                            src={recipeData.images.REGULAR.url}
                            alt={"pic"}
                        />
                    </figure>
                    <h3 className={"font-bold text-2xl"}>Ingredients</h3>
                    <ul className={"overflow-auto scrollbar-thin list-disc list-inside"}>
                        {recipeData.ingredientLines.map((ingredient) => <li>{ingredient}</li>)}
                    </ul>
                </div>
                <div className={"card-body max-w-[30rem]"}>
                    <h2 className={"card-title font-bold text-4xl"}>{recipeData.label}</h2>
                    <div className={"flex gap-2 my-2"}>
                        <div className="badge badge-neutral">{recipeData.mealType[0]}</div>
                        <div className="badge badge-neutral">{recipeData.dishType[0]}</div>
                        <div className="badge badge-neutral">{recipeData.cuisineType[0]}</div>
                    </div>
                    <p>Gives {recipeData.yield} portions</p>
                    <div className={"join my-5"}>
                        <a href={recipeData.url} target={'_blank'} className={"btn btn-wide join-item"}>View Recipe</a>
                        <button className={"btn btn-secondary join-item"} onClick={saveRecipe}>Save</button>
                    </div>
                    <label className="label justify-start gap-2">
                        <span className="label-text">Nutrition per portion</span>
                        <input
                            type="checkbox"
                            className="toggle"
                            checked={showPerPortion}
                            onChange={(e) => setShowPerPortion(e.target.checked)}
                        />
                    </label>
                    <NutritionTable
                        nutrients={{totalNutrients: recipeData.totalNutrients, totalDaily: recipeData.totalDaily}}
                        showPerPortion={showPerPortion}
                        portionSize={recipeData.yield}
                    />
                </div>
            </div>
            <div className={"mt-5"}>
                <button className={"btn btn-accent btn-wide font-bold"} onClick={closeModal}>Close</button>
            </div>
        </div>
    )
}