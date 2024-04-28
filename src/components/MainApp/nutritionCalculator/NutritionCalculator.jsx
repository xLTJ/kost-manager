import FoodSearch from "./FoodSearch.jsx";
import AddedFood from "./AddedFood.jsx";

export default function NutritionCalculator() {
    return (
        <div className={"container mx-auto"}>
            <div className={"flex gap-20 my-10 justify-center min-h-screen"}>
                <FoodSearch/>
                <AddedFood/>
            </div>
        </div>
    )
}