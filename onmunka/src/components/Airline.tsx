import type { PRODUCTTYPE } from "../types/airlines_type";

interface PRODUCTPROPS{
    elem:PRODUCTTYPE
}
export default function Product({elem}:PRODUCTPROPS){
    return(
    <>
    <div className="egykartya">
        <p>{elem.name}</p>
        <p>{elem.country}</p>
        <p>{elem.id}</p>
    </div>
    </>)
}