import { InlineIcon } from '@iconify/react/dist/iconify.js'
import { Link } from 'react-router-dom'
export const Home = () => {
    const UrlImage = "https://images.unsplash.com/photo-1533450718592-29d45635f0a9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww"

    const porPractica = [
        { tema: 'useEffect', to:'/react' },
        { tema: 'Imagenes', to:`/imagenes?src=${UrlImage}`},  // QueryParams
        { tema: 'Rutas Anidadas', to:'/rutasAnidadas'},
        { tema: 'Ejemplos Search', to:'/search'},
        { tema: 'Apis', to:'/apis'}
    ]
    return (
        <>
            <div className="bg-gray-300 h-screen w-full justify-center flex flex-col">
                <div className=" flex flex-col items-center bg-[#413efa] text-white w-11/12 m-auto max-w-3xl min-w-2xl gap-2 p-2">
                    <h1 className="text-5xl font-black">Practica React 19</h1>
                    {
                        porPractica.map((items, index) => (
                            <Link to={items.to} key={index} className="group flex justify-between w-full p-4 bg-[#4e4e4e] rounded-4xl border-4 border-black shadow-2xs hover:border-[#ff5c5c] cursor-pointer">
                                <p>{items.tema} </p>
                                <InlineIcon className='group-hover:text-[#ff5c5c]'  icon="weui:arrow-outlined" width="12" height="24" />
                            </Link>
                        ))
                    }
                </div>

            </div>
        </>
    )
}