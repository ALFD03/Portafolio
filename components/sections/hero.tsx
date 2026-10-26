import StackIcons from '../stackicons'

function Hero() {
    return (
        <section id="inicio" className="px-70 flex-1 grid grid-cols-2 gap-16 items-center my-10">
            <div className="flex flex-col h-full justify-center gap-8">
                <h4 className="text-lg text-texto-sec">Ingeniero de Sistemas · Venezuela · Remoto</h4>
                <h1 className="text-7xl">Construyo tu Software de Punta a Punta</h1>
                <p className="text-texto-sec">Desarrollo backends y APIs con Python y Django, interfaces con React y TypeScript, y automatizo el análisis de datos para que los números lleguen solos a quien decide. Vengo de redes e infraestructura construyendo diseños acorde a las necesidades de la empresa</p>
                <span className="text-sm text-texto-sec">Stack de Trabajo</span>
                <StackIcons/>
            </div>
            <div>
                <div className="shadow-2xl shadow-superficie-alta">
                    <div className="border-1 border-borde rounded-t-2xl p-4 bg-fondo-alt flex gap-2 align-middle items-center text-xs">
                        <span className="bg-superficie-alta rounded-4xl p-3" > </span>
                        <span className="bg-superficie-alta rounded-4xl p-3"> </span>
                        <span className="bg-superficie-alta rounded-4xl p-3"> </span>
                        <h4 className='py-1 px-5 bg-fondo rounded-2xl w-fit' >angel.ts</h4>
                    </div>   
                    <div className="border-1 border-borde rounded-b-2xl p-4 bg-superficie">
                        <div className="mb-3"><span className="text-gray-700">1.</span><span className="ml-15 text-texto-sec">// Quien soy en type script</span></div>
                        <div className="mb-3"><span className="text-gray-700">2.</span><span className="ml-15 text-blue-500">const</span><span> angel</span><span> : </span><span className="text-amber-300">Desarrollador</span><span> {"{"}</span></div>
                        <div className="mb-3"><span className="text-gray-700">3.</span><span className="ml-15">rol : </span><span className="text-green-300">"Full Stack + Analisis de Datos"</span><span>;</span></div>
                        <div className="mb-3"><span className="text-gray-700">4.</span><span className="ml-15">Backend : {"["}</span><span className="text-green-300">"Python, Django"</span><span>{"]"};</span></div>
                        <div className="mb-3"><span className="text-gray-700">5.</span><span className="ml-15">Frontend : {"["}</span><span className="text-green-300">"React, TypeScript"</span><span>{"]"};</span></div>
                        <div className="mb-3"><span className="text-gray-700">6.</span><span className="ml-15">Base de Datps : {"["}</span><span className="text-green-300">"SQL, Postgres"</span><span>{"]"};</span></div>
                        <div className="mb-3"><span className="text-gray-700">7.</span><span className="ml-15">Infraestructura : {"["}</span><span className="text-green-300">"Linux, Redes"</span><span>{"]"};</span></div>
                        <div className="mb-3"><span className="text-gray-700">8.</span><span className="ml-15">Aprendiendo : </span><span className="text-blue-500">true</span><span>;</span></div>
                        <div className="mb-3"><span className="text-gray-700">9.</span><span className="ml-15">{"}"};</span></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero