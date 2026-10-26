import type {ObjectExperience} from '../types/types'

const ListJobs: ObjectExperience[] = [
    {
        job: "Analista de Datos", 
        enterprise: "Netcom Plus C.A", 
        dates: "May 2026 - Actualmente", 
        description: [
            "Diseñar los modelos estadisticos y sus metodos de calculos",
            "Automatizar el calculo de las metricas sacando la informacion de CRM de la empresa y presentar informes a gerencia",
            "Apoyar a los diferentes departamentos de la empresa para automatizar las metricas de cada uno",
            "Administrar todo lo relacionado a las suscripciones para garantizar la integridad de los datos"
        ], 
        status: true,
        hits: [
            '✔ Desarrollo de NetOwl: App Full-Stack que obtiene la informacion de Odoo V17 personalizado que moldea, limpia y presenta un informe detallado de las operaciones de la empresa',
        ],
        skills: [
            {name:"Python", link:"/python.png"},
            {name:"Django", link:"/django.svg"},
            {name:"Typescrtipt", link:"/Typescript.svg"},
            {name:"React", link:"/react.png"},
            {name:"Postgres", link:"/postgres.png"},
            {name:"Git", link:"/git.png"},
        ]
    },
    {
        job: "Analista de Gestion y Planificacion de Instalaciones",
        enterprise: "Netcom Plus C.A",
        dates: "Ene 2026 - Abr 2026",
        description: [
            "Planificación de rutas de Cuerpo Técnico de instalación de fibra Óptica y Radiofrecuencias.",
            "Establecer Contacto con los Clientes pendientes por instalación de servicio de internet.",
            "Gestionar Etapa de Instalación del cliente (Registro de cliente en Sistemas de documentacion, Establecer parámetros para que el equipo final ONU o Antena posea salida a internet).",
            "Garantizar una conectividad adecuada al cliente al momento de su instalación.",
            "Facturacion inicial del cliente más movimiento de inventario correspondiente para la instalación.",
        ],
        status: false,
        skills: [
            {name:"Redes", link:"/router.svg"},
        ]
    },
    {
        job: "Supervisor de Servicios de Campo, Redes e infraestructura",
        enterprise: "Conectip C.A",
        dates: "Mar 2025 - Dic 2026",
        description: [
            "Planificación y coordinación de actividades para técnicos internos y tercerizados.",
            "Supervisión     de     mantenimientos     preventivos     y     correctivos     en infraestructura de telecomunicaciones.",
            "Diseño e implementación de proyectos de fibra óptica y radioenlaces microondas.",
            "Supervisión de redes físicas y lógicas, garantizando la continuidad operativa.",
            "Coordinación con proveedores y clientes corporativos para asegurar cumplimiento de SLA.",
            "Supervisar el cumplimiento de normas de seguridad y evaluar el desempeño de los empleados",
        ],
        status: false,
        hits: [
            "✔ Diseño e implementación de red de fibra óptica troncalizada de 7 km entre San Juan de los Morros, Guarico y Píritu, Aragua.",
            "✔ Optimización de redes de microondas para mayor estabilidad y ancho de banda.",
            "✔ Diseño de plan de migración de clientes de microondas a fibra óptica",
        ],
        skills: [
            {name:"Redes", link:"/router.svg"},
            {name:"Python", link:"/python.png"},
            {name:"Flet", link:"/flet.png"},
            {name:"Postgres", link:"/postgres.png"},
            {name:"Git", link:"/git.png"},
            {name:"Docker", link:"/docker.png"},
            {name:"Zabbix", link:"/zabbix.png"},
        ]
    },
    {
        job:"Analista del Centro de Control y Monitoreo Soporte Nivel I y II",
        dates: "Ago 2023 - Feb 2026",
        enterprise: "Conectip C.A",
        status: false,
        description: [
            "Atención a clientes en soporte técnico N1 y N2.",
            "Gestión y seguimiento de actividades para atención al cliente en soporte nivel 3.",
            "Encargado de redes lógicas y servidores.",
            "Administración y actualización de documentación técnica de la red. Monitoreo de la red con Zabbix y Grafana, garantizando disponibilidad y rendimiento.",
            "Configuración y gestión de equipos activos (Routers, Switches, OLTs, ONUs, antenas).",
            "Administración de servidores Linux y virtualización en Proxmox. Implementación de soluciones tecnológicas y automatización de procesos mediante scripting en Python.",
            "Gestión de QoS en routers para asegurar calidad de servicio diferenciada. Propuesta de soluciones tecnológicas para implementación en la red. Análisis de capacidad de la red y diagnóstico de fallos",
        ],
        hits: [
            "✔ Diseño e implementación de red de administración y servicios internos.",
            "✔ Implementación de equipos activos en red GPON en Píritu, Edo. Aragua.",
            "✔ Creación de modelo de QoS adaptado a necesidades reales de tráfico y clientes.",
        ],
        skills: [
            {name:"Redes", link:"/router.svg"},
            {name:"Docker", link:"/docker.png"},
            {name:"Zabbix", link:"/zabbix.png"},
            {name:"grafana", link:"/grafana.png"},
        ]
    },
    {
        job: "Delegado de Campo y Vocero del Area de Tecnologia",
        enterprise: "Asociacion de Futbol del Estado Monagas, Comision de Delegados",
        dates: "Ago 2022 - jul 2023",
        status: false,
        description: [
            "Implementación de soluciones tecnológicas para gestión de delegados en torneos.",
            "Desarrollo de estadísticas de desempeño y control de asignaciones.",
            "Digitalización de procesos administrativos de la comisión.",
        ],
    }
]
export default ListJobs;