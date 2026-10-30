import type {IconsLink} from "../types/types"
import Icon from "./icons"

interface StackProp {
    list: IconsLink[];
    iconsize?: string;
    spacing?: string;
}

function StackIcons({list, iconsize, spacing = "justify-between"}: StackProp){
    return(
        <div className={`flex ${spacing}`}>
            {list.map((i)=>(
                <Icon data={i.link} classname={iconsize}/>
            ))}
        </div>
    )
}

export default StackIcons