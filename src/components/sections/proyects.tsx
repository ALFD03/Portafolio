import { Component } from 'react'
import StackIcons from '../stackicons'
import {NetOwlStack, Projectlist} from '../../data/projects'
import ProjectStack from '../projectstack';

export default class Project extends Component {
  render() {
    return (
      <section id="proyectos" className="px-5 md:px-12 lg:px-20 xl:px-40 2xl:px-70 bg-fondo py-20 lg:py-40">
          <h1 className="text-4xl md:text-6xl">Proyectos</h1>
          <p className="text-texto-sec my-10 lg:w-3/4 text-lg md:text-2xl md:text-justify">Cada programo que hago busca resolver un problema real que vi de cerca, ya sea en mi trabajo, deporte o universidad, siempre buscando la excelencia</p>
          <div className="border-1 rounded-2xl border-borde bg-superficie-alta p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="grid gap-5">
              <div className="flex flex-wrap gap-4 items-center">
                <h3 className="text-3xl md:text-4xl">Netowl</h3>
                <span className="bg-ojo px-3 py-1 rounded-2xl text-black just">En produccion</span>              
              </div>
              <p className="text-lg md:text-xl md:text-justify">Procesa las exportaciones de Odoo v17 de Netcom Plus y genera los gráficos con los que la gerencia sigue suscripciones, CRM y soporte.</p>
              <h4 className="text-lg">Stack:</h4>
              <StackIcons list={NetOwlStack} iconsize="h-8 md:h-10" spacing="flex-wrap gap-3"/>
              <a href="https://github.com/ALFD03/NetOwl-Django.git" className="flex gap-3 items-center mt-5" target="_blank">
                <img src="/github.svg" alt="" />
                Ver el Repositorio
              </a>
            </div>
            <div className="grid lg:p-8 justify-center items-center">
              <img src="/Netowl.png" alt="" className="border-3 border-borde rounded-4xl shadow-2xl shadow-fondo" />
            </div>
          </div>
          <ProjectStack projects={Projectlist}/>
      </section>
    )
  }
}
