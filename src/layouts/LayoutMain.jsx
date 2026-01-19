import { Outlet } from "react-router-dom"
import { Home } from "../pages/Home"

export const LayoutMain = () => {
    return (
        <>
            <div className='flex h-screen bg-amber-300 text-black'>
                <header>
                    <Home/>
                </header>

                <main>
                    <Outlet />
                </main>
            </div>
        </>
    )
}