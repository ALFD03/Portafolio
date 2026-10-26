import type {IconsLink} from "../types/types"
import Icon from "./icons"

const Listicons: IconsLink[] = [
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

function StackIcons(){
    return(
        <div className="flex justify-between">
            {Listicons.map((i)=>(
                <Icon data={i.link}/>
            ))}
        </div>
    )
}

export default StackIcons