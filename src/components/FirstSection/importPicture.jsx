import Toggle from "./togglePicture.jsx"

export default function importPicture() {
    return (
        <>
            <section className="w-full border h-screen flex items-center justify-evenly">
                <Toggle />
                <h1 className="text-7xl font-semibold w-xl primary-font">
                    Suba fotografias, mostre o mundo através das suas lentes!
                </h1>
            </section>
        </>
    )
}