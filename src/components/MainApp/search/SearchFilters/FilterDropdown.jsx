import filterList from "./filters.json";
import SearchFilterCheckbox from "./SearchFilterCheckbox.jsx";

export default function FilterDropdown ({dropDownTitle, checkboxList}) {
    return (
        <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox"/>
            <div className="collapse-title text-xl font-bold">{dropDownTitle}</div>
            <div className="collapse-content flex flex-col">
                {checkboxList}
            </div>
        </div>
    )
}