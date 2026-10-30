import type { IconsLink, ObjectProject } from "../types/types";

export const NetOwlStack: IconsLink[] = [
    {name:"Python", link:"/python.png"},
    {name:"Django", link:"/django.svg"},
    {name:"Typescrtipt", link:"/Typescript.svg"},
    {name:"HTML", link:"/html.png"},
    {name:"CSS", link:"/css.png"},
    {name:"React", link:"/react.png"},
    {name:"Postgres", link:"/postgres.png"},
    {name:"Git", link:"/git.png"},
    {name:"Docker", link:"/Docker.png"},
]

export const Projectlist: ObjectProject[] = [
    {
        name: "FutOwl",
        description: "Gestor de torneos de fútbol para que las autoridades controlen los partidos y sigan reportes y resultados en vivo.",
        stack: [
            {name:"Python", link:"/python.png"},
            {name:"Django", link:"/django.svg"},
            {name:"Typescrtipt", link:"/Typescript.svg"},
            {name:"React", link:"/react.png"},
            {name:"Git", link:"/git.png"},
            {name:"Vercel", link:"/vercel.png"},
            {name:"Supabase", link:"/supabase.svg"},
        ],
        repo: "https://github.com/ALFD03/FutOwl.git",
        status: "En Desarrollo"
    },
    {
        name: "OilOwl",
        description: "Aplicacion integral para la gestion de venta de combustible anclada a la tasa BCV y personalizacion completa de las caracteristicas de las estaciones de servicio",
        stack: [
            {name:"Python", link:"/python.png"},
            {name:"Django", link:"/django.svg"},
            {name:"Typescrtipt", link:"/Typescript.svg"},
            {name:"React", link:"/react.png"},
            {name:"Git", link:"/git.png"},
            {name:"Vercel", link:"/vercel.png"},
            {name:"Supabase", link:"/supabase.svg"},
        ],
        repo: "https://github.com/ALFD03/OilOwl.git",
        status: "En Desarrollo"
    },
    {
        name: "OssApp",
        description: "Dos apps móviles para escuelas de karate: asistencia con QR, pagos por comprobante, cambios de cinturón y eventos del dojo.",
        stack: [
            {name:"React", link:"/react.png"},
            {name:"Typescrtipt", link:"/Typescript.svg"},
            {name:"Postgres", link:"/postgres.png"},
            {name:"Supabase", link:"/supabase.svg"},
        ],
        repo: "https://github.com/ALFD03/OssApp.git",
        status: "En Desarrollo"
    },
    {
        name: "MKQueue",
        description: "Sistema en Python que automatiza los cálculos de ancho de banda que antes se hacían a mano en el día a día de una red.",
        stack: [
            {name:"Python", link:"/python.png"},
            {name:"Flet", link:"/flet.png"},
            {name:"Postgres", link:"/postgres.png"},
            {name:"Git", link:"/git.png"},
        ],
        repo: "https://github.com/ALFD03/MKQueue.git",
        status: "Finalizado"
    }
]