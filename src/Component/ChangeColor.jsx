import { useState, useEffect } from "react"

export default function ChangeColor() {
    const [couleur, setCouleur] = useState("#000000")
    useEffect(()=>{console.log("change");}, [couleur])
    function gangeColor() {
        let output = "#";
        const alphabet = "ABCDEF0123456789"
        while (output.length < 7) {
            let index = Math.floor(Math.random()*alphabet.length)
            output += alphabet[index]
        }
        console.log(output);
        setCouleur(output)
    }

    return(
        <div style={{backgroundColor: couleur}}>
            <input value={couleur} name="" onChange={(e)=>setCouleur(e.target.value)} onClick={()=>gangeColor()}/>
        </div>
    )
}