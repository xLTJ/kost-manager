import Header from "./Header.jsx";

export default function LandingPage() {
    return (
        <main className={"container mx-auto"}>
            <div className="hero min-h-96 bg-base-100 mt-40">
                <div className="hero-content text-center text-base-100-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to Kostmanager
                            <span className={"font-bold text-accent"}>TM</span></h1>
                        <p className="mb-5">The greatest kost manager app to ever exist</p>
                        <button className="btn btn-primary">Sign Up Now!</button>
                    </div>
                </div>
            </div>
        </main>
    )
}