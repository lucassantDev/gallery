import Toggle from "./togglePicture.jsx"

export default function importPicture() {
    return (
        <>
            <section className="w-full border h-screen flex items-center justify-evenly">
                <Toggle />
                <h1 className="text-6xl font-semibold w-xl">
                    Suba fotografias, mostre o mundo através das suas lentes!
                </h1>
            </section>
        </>
    )
}