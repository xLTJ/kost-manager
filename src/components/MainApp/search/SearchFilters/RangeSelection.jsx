import {useEffect, useState} from "react";
import {useFilterStore} from "../../../../Services/Store.js";


export default function RangeSelection ({filterName, selectionTitle, minPlaceholder='0', maxPlaceholder='10000+'}) {
    const [fromValue, setFromValue] = useState('');
    const [toValue, setToValue] = useState('');
    const filterStore = useFilterStore.getState();

    useEffect(() => {
        fromValue ?
            filterStore.setFilter(filterName, `${fromValue}-${toValue}`) :
            filterStore.setFilter(filterName, toValue);
        console.log(filterStore.filters)
    }, [fromValue, toValue]);

    return (
        <div className={"p-4 bg-base-200 rounded-2xl"}>
            <h3 className={"text-xl font-bold mb-4"}>{selectionTitle}</h3>
            <div className={"flex gap-4"}>
                <label className="w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Min</span>
                    </div>
                    <input
                        type="text"
                        placeholder={minPlaceholder}
                        className="input input-bordered w-full max-w-xs"
                        value={fromValue}
                        onChange={(e) => setFromValue(e.target.value)}
                    />
                </label>
                <label className="w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Max</span>
                    </div>
                    <input
                        type="text"
                        placeholder={maxPlaceholder}
                        className="input input-bordered w-full max-w-xs"
                        value={toValue}
                        onChange={(e) => setToValue(e.target.value)}
                    />
                </label>
            </div>
        </div>
    )
}