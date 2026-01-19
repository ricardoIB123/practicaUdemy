import { Contador } from "./contador"
import { ButtonRetroceder } from "./ui/buttons/buttonRetroceder"
export const React = () => {
    const porAprender = [
        { tema: 'UseEffect' },
        { tema: 'Imagenes' }]

    return (
        <>
            <ButtonRetroceder/>
            <div className="flex flex-col h-screen justify-center items-center">

                {
                    porAprender.map((items, index) => (
                        <div key={index} className="font-black text-4xl mb-3">
                            <p> {items.tema} </p>
                        </div>
                    ))
                }
                <Contador />

            </div>
        </>
    )
}