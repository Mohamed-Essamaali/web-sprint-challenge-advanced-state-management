import {SMURF_FETCHING,SMURF_SUCCESS, SMURF_FAILURE,ADD_SMURF, REMOVE_SMURF} from '../actions'

export const initialState = {
    data:[
        {
            name:"simo",
            age:"25",
            height:"13"
        }
    ]
  ,

    loading:false,
    error:'',
   
}

export const myReducer = (state=initialState,action)=>{

switch(action.type){
    case SMURF_FETCHING:
        return {...state,loading:true};
    case SMURF_SUCCESS:
        return {...state, 
            data:action.payload,
            loading:false};
    case SMURF_FAILURE:
        return {...state, error:action.payload,loading:false};
    case ADD_SMURF:
        return {...state,data:[...state.data, action.payload]};
    case REMOVE_SMURF:
        console.log('remove method called in reducer');
        return {...state, data: [...state.data.filter(item=> item.id !== action.payload.id)]}
    default:
        return state
}


}