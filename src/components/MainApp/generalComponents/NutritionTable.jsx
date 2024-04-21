export default function NutritionTable({nutrients, showPerPortion, portionSize}) {
    const nutrientKeys = Object.keys(nutrients.totalNutrients);
    const nutrientData = Object.values(nutrients.totalNutrients);
    const nutrientPercentages = nutrients.totalDaily;
    const multiplier = showPerPortion ? 1 / portionSize : 1;

    return (
        <div className={"overflow-y-scroll scrollbar-thin mb-5"}>
            <table className={"table"}>
                <thead>
                <tr>
                    <th className={"px-4 py-2"}>Nutrient</th>
                    <th className={"px-4 py-2"}>Amount</th>
                    <th className={"px-4 py-2"}>Of Daily Needed</th>
                </tr>
                </thead>
                <tbody>
                {nutrientKeys.map((nutrientKey, index) => {
                    return (
                        <tr key={nutrientKey}>
                            <td className={"border px-4 py-2"}>{nutrientData[index].label}</td>
                            <td className={"border px-4 py-2"}>{((nutrientData[index].quantity * multiplier).toFixed)(2)}{nutrientData[index].unit}</td>
                            {
                                nutrientPercentages[nutrientKey] ?
                                    <td className={"border px-4 py-2"}>{(nutrientPercentages[nutrientKey].quantity * multiplier).toFixed(2)}%</td> :
                                    null
                            }
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}