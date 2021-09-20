import { ADDMV, SEARCH_RATE, SEARCH_NAME } from "./action_types"

export const addHandler=(newMovie)=>{
    return{
        type:ADDMV,
        payload:newMovie 
    }
}
export const search_name=(payload)=>{
    return{
        type:SEARCH_NAME,
        payload
    }
}
export const search_rate=(payload)=>{
    return{
        type:SEARCH_RATE,
        payload
    }
}
