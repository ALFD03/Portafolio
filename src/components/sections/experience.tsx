import React, { Component } from 'react'
import ListJobs from '../../data/experiencie'
import Icon from '../icons';

export default class Experience extends Component {
  render() {
    return (
      <section id="experiencia" className="px-70 bg-superficie py-40">
            <h1 className="text-6xl">Experiencia</h1>
            <p className="text-texto-sec my-10">Empeze monitoreando, diseñando redes y automatizando tareas con python. Hoy programo y analizo datos a tiempo completo</p>
            <div>
                {ListJobs.map((j)=>(
                  j.status ? (
                    <div className="flex gap-10 border-1 border-borde bg-superficie-alta rounded-2xl p-15 shadow-2xl shadow-fondo">
                      <div className="flex flex-col gap-5">
                        <p className="px-4 py-2 bg-ojo rounded-4xl text-black w-fit">Activo</p>
                        <p className="text-texto-sec text-lg">{j.dates}</p>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl mb-2">{j.job}</h2>
                        <h4 className="text-xl text-texto mb-5">{j.enterprise}</h4>
                        <ul className="flex flex-col gap-2 text-texto-sec mb-5">
                          {j.description.map((d)=>(
                            <li>- {d}</li>
                          ))}
                        </ul>
                        {j.hits && (
                          <div>
                            <h4 className="text-texto text-xl mb-2">logros:</h4>
                            <ul className="flex flex-col gap-2 text-texto-sec mb-5">
                              {j.hits.map((h)=>(
                                <li>{h}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <h4 className="text-texto text-xl mb-2">Skills:</h4>
                        <div className="flex gap-4">
                          {j.skills?.map((s)=>(
                            <Icon data={s.link} classname="h-8"/>
                          ))}
                        </div>
                      </div>
                    </div>
                  ):(
                    <div className="flex gap-10 border-b-1 border-borde rounded-2xl p-15">
                      <div className="flex flex-col gap-15">
                        <p className="text-texto-sec text-lg">{j.dates}</p>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl mb-2">{j.job}</h2>
                        <h4 className="text-xl text-texto mb-5">{j.enterprise}</h4>
                        <ul className="flex flex-col gap-2 text-texto-sec mb-5">
                          {j.description.map((d)=>(
                            <li>- {d}</li>
                          ))}
                        </ul>
                        {j.hits && (
                          <div>
                            <h4 className="text-texto text-xl mb-2">logros:</h4>
                            <ul className="flex flex-col gap-2 text-texto-sec mb-5">
                              {j.hits.map((h)=>(
                                <li>{h}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {j.skills && (
                          <div>
                            <h4 className="text-texto text-xl mb-2">Skills:</h4>
                            <div className="flex gap-4">
                              {j.skills?.map((s)=>(
                                <Icon data={s.link} classname="h-8"/>
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
