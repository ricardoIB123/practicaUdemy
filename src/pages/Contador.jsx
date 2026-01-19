import { useState, useEffect } from "react"
export const Contador = () => {
    const [contador, setContador] = useState(0)

    useEffect(() => {
        const intervalo = setInterval(() => {
            setContador((prev) => prev + 1)
        }, 1000)
        return ()=> clearInterval(intervalo)
    }, [])
    return (
        <>
            <div className="flex h-40 w-40 rounded-full border-8 border-black justify-center items-center shadow-lg ">
                <span className="text-4xl font-semibold">{contador}</span>
            </div>
        </>
    )
}