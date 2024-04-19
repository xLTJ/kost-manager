import {useUserStore} from "../../Services/Store.js";
import {Navigate} from "react-router";

export default function Home() {
    const isLoggedIn = useUserStore(state => state.isLoggedIn);

    return (
        <div className={"container mx-auto align-middle"}>
            <div className={"flex justify-center"}>
                {isLoggedIn ? null : <Navigate to={'/register'}/>}
                <h1 className={"text-4xl"}>We are balling</h1>
            </div>
            <div className={"flex justify-center"}>
                <h1 className={"text-2xl"}>Welcome {useUserStore.getState().username}!</h1>
            </div>
        </div>
    )
}