interface IconProps {
    data: string;
    classname?: string;
}

function Icon({data, classname = "h-15"}: IconProps){
    return(
        <img src={data} alt="" className={classname}/>
    )
}
export default Icon;