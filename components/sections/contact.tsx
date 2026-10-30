function Contact(){
    const donwload = () => {
        const link = document.createElement('a')
        link.href = '/documents/cv_angel_flores.pdf'
        link.download = 'cv_angel_flores.pdf'

        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }
    return(
        <section id="contact" className="px-70 pt-40 pb-10 bg-fondo flex flex-col">
            <h1 className="text-4xl">Necesitas una solucion? Hablemos!</h1>
            <h2 className="text-xl text-texto-sec">Busco roles remotos como desarrollador o analista de datos</h2>
            <div className="flex gap-5 mt-15">
                <a href="https://wa.me/584148851078" target="_blanck" className="py-4 px-3 bg-ojo text-black rounded-4xl flex gap-2 items-center text-lg"><img src="/whatsapp.png" alt="" className="h-8"/>Escribeme</a>
                <a href="https://www.linkedin.com/in/angel-luis-flores-diaz-104957259/" target="_blanck" className="py-4 px-3 bg-superficie hover:bg-superficie-alta rounded-4xl flex gap-2 items-center text-lg"><img src="/linkedin.png" alt="" className="h-8"/>linkedin</a>
                <a href="https://github.com/ALFD03" target="_blanck" className="py-4 px-3 bg-superficie hover:bg-superficie-alta rounded-4xl flex gap-2 items-center text-lg"><img src="/github.svg" alt="" className="h-8"/>Github</a>
                <button onClick={donwload} type="button" className="cursor-pointer hover:bg-superficie-alta border-0 py-4 px-3 rounded-4xl flex gap-2 text-senal items-center text-lg"> Descargar CV</button>
            </div>
            <footer className="mt-30 pt-10 px-5 border-t-1 border-borde flex justify-between rounded">
                <p className="text-texto-sec">Ing. Angel Flores, 2026</p>
                <p className="text-texto-sec"> Venezuela, Carabobo</p>
            </footer>
        </section>
    )
}

export default Contact;