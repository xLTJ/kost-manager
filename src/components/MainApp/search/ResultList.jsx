import FoodCard from "../generalComponents/FoodCard.jsx";

export default function ResultList ({results}) {
    console.log(results)

    let resultCards;

    if (results) {
        resultCards = results.map((result) => <FoodCard key={result.recipe.uri} result={result}/>)
    } else {
        resultCards = 'Loading';

    }

    return (
        <div className={"flex flex-wrap gap-8 justify-center content-start my-10"}>
            {resultCards === 'Loading' ? <h1>Loading</h1> : resultCards}
        </div>
    )
}