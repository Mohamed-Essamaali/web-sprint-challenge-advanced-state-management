import React from 'react'
import { connect } from 'react-redux'
import {removeSmurf} from '../actions'
// class Smurf extends React.Component{


//     render(){
const Smurf = props=>{
console.log('props in smurf',props)

        return(<div className='smurf'>
            <h3>{props.smurf.name}</h3>
            <p>Age: {props.smurf.age} year</p>
            <p>Height: {props.smurf.height}feet</p>
            <button>Toggle Editing</button>
            <button onClick = {()=>props.removeSmurf}>Delete</button>
        </div>)
    }

    // export default Smurf

// const mapStateToProps= state =>{

//     return {
//         // data:state.data,
//         // smurf:state.smurf
//     }
// }
export default connect(null,{removeSmurf})(Smurf)