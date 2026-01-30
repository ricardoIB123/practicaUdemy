import { useEffect, useState } from "react"
import { ButtonRetroceder } from "./ui/buttons/buttonRetroceder"
import axios from "axios"

export const ApiPage = () => {
    const [apis, setApis] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {

        axios.get("https://pokeapi.co/api/v2/pokemon?limit=20")
            .then((res) => {
                setApis(res.data.results)
                setCargando(false)
                console.log("data", res)
            }).catch((error) => console.error("Error en la api", error)); {/* A diferencia de fetch, que tienes que convertir la respuesta en json, axios lo hace automaticamente y tiene una funcion para cargar */ }

            {/* fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
            .then((res) => res.json())
            .then((data) => {
                setApis(data.results);
                console.log("data", data.results)
            }).catch((error) => console.error("Error en el codigo", error));*/}
        
    }, [])
    return (
        <>
            <ButtonRetroceder />
            <div className='h-screen bg-amber-300 text-black'>
                {
                    cargando ? (
                        <span>cargando...</span>
                    ) : (
                        <section className="flex flex-col pt-20 text-2xl">
                            {
                                apis.map((item, index) => (
                                    <span key={index}> {item.name} </span>
                                ))
                            }
                        </section>
                    )
                }


            </div>
        </>
    )
}