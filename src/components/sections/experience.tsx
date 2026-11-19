import { Component } from 'react'
import ListJobs from '../../data/experiencie'
import Icon from '../icons';

export default class Experience extends Component {
  render() {
    return (
      <section id="experiencia" className="px-5 md:px-12 lg:px-20 xl:px-40 2xl:px-70 bg-superficie py-20 lg:py-40">
            <h1 className="text-4xl md:text-6xl">Experiencia</h1>
            <p className="text-texto-sec my-10">Empeze monitoreando, diseñando redes y automatizando tareas con python. Hoy programo y analizo datos a tiempo completo</p>
            <div>
                {ListJobs.map((j, idx)=>(
                  j.status ? (
                    <div key={idx} className="flex flex-col md:flex-row gap-5 md:gap-10 border-1 border-borde bg-superficie-alta rounded-2xl p-6 md:p-10 xl:p-15 shadow-2xl shadow-fondo">
                      <div className="flex flex-row md:flex-col items-center md:items-start gap-5 md:shrink-0">
                        <p className="px-4 py-2 bg-ojo rounded-4xl text-black w-fit">Activo</p>
                        <p className="text-texto-sec md:text-lg">{j.dates}</p>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl md:text-2xl mb-2">{j.job}</h2>
                        <h4 className="text-lg md:text-xl text-texto mb-5">{j.enterprise}</h4>
                        <ul className="flex flex-col gap-2 text-texto-sec mb-5">
                          {j.description.map((d, i)=>(
                            <li key={i}>- {d}</li>
                          ))}
                        </ul>
                        {j.hits && (
                          <div>
                            <h4 className="text-texto text-xl mb-2">logros:</h4>
                            <ul className="flex flex-col gap-2 text-texto-sec mb-5">
                              {j.hits.map((h, i)=>(
                                <li key={i}>{h}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <h4 className="text-texto text-xl mb-2">Skills:</h4>
                        <div className="flex flex-wrap gap-4">
                          {j.skills?.map((s)=>(
                            <Icon key={s.name} data={s.link} classname="h-8"/>
                          ))}
                        </div>
                      </div>
                    </div>
                  ):(
                    <div key={idx} className="flex flex-col md:flex-row gap-3 md:gap-10 border-b-1 border-borde rounded-2xl p-6 md:p-10 xl:p-15">
                      <div className="flex flex-col gap-15 md:shrink-0">
                        <p className="text-texto-sec md:text-lg">{j.dates}</p>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl md:text-2xl mb-2">{j.job}</h2>
                        <h4 className="text-lg md:text-xl text-texto mb-5">{j.enterprise}</h4>
                        <ul className="flex flex-col gap-2 text-texto-sec mb-5">
                          {j.description.map((d, i)=>(
                            <li key={i}>- {d}</li>
                          ))}
                        </ul>
                        {j.hits && (
                          <div>
                            <h4 className="text-texto text-xl mb-2">logros:</h4>
                            <ul className="flex flex-col gap-2 text-texto-sec mb-5">
                              {j.hits.map((h, i)=>(
                                <li key={i}>{h}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {j.skills && (
                          <div>
                            <h4 className="text-texto text-xl mb-2">Skills:</h4>
                            <div className="flex flex-wrap gap-4">
                              {j.skills?.map((s)=>(
                                <Icon key={s.name} data={s.link} classname="h-8"/>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                    </div>
                  )
                ))}
            </div>
      </section>
    )
  }
}
