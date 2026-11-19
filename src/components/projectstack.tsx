import type {ObjectProject} from "../types/types"
import StackIcons from "./stackicons";

interface ProjectProps {
    projects: ObjectProject[];
}

export default function ProjectStack({projects}: ProjectProps) {
    return (
        <div>
            {projects.map((p)=>(
                <div key={p.name} className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-0 py-8 px-2 md:p-10 xl:p-15 border-b-1 rounded-2xl border-borde">
                    <div className="grid">
                        <h3 className="text-2xl md:text-3xl">{p.name}</h3>
                    </div>
                    <div className="grid lg:col-span-2 items-center">
                        <p className="text-lg md:text-xl text-texto-sec md:text-justify">{p.description}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row lg:grid lg:grid-cols-2 gap-5 lg:gap-0 sm:items-center">
                        <div className="grid items-center lg:px-4">
                            <StackIcons list={p.stack} iconsize="h-7" spacing="flex-wrap gap-5 lg:gap-7 lg:justify-around"/>
                        </div>
                        <div className="grid">
                            <a href={p.repo} className="flex gap-5 items-center lg:px-4" target="_blank">
                                <img src="/github.svg" alt="" className="h-9" />
                                <p className="text-md text-senal">{p.status}</p>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

