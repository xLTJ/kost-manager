import {useAddedFoodStore} from "../../../Services/Store.js";

export default function FoodResultCard({food}) {
    const addFood = () => useAddedFoodStore.getState().addFood(food);


    return (
        <li key={food.foodId}
            className={"card card-compact card-side shadow-xl max-h-56 max-w-[40rem] join bg-base-200 content-stretch"}>
            <figure className={"size-44"}>
                {food.image ? <img src={food.image}/> : <div className="skeleton flex justify-center items-center">No image provided</div>}
            </figure>
            <div className={"card-body"}>
                <div className={"tooltip"} data-tip={food.label}>
                    <h2 className={"card-title join-item line-clamp-1 max-w-80 text-left"}>{food.label}</h2>
                </div>
                <span className={"badge badge-neutral"}>{food.brand ? food.brand : "Generic"}</span>
                <div className={"stats"}>
                    <div className={"stat p-3"}>
                        <span className={"stat-title"}>Calories</span>
                        <span className={"stat-value text-lg"}>{food.nutrients.ENERC_KCAL.toFixed(0)}<span className={"text-sm"}>kcal</span></span>
                    </div>
                    <div className={"stat p-3"}>
                        <span className={"stat-title"}>Protein</span>
                        <span className={"stat-value text-lg"}>{food.nutrients.PROCNT.toFixed(0)}<span className={"text-sm"}>g</span></span>
                    </div>
                    <div className={"stat p-3"}>
                        <span className={"stat-title"}>Fat</span>
                        <span className={"stat-value text-lg"}>{food.nutrients.FAT.toFixed(0)}<span className={"text-sm"}>g</span></span>
                    </div>
                    <div className={"stat p-3"}>
                        <span className={"stat-title"}>Carbs</span>
                        <span className={"stat-value text-lg"}>{food.nutrients.CHOCDF.toFixed(0)}<span className={"text-sm"}>g</span></span>
                    </div>
                </div>
            </div>
            <button className={"btn btn-primary join-item h-auto"} onClick={addFood}>Add</button>
        </li>
    )
}