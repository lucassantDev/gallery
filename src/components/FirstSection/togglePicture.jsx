import {ImagePlus} from "lucide-react"

export default function togglePicture() {
    return    (
        <>
            <div className="border border-gray-200 w-xl h-2/3 flex flex-col gap-6 items-center justify-center transition duration-300  hover:shadow-md">
                    <label>
                        <ImagePlus
                            size={44}
                            className="text-gray-400 transition duration-300 cursor-pointer hover:text-gray-600"
                        
                    />
                    <input type="file" className="hidden" />
                    </label>
                    <p className="font-semibold text-gray-400 secondary-font">Escolha seu arquivo</p>                    
            </div>
        </>
    )
}