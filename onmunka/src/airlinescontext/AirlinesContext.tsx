import { createContext, use, useContext, useEffect, useState, type ReactNode } from "react";
import type { PRODUCTTYPE } from "../types/airlines_type";
import { getProducts } from "../services/services"

//bigcharatbigining
interface ProductContextType{
    productlist:PRODUCTTYPE[];
    load:boolean;
    hiba:string|null;
}
const ProductContext=createContext<ProductContextType | undefined>(undefined);
export function ProductProvider({children}:{children:ReactNode}){
    const [productlist,setproductlist]=useState <PRODUCTTYPE[]>([]);
    const [load,setload]=useState<boolean>(true);
    const [hiba,sethiba]=useState<string|null>(null);
    //new
    useEffect(()=>{
    getProducts().then(data=> {
        setproductlist(data);
        sethiba(null)})
        .catch(()=>{
            sethiba('nem siker')
        })
        .finally(()=>{
            setload(false)
        });
    },[])//hook | 2 parameter, mikor fusson le | mellékhatások
    
    //new
    return(<ProductContext.Provider value={{productlist, load, hiba}}>
        {children}
        </ProductContext.Provider>
        
        )
}
export function useProductContext(){
    const context=useContext(ProductContext)
    if(context===undefined){
        throw new Error("csak provideren beul hasznalhato")
    }
    return(context);
}