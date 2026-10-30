import type { NavLink } from '../../types/types'

const pages:NavLink[] = [
    {name: 'Inicio', link :'#inicio'},
    {name: 'Experiencia', link :'#experiencia'},
    {name: 'Proyectos', link: '#proyectos'},
    {name: 'Sobre Mi', link :'#about_me'},
    {name: 'Contacto', link :'#contact'},
]

function Header() {
    return (
        <header className="flex w-full justify-between items-center border-b-1 border-borde pb-5 text-xl sticky top-0 px-10 py-4 backdrop-blur-md">
            <div className="flex gap-3 text-2xl items-center justify-center">
                <img src="/logo.svg" alt="" className='h-15'/>
                <h1>Ing. Angel Flores</h1>
            </div>
            <nav className="flex justify-between gap-8 text-texto-sec ">
                {pages.map((page) => (
                    <a href={page.link}className='hover:text-texto' >{page.name}</a>
                )
                )}
            </nav>
        </header>
    )
    
}

export default Header