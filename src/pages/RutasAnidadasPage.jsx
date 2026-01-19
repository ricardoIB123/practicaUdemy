import { NavLink, Outlet } from "react-router-dom"
import { ButtonRetroceder } from "./ui/buttons/buttonRetroceder"

export const RutasAnidadasPage = () => {
    const id = 20
    return (
        <>
            <div className='p-6 max-w-2xl mx-auto space-y-6'>
                <ButtonRetroceder/>
                <h2 className="text-3xl font-bold text-center">
                    Panel de Usuario
                </h2>
                <nav className="flex gap-4 justify-center">
                    <NavLink className={({ isActive }) =>
                        isActive ? "px-4 py-2 rounded-lg bg-black text-white font-semibold shadow" : "px-4 py-2 rounded-lg bg-gray-100"
                    } to={`perfil/${id}`}>
                        Perfil
                    </NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? "px-4 py-2 rounded-lg bg-black text-white font-semibold shadow" : "px-4 py-2 rounded-lg bg-gray-100"}
                        to="configuracion">
                        Configuracion
                    </NavLink>
                </nav>
                <section>
                    <Outlet />
                </section>
            </div>
        </>
    )
}