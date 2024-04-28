import FoodSearchbar from "../generalComponents/FoodSearchbar.jsx";
import {useState} from "react";
import FoodResultCard from "./FoodResultCard.jsx";

export default function FoodSearch() {
    const [searchResults, setSearchResults] = useState()

    return (
        <div className={"bg-base-300 flex flex-col p-10 rounded-xl min-w-[40rem] max-h-screen"}>
            <h1 className={"font-bold text-4xl flex justify-center mb-10"}>Add More Food</h1>
            <FoodSearchbar setSearchResults={setSearchResults}/>
            <div className="divider"></div>
            <ul className={"flex flex-col gap-6 overflow-auto scrollbar-thin pr-2 py-4"}>
                {searchResults && searchResults.map((result) => <FoodResultCard food={result.food}/>)}
            </ul>
        </div>
    )
}