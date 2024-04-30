import {createSearchParams, useNavigate} from "react-router-dom";
import {useState} from "react";
import EdamamAPI from "../../../Services/edamamAPI.js";

// Component for searching for food.
export default function FoodSearchbar({setSearchResults}) {
    const [searchValue, setSearchValue] = useState('')

    // Function for handling the form submission. When the form is submitted, the search result state is set to the search results from the API.
    const handleSubmit = async (e) => {
        e.preventDefault()

        const foodResults = await EdamamAPI.searchFood(searchValue);
        console.log(foodResults);
        setSearchResults(foodResults.hints);
    }

    return (
        <form onSubmit={handleSubmit} className={"flex justify-center"}>
            <input
                type={'text'}
                placeholder={'Search for food'}
                className={'input input-accent w-full'}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button type={"submit"}/>
        </form>
    )
}