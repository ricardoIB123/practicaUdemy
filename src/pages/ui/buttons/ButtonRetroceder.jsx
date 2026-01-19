import { useNavigate } from "react-router-dom"
import { Icon } from "@iconify/react"


export const ButtonRetroceder = () => {

        const navegacion = useNavigate()

    return (
        <>
            <div onClick={() => navegacion("/")} className=" bg-amber-200 top-3 left-4 rounded-4xl p-2 hover:bg-amber-300 cursor-pointer fixed transition-all ease-in">
                <Icon icon="lets-icons:arrow-left" width="24" height="24" />
            </div>
        </>
    )
}