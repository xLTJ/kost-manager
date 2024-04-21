import {useFilterStore} from "../../../../Services/Store.js";

export default function SearchFilterCheckbox ({filter, value}) {
    const filterStore = useFilterStore.getState()

    const handleChange = (e) => {
        e.target.checked ? filterStore.addFilter(filter, value) : filterStore.removeFilter(filter, value);
    }

    return (
        <label className="label cursor-pointer">
            <span className="label-text">{value}</span>
            <input type="checkbox" className="checkbox" onChange={handleChange}/>
        </label>
    )
}