import type {ObjectProject} from "../types/types"
import StackIcons from "./stackicons";

interface ProjectProps {
    projects: ObjectProject[];
}

export default function ProjectStack({projects}: ProjectProps) {
    return (
        <div>
            {projects.map((p)=>(
                <div className="grid grid-cols-4 p-15 border-b-1 rounded-2xl border-borde">
                    <div className="grid">
                        <h3 className="text-3xl">{p.name}</h3>
                    </div>
                    <div className="grid col-span-2 items-center">
                        <p className="text-xl text-texto-sec text-justify">{p.description}</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="grid items-center px-4">
                            <StackIcons list={p.stack} iconsize="h-7" spacing="flex-wrap gap-7 justify-around"/>
                        </div>
                        <div className="grid">
                            <a href={p.repo} className="flex gap-5 items-center px-4" target="_blank">
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

