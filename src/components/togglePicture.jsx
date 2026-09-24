import {Plus} from "lucide-react"

export default function togglePicture() {
    return    (
        <>
            <div className="group border border-gray-400 w-xl h-2/3 flex items-center justify-center transition duration-300 cursor-pointer hover:border-gray-600">
                <Plus
                    size={96}
                    className="text-gray-400 transition duration-300 group-hover:text-gray-600"
                />
            </div>
        </>
    )
}