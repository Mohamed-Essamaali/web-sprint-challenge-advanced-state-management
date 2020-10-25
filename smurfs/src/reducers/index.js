import {SMURF_FETCHING,SMURF_SUCCESS, SMURF_FAILURE} from '../actions'

export const initialState = {
    data:[]
}

export const myReducer = (state=initialState,action)=>{

switch(action.type){
    case SMURF_FETCHING:
        return {...state}
        case SMURF_SUCCESS:
            console.log('data in reducer success',state.data)
            return {...state,...state.data,data:action.payload}
        case SMURF_FAILURE:
            return {...state}
        default:
            return state
}


}