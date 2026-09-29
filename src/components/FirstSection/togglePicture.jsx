import { useEffect, useRef, useState } from "react"
import { ImagePlus, X } from "lucide-react"

export default function TogglePicture() {
    const [file, setFile] = useState(null)
    const [preview, setPreview] = useState(null)
    const inputRef = useRef(null)

    // cria e limpa a URL do preview sempre que o arquivo mudar
    useEffect(() => {
        if (!file) {
            setPreview(null)
            return
        }

        const url = URL.createObjectURL(file)
        setPreview(url)

        return () => URL.revokeObjectURL(url)
    }, [file])

    function handleChange(e) {
        setFile(e.target.files[0] ?? null)
    }

    function handleRemove() {
        setFile(null)
        if (inputRef.current) inputRef.current.value = ""
    }

    return (
        <div className="border border-gray-200 w-xl h-2/3 flex flex-col gap-6 items-center justify-center transition duration-300 hover:shadow-md p-4">
            {preview ? (
                <img
                    src={preview}
                    alt="Pré-visualização da imagem escolhida"
                    className="max-h-64 max-w-full object-contain rounded"
                />
            ) : (
                <label className="flex flex-col items-center justify-center cursor-pointer">
                    <ImagePlus
                        size={44}
                        className="text-gray-400 transition duration-300 hover:text-gray-600"
                    />
                    <input
                        ref={inputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleChange}
                    />
                </label>
            )}

            {file ? (
                <div className="flex items-center gap-2">
                    <p className="font-semibold text-gray-600 secondary-font max-w-xs truncate">
                        {file.name}
                    </p>
                    <button
                        type="button"
                        onClick={handleRemove}
                        aria-label="Remover arquivo"
                        className="text-gray-400 transition duration-300 hover:text-red-500 cursor-pointer"
                    >
                        <X size={18} />
                    </button>
                </div>
            ) : (
                <p className="font-semibold text-gray-400 secondary-font">
                    Escolha seu arquivo
                </p>
            )}
        </div>
    )
}