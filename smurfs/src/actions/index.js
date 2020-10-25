import axios from "axios";


export const SMURF_FETCHING = 'SMURF_FETCHING';
export const SMURF_SUCCESS = 'SMURF_SUCCESS';
export const SMURF_FAILURE = 'SMURF_FAILURE';


export const getSmurf = ()=>dispatch=>{
    dispatch({type:'SMURF_FETCHING'})
    axios.get('http://localhost:3333/smurfs')
    .then(res=>{
            console.log(res.data)
        dispatch({type:SMURF_SUCCESS,payload: res.data})
    })
    .catch(err=>{
        dispatch({type:SMURF_FAILURE,payload:err})
    })
}