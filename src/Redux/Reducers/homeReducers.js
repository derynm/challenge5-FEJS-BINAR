import { FETCH_DATA } from "../Action/types";

const initalState = {
    car_data : []
}

export default function (state = initalState, action) {
    switch (action.type) {
        case FETCH_DATA:
            return{
                ...state,
                car_data : action.carData.data
            }
            break;
    
        default:
            return state;
    }
}