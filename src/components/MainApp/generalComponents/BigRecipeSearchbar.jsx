import {useState} from "react";
import {createSearchParams, useNavigate} from "react-router-dom";

// Component for the search bar on the home page. Is also used on the search page, but i was too lazy to make a separate component for that.
export default function BigRecipeSearchbar () {
    const [searchValue, setSearchValue] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        const searchQuery = {recipe: searchValue}
        const query = createSearchParams(searchQuery);


        navigate({
            pathname: '/app/search',
            search: `?${query}`
        })
    }

    return (
        <form className={"flex justify-center gap-1 content-center w-full join"} onSubmit={handleSubmit}>
            <input
                className={"input input-primary input-lg w-full join-item text-black"}
                type="text"
                placeholder={"Search Recipe"}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className={"btn btn-primary btn-lg join-item"} type={"submit"}>Search</button>
        </form>
    )
}