import { useSearchParams } from 'react-router-dom'
import Mirando from '../assets/mirando.jpg'
import { ButtonRetroceder } from './ui/buttons/buttonRetroceder'

export const ImagenesPage = () => {
    const [searchParams] = useSearchParams()
    const src = searchParams.get("src")
    return (
        <>
            <div className="bg-gray-200 h-full flex flex-col justify-center py-10">
                <ButtonRetroceder/>
                <h1 className="font-bold text-4xl space-y-10 text-center">Imagenes con REACT</h1>
                <section className='flex flex-col items-center'>
                    <h2 className="text-center">Imagenes Locales</h2>
                    <img src={Mirando} alt="" width={400}/>
                </section>

                <section className='flex flex-col items-center'>
                    <h2 className="text-center">Imagenes con SearchParams</h2>
                    <img src={src} alt="" width={400}/>
                </section>

                <section className='flex flex-col items-center'>
                    <h2 className="text-center">Imagenes desde una URL</h2>
                    <img src="https://img.anmosugoi.com/file/media-sugoi/2021/11/Kumo-desu-ga-Nani-Ka-vol-16.jpg" alt="" width={400}/>
                </section>

                <section className='flex flex-col items-center space-y-2'>
                    <h2>Imagem de Fondo</h2>
                    <div className='bg-cover h-60 bg-center flex w-100 justify-center items-center'
                    style={{backgroundImage:"url('https://i.imgur.com/BJsAG6e.jpg')"}}>
                        <span className='bg-amber-100/80 py-4 px-4 font-semibold'>Imagen de Fondo</span>
                    </div>
                    
                </section>
            </div>
        </>
    )
}