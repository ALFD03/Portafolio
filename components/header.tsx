import type { NavLink } from '../types/types'

const pages:NavLink[] = [
    {name: 'Inicio', link :'#inicio'},
    {name: 'Proyectos', link: '#proyectos'},
    {name: 'Contacto', link :'#contacto'},
]

export function Header() {
    return (
        <header className="flex w-full justify-between items-center border-b-1 pb-5 text-xl">
            <div className="flex gap-3 text-2xl items-center justify-center">
                <img src="/logo.svg" alt="" className='h-15'/>
                <h1>Ing.Angel Flores</h1>
            </div>
            <nav className="flex justify-between gap-3">
                {pages.map((page) => (
                    <a href={page.link}>{page.name}</a>
                )
                )}
            </nav>
        </header>
    )
    
}