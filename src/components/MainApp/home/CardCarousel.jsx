import FoodCard from "../generalComponents/FoodCard.jsx";

export default function CardCarousel ({items}) {
    const foodCards = items.map((item) => (
        <div className={"first:ml-12 last:mr-12 shrink-0 flex"}>
            <FoodCard key={item.id} result={item}/>
        </div>
        )
    )

    return (
        <div className={'flex overflow-x-auto py-10 gap-8 gradient-mask-r-90-d scrollbar-thin'}>
            {foodCards}
        </div>
    )
}