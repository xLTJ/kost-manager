import {useState} from "react";
import FoodSearchbar from "../generalComponents/FoodSearchbar.jsx";
import {useAddedFoodStore} from "../../../Services/Store.js";
import AddedFoodCard from "./AddedFoodCard.jsx";

export default function AddedFood() {
    const addedFood = useAddedFoodStore(state => state.addedFood);

    // Calculate total nutrients from added food
    const totalCalories = addedFood.reduce((acc, food) => acc + food.totalNutrients.ENERC_KCAL, 0);
    const totalProtein = addedFood.reduce((acc, food) => acc + food.totalNutrients.PROCNT, 0);
    const totalFat = addedFood.reduce((acc, food) => acc + food.totalNutrients.FAT, 0);
    const totalCarbs = addedFood.reduce((acc, food) => acc + food.totalNutrients.CHOCDF, 0);

    return (
        <div className={"bg-base-300 flex flex-col p-10 rounded-xl min-w-[40rem] max-h-screen"}>
            <h1 className={"font-bold text-4xl flex justify-center mb-10"}>Added Food</h1>
            <div className={"join join-vertical outline outline-1 outline-primary"}>
                <h2 className={"join-item bg-base-100 text-2xl flex justify-center font-bold p-4"}>Total Nutrients</h2>
                <div className={"stats join-item outline outline-1 outline-primary"}>
                    <div className={"stat "}>
                        <span className={"stat-title"}>Calories</span>
                        <span className={"stat-value text-xl"}>{totalCalories.toFixed(0)}<span className={"text-lg"}>kcal</span></span>
                    </div>
                    <div className={"stat"}>
                        <span className={"stat-title"}>Protein</span>
                        <span className={"stat-value text-xl"}>{totalProtein.toFixed(0)}<span className={"text-lg"}>g</span></span>
                    </div>
                    <div className={"stat"}>
                        <span className={"stat-title"}>Fat</span>
                        <span className={"stat-value text-xl"}>{totalFat.toFixed(0)}<span className={"text-lg"}>g</span></span>
                    </div>
                    <div className={"stat"}>
                        <span className={"stat-title"}>Carbs</span>
                        <span className={"stat-value text-xl"}>{totalCarbs.toFixed(0)}<span className={"text-lg"}>g</span></span>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <ul className={"flex flex-col gap-6 overflow-auto scrollbar-thin pr-2 h-full py-4"}>
                {addedFood && addedFood.map((food) => <AddedFoodCard food={food}/>)}
            </ul>
        </div>
    )
}