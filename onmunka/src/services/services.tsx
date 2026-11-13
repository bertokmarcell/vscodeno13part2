import type { PRODUCTTYPE } from "../types/airlines_type";

const api_url='http://127.0.0.1:8000/api/airlines';
export function getProducts(){
return fetch(api_url)
    .then((response)=>{
        if(!response.ok){
            throw new Error("failed to load")
        }
        return response.json() as Promise<PRODUCTTYPE[]>
    })//(response=>response.json()) ez le van cserélve
}