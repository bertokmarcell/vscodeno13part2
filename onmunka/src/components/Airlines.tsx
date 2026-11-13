import React from "react";
import { useProductContext } from "../airlinescontext/AirlinesContext"
import Product from "./Airline";

interface PRODUCTSPROPS{
}
function Products(){
    const {productlist,load,hiba}= useProductContext();//brackets at the end
    if(load){
        return <p>termekek betoltese...</p>
    }
    if(hiba){
        return <p>{hiba}</p>
    }

    return(
        <>
        <div className="osszkartya">
        {productlist.map((e,i)=>{return(<Product elem={e} key={i}/>)})}
        </div>
        </>
    )
}
export default Products;//refce shortcut, also dont forget ex de Pro