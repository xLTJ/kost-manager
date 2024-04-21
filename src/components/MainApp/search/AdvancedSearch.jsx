
import {useFilterStore} from "../../../Services/Store.js";
import SearchFilterCheckbox from "./SearchFilters/SearchFilterCheckbox.jsx";
import {useSearchParams} from "react-router-dom";

export default function AdvancedSearch ({setSearchQuery}) {
    const [urlSearchParams] = useSearchParams();

    const filterStore = useFilterStore(state => state.filters)
    const filters = useFilterStore.getState().filters;

    const dietFilters = ["balanced", "high-fiber", "high-protein", "low-carb", "low-sodium"]

    const constructSearchParams = () => {
        const options = new URLSearchParams;
        options.append('q', urlSearchParams.get('recipe'))
        for (const [key, value] of Object.entries(filters)) {

            if (Array.isArray(value)) {
                value.forEach(item => options.append(key, item));
            } else if (value !== null) {
                options.append(key, value);
            }
        }

        return options;
    }

    return (
        <div className={"bg-base-300 mt-10 card min-w-96"}>
            <div className={"card-body"}>
                <h2 className={"card-title text-4xl font-bold mb-10 justify-center"}>Advanced Search</h2>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="checkbox"/>
                    <div className="collapse-title text-xl font-medium">
                        Diet
                    </div>
                    <div className="collapse-content flex flex-col">
                        {dietFilters.map(filter => <SearchFilterCheckbox filter={"diet"} value={filter} key={filter}/>)}
                        <button className={"btn"} onClick={() => setSearchQuery(constructSearchParams())}>WOAHH</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
