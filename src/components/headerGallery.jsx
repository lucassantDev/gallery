import Button from "./buttonHeader.jsx"

export default function headerGallery() {
    const firstButton = {
        text: "Adicionar fotos"
    }
    const secondButton = {
        text: "Ver fotos"
    }

    return (
        <>
            <header className="border w-full h-24 flex items-center justify-center gap-2">
                <Button {...firstButton} />
                <Button {...secondButton}/>
            </header>
        </>
    )
}