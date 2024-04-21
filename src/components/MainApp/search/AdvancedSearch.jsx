import {useFilterStore} from "../../../Services/Store.js";
import SearchFilterCheckbox from "./SearchFilters/SearchFilterCheckbox.jsx";
import {useSearchParams} from "react-router-dom";
import filterList from "./SearchFilters/filters.json";
import FilterDropdown from "./SearchFilters/FilterDropdown.jsx";
import RangeSelection from "./SearchFilters/RangeSelection.jsx";

export default function AdvancedSearch ({setSearchQuery}) {
    const [urlSearchParams] = useSearchParams();

    const filterStore = useFilterStore(state => state.filters)
    const filters = useFilterStore.getState().filters;

    // Construct search parameters from filters and search query.
    const constructSearchParams = () => {
        const options = new URLSearchParams;
        options.append('q', urlSearchParams.get('recipe'))

        for (const [key, value] of Object.entries(filters)) {

            if (Array.isArray(value)) {
                value.forEach(item => options.append(key, item));
            } else if (value !== null && value !== "") {
                options.append(key, value);
            }
        }

        return options;
    }

    return (
        <div className={"bg-base-300 mt-10 card min-w-96"}>
            <div className={"card-body"}>
                <h2 className={"card-title text-4xl font-bold mb-10 justify-center"}>Advanced Search</h2>

                <FilterDropdown
                    checkboxList={
                        filterList.diet.diet.map(filter => <SearchFilterCheckbox filter={"diet"} value={filter}
                                                                                 key={filter}/>).concat(
                            filterList.diet.health.map(filter => <SearchFilterCheckbox filter={"health"} value={filter}
                                                                                       key={filter}/>)
                        )}
                    dropDownTitle={"Diet"}
                />

                <FilterDropdown
                    checkboxList={filterList.allergies.health.map(filter => <SearchFilterCheckbox filter={"health"}
                                                                                                  value={filter}
                                                                                                  key={filter}/>)}
                    dropDownTitle={"Allergies"}
                />

                <FilterDropdown
                    checkboxList={filterList.cuisine.cuisine.map(filter => <SearchFilterCheckbox filter={"cuisineType"}
                                                                                                 value={filter}
                                                                                                 key={filter}/>)}
                    dropDownTitle={"Cuisine"}
                />

                <FilterDropdown
                    checkboxList={filterList.mealType.mealType.map(filter => <SearchFilterCheckbox filter={"mealType"}
                                                                                                   value={filter}
                                                                                                   key={filter}/>)}
                    dropDownTitle={"Meal Type"}
                />

                <FilterDropdown
                    checkboxList={filterList.dishType.dishType.map(filter => <SearchFilterCheckbox filter={"dishType"}
                                                                                                   value={filter}
                                                                                                   key={filter}/>)}
                    dropDownTitle={"Dish Type"}
                />

                <RangeSelection filterName={"calories"} selectionTitle={"Calories Per Portion"}/>
                <RangeSelection filterName={"ingr"} selectionTitle={"Number of Ingredients"} minPlaceholder={'0'} maxPlaceholder={'10+'}/>

                <button className={"btn btn-primary"} onClick={() => setSearchQuery(constructSearchParams())}>Apply
                    Filters
                </button>
            </div>
        </div>
    )
}
