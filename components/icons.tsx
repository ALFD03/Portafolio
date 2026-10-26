interface IconProps {
    data: string;
}

function Icon({data}: IconProps){
    return(
        <img src={data} alt="" className="h-15 "/>
    )
}
export default Icon;