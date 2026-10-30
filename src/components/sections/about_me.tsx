function About_me() {
    return (
        <section id="about_me" className="px-70 py-40 bg-superficie">
            <div className="grid grid-cols-3">
                <div className="grid">
                    <img src="/foto.png" alt="" className=""/>
                </div>
                <div className="col-span-2 flex flex-col gap-5 pl-5">
                    <h2 className="text-5xl">Angel Luis Flores Diaz</h2>
                    <h3 className="text-3xl text-texto-sec">Ingeniero de Sistemas</h3>
                    <p className="text-lg text-justify">
                        Soy Ingeniero de Sistemas con experiencia en analisis de datos, programacion, telecomunicaciones, gestión de redes y supervisión de equipos técnicos. He desarrrollado soluciones tecnologicas de todo tipo hechas a medida desde programas, sistemas de informacion hasta proyectos de diseño e implementación de redes de fibra óptica y microondas, logrando optimizar la calidad del servicio, garantizando la continuidad operativa en entornos exigentes y la integridad de los datos.
                    </p>
                    <p className="text-lg text-texto-sec text-justify">
                        Me especializo en desarrollado full-stack pero orientado mas al backend entendiendo de manera directa los requerimientos para construir modelos de informacion fuertes y completos, se configurar equipos activos de redes, Entiendo los porcesos generales y con eso busco adaptar cada proceso a medida para que la solucion sea personalizable, como analista de datos e logrado definir modelos de datos complejos, garantizar la credebilidad de la informacion y de ser un puente entre departamentos para que el desarrolo sea completo y ajustado a la realidad. Cuento con certificaciones CCNA y PCAP, que respaldan mis competencias en redes y programación.
                        Más allá de la parte técnica, me defino como una persona proactiva, autodidacta y orientada a resultados, con capacidad de liderazgo y un enfoque en la mejora continua. Mi objetivo es aportar soluciones innovadoras y eficientes que generen valor tanto a nivel técnico como estratégico dentro de las organizaciones.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About_me;