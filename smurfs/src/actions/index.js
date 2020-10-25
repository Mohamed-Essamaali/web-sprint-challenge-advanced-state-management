import axios from "axios";


export const SMURF_FETCHING = 'SMURF_FETCHING';
export const SMURF_SUCCESS = 'SMURF_SUCCESS';
export const SMURF_FAILURE = 'SMURF_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';
export const REMOVE_SMURF = 'REMOVE_SMURF';


export const getSmurf = ()=>dispatch=>{
    dispatch({type:'SMURF_FETCHING'})
    axios.get('http://localhost:3333/smurfs')
    .then(res=>{
            console.log('data axios get',res.data)
        dispatch({type:SMURF_SUCCESS,payload: res.data})
    })
    .catch(err=>{
        dispatch({type:SMURF_FAILURE,payload:err})
    })
}

export const addSmurf = item=>dispatch=>{
    console.log('smurf added in actions',item)

    dispatch({type:ADD_SMURF,payload:item})

    axios.post('http://localhost:3333/smurfs',item)
    .then(res=>{
        console.log('data posted', res.data)
    dispatch({type:SMURF_SUCCESS,payload: res.data})
})
.catch(err=>{
    dispatch({type:SMURF_FAILURE,payload: err})
})
}

export const removeSmurf = item=>dispatch=>{
    console.log('function remove called to remove ',item)
    dispatch({type: REMOVE_SMURF,payload: item})
   
} 