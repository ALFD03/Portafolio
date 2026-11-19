import { useState } from 'react'
import type { NavLink } from '../../types/types'

const pages:NavLink[] = [
    {name: 'Inicio', link :'#inicio'},
    {name: 'Experiencia', link :'#experiencia'},
    {name: 'Proyectos', link: '#proyectos'},
    {name: 'Sobre Mi', link :'#about_me'},
    {name: 'Contacto', link :'#contact'},
]

function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="w-full border-b-1 border-borde sticky top-0 z-50 px-5 md:px-10 py-4 backdrop-blur-md bg-fondo/70">
            <div className="flex justify-between items-center text-xl">
                <div className="flex gap-3 text-lg md:text-2xl items-center">
                    <img src="/logo.svg" alt="" className='h-10 md:h-15'/>
                    <h1>Ing. Angel Flores</h1>
                </div>

                {/* Navegacion de escritorio */}
                <nav className="hidden lg:flex gap-8 text-texto-sec">
                    {pages.map((page) => (
                        <a key={page.link} href={page.link} className='hover:text-texto'>{page.name}</a>
                    ))}
                </nav>

                {/* Boton hamburguesa (solo movil / tablet) */}
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="lg:hidden p-2 text-texto cursor-pointer"
                    aria-label={open ? 'Cerrar menu' : 'Abrir menu'}
                    aria-expanded={open}
                >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        {open ? (
                            <path d="M6 6l12 12M18 6L6 18" />
                        ) : (
                            <path d="M4 7h16M4 12h16M4 17h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Menu desplegable movil */}
            {open && (
                <nav className="lg:hidden flex flex-col gap-4 pt-5 pb-2 text-lg text-texto-sec">
                    {pages.map((page) => (
                        <a key={page.link} href={page.link} onClick={() => setOpen(false)} className='hover:text-texto'>{page.name}</a>
                    ))}
                </nav>
            )}
        </header>
    )
}

export default Header
