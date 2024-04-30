import {createSearchParams, useNavigate} from "react-router-dom";
import {useState} from "react";

export default function SearchBar() {
    const [searchValue, setSearchValue] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        const searchQuery = {recipe: searchValue}
        const query = createSearchParams(searchQuery);

        navigate({
            pathname: 'search',
            search: `?${query}`
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type={'text'}
                placeholder={'Search Recipe'}
                className={'input input-primary w-96'}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button type={"submit"}/>
        </form>
    )
}