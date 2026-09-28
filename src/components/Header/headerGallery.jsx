import Button from "./buttonHeader.jsx"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import AllPictures from "../Pictures/allPictures.jsx"
import ImportPicture from "../FirstSection/importPicture.jsx"

export default function headerGallery() {
    const firstButton = {
        text: "Adicionar fotos"
    }
    const secondButton = {
        text: "Ver fotos"
    }

    return (
        <>
            <BrowserRouter>
                <header className="border w-full h-24 flex items-center justify-center gap-2">
                    <Link to="/"><Button {...firstButton} /></Link>
                    
                    <Link to="/pictures"><Button {...secondButton}/></Link>
                </header>

                <Routes>
                    <Route path="/" element={<ImportPicture/>} />
                    <Route path="/pictures" element={<AllPictures/>} />
                </Routes>
            </BrowserRouter>
            
        </>
    )
}