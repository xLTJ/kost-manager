import {useAddedFoodStore} from "../../../Services/Store.js";
import {useState} from "react";

export default function AddedFoodCard({food}) {
    const removeFood =  () => useAddedFoodStore.getState().removeFood(food);
    const setAmount = (amount) => useAddedFoodStore.getState().setAmount(food.foodId, amount);

    return (
        <li key={food.foodId}
            className={"card card-compact card-side shadow-xl max-h-56 max-w-[40rem] join bg-base-200 content-stretch"}>
            <figure className={"size-44"}>
                {food.image ? <img src={food.image}/> :
                    <div className="skeleton flex justify-center items-center">No image provided</div>}
            </figure>
            <div className={"card-body"}>
                <div className={"tooltip"} data-tip={food.label}>
                    <h2 className={"card-title join-item line-clamp-1 max-w-80 text-left"}>{food.label}</h2>
                </div>
                <div className={"flex justify-between"}>
                    <span className={"badge badge-neutral"}>{food.brand ? food.brand : "Generic"}</span>
                    <label className="input input-xs input-bordered input-secondary flex items-center gap-2 font-bold">Amount:
                        <input
                            value={food.amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder={"0"}
                            className={"w-10 font-normal"}
                            maxLength={6}
                        />
                        <span className="label-text font-normal">g</span>
                    </label>
                </div>
                <div className={"stats"}>
                    <div className={"stat p-3"}>
                        <span className={"stat-title"}>Calories</span>
                        <span className={"stat-value text-lg"}>{food.totalNutrients.ENERC_KCAL.toFixed(0)}<span className={"text-sm"}>kcal</span></span>
                    </div>
                    <div className={"stat p-3"}>
                        <span className={"stat-title"}>Protein</span>
                        <span className={"stat-value text-lg"}>{food.totalNutrients.PROCNT.toFixed(0)}<span className={"text-sm"}>g</span></span>
                    </div>
                    <div className={"stat p-3"}>
                        <span className={"stat-title"}>Fat</span>
                        <span className={"stat-value text-lg"}>{food.totalNutrients.FAT.toFixed(0)}<span className={"text-sm"}>g</span></span>
                    </div>
                    <div className={"stat p-3"}>
                        <span className={"stat-title"}>Carbs</span>
                        <span className={"stat-value text-lg"}>{food.totalNutrients.CHOCDF.toFixed(0)}<span className={"text-sm"}>g</span></span>
                    </div>
                </div>
            </div>
            <button className={"btn btn-error join-item h-auto"} onClick={removeFood}>✕</button>
        </li>
    )
}