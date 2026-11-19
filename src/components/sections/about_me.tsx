function About_me() {
    return (
        <section id="about_me" className="px-5 md:px-12 lg:px-20 xl:px-40 2xl:px-70 py-20 lg:py-40 bg-superficie">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0">
                <div className="grid justify-center lg:justify-stretch">
                    <img src="/foto.png" alt="Angel Flores" className="w-64 md:w-80 lg:w-full rounded-2xl"/>
                </div>
                <div className="lg:col-span-2 flex flex-col gap-5 lg:pl-5">
                    <h2 className="text-3xl md:text-5xl">Angel Luis Flores Diaz</h2>
                    <h3 className="text-xl md:text-3xl text-texto-sec">Ingeniero de Sistemas</h3>
                    <p className="md:text-lg md:text-justify">
                        Soy Ingeniero de Sistemas con experiencia en analisis de datos, programacion, telecomunicaciones, gestión de redes y supervisión de equipos técnicos. He desarrrollado soluciones tecnologicas de todo tipo hechas a medida desde programas, sistemas de informacion hasta proyectos de diseño e implementación de redes de fibra óptica y microondas, logrando optimizar la calidad del servicio, garantizando la continuidad operativa en entornos exigentes y la integridad de los datos.
                    </p>
                    <p className="md:text-lg text-texto-sec md:text-justify">
                        Me especializo en desarrollado full-stack pero orientado mas al backend entendiendo de manera directa los requerimientos para construir modelos de informacion fuertes y completos, se configurar equipos activos de redes, Entiendo los porcesos generales y con eso busco adaptar cada proceso a medida para que la solucion sea personalizable, como analista de datos e logrado definir modelos de datos complejos, garantizar la credebilidad de la informacion y de ser un puente entre departamentos para que el desarrolo sea completo y ajustado a la realidad. Cuento con certificaciones CCNA y PCAP, que respaldan mis competencias en redes y programación.
                        Más allá de la parte técnica, me defino como una persona proactiva, autodidacta y orientada a resultados, con capacidad de liderazgo y un enfoque en la mejora continua. Mi objetivo es aportar soluciones innovadoras y eficientes que generen valor tanto a nivel técnico como estratégico dentro de las organizaciones.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About_me;