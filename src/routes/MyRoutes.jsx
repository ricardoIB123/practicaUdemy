import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom"
import { Home } from '../pages/Home'
import { React } from '../pages/React'
import { ImagenesPage } from "../pages/ImagenesPage"
import { RutasAnidadasPage } from "../pages/RutasAnidadasPage"
import { PerfilPage } from "../pages/PerfilPage"
import { ConfiguracionPage } from "../pages/ConfiguracionPage"
import { SearchParamsPage } from "../pages/SearchParamsPage"
import { LayoutMain } from "../layouts/LayoutMain"
export const MyRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route index element={<Home />} />
                    <Route path="/react" element={<React />} />
                    <Route path="/imagenes" element={<ImagenesPage />} />
                    <Route path="/search" element={<SearchParamsPage />} />
                    <Route path="/rutasAnidadas" element={<RutasAnidadasPage />}>
                        <Route index element={<Navigate to={"perfil/10"} replace />} />
                        <Route path="perfil/:id" element={<PerfilPage />} />
                        <Route path="configuracion" element={<ConfiguracionPage />} />
                    </Route>

                </Routes>
                {/* ESto es layout permanente 
                <Routes>
                    <Route path="/" element={<LayoutMain />}>
                        <Route index element={<Home />} />
                        <Route path="/react" element={<React />} />
                        <Route path="/imagenes" element={<ImagenesPage />} />
                        <Route path="/search" element={<SearchParamsPage />} />
                        <Route path="/rutasAnidadas" element={<RutasAnidadasPage />}>
                            <Route index element={<Navigate to={"perfil/10"} replace />} />
                            <Route path="perfil/:id" element={<PerfilPage />} />
                            <Route path="configuracion" element={<ConfiguracionPage />} />
                        </Route>
                    </Route>
                </Routes>*/}
            </BrowserRouter>
        </>
    )
}