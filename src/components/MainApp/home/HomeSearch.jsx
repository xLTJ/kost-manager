import {useState} from "react";
import {createSearchParams, useNavigate} from "react-router-dom";

export default function HomeSearch () {
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