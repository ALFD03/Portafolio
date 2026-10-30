import React, { Component } from 'react'
import StackIcons from '../stackicons'
import {NetOwlStack, Projectlist} from '../../data/projects'
import ProjectStack from '../projectstack';

export default class Project extends Component {
  render() {
    return (
      <section id="proyectos" className="px-70 bg-fondo py-40">
          <h1 className="text-6xl">Proyectos</h1>
          <p className="text-texto-sec my-10 w-3/4 text-2xl text-justify">Cada programo que hago busca resolver un problema real que vi de cerca, ya sea en mi trabajo, deporte o universidad, siempre buscando la excelencia</p>
          <div className="border-1 rounded-2xl border-borde bg-superficie-alta p-10 grid grid-cols-2">
            <div className="grid gap-5">
              <div className="flex gap-4 items-center">
                <h3 className="text-4xl">Netowl</h3>
                <span className="bg-ojo px-3 py-1 rounded-2xl text-black just">En produccion</span>              
              </div>
              <p className="text-xl text-justify">Procesa las exportaciones de Odoo v17 de Netcom Plus y genera los gráficos con los que la gerencia sigue suscripciones, CRM y soporte.</p>
              <h4 className="text-lg">Stack:</h4>
              <StackIcons list={NetOwlStack} iconsize="h-10" spacing="gap-2"/>
              <a href="https://github.com/ALFD03/NetOwl-Django.git" className="flex gap-3 items-center mt-5" target="_blank">
                <img src="/github.svg" alt="" />
                Ver el Repositorio
              </a>
            </div>
            <div className="grid p-8 justify-center items-center">
              <img src="/Netowl.png" alt="" className="border-3 border-borde rounded-4xl shadow-2xl shadow-fondo" />
            </div>
          </div>
          <ProjectStack projects={Projectlist}/>
      </section>
    )
  }
}
