import { ADD_COUNT, DEL_COUNT } from "../actionTypes";

export function addCount() {
    return {
        type:ADD_COUNT
    }
}

export function delCount(num){
    return {
        type:DEL_COUNT,
        num
    }
}