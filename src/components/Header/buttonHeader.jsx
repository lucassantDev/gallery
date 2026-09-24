export default function buttonHeader({text}) {
    return (
        <>
            <button className="border px-2 py-2 rounded-md cursor-pointer">
                <p className="text-xl">{text}</p>
            </button>
        </>
    )
}