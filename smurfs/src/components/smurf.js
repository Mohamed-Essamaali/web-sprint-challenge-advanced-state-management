import React from 'react'
import { connect } from 'react-redux'
// class Smurf extends React.Component{


//     render(){
const Smurf = props=>{
console.log('props in smurf',props)

        return(<div>
            <h3>{props.smurf.name}</h3>
            <p>Age: {props.smurf.age} year</p>
            <p>Height: {props.smurf.height}feet</p>
            <button>Toggle Editing</button>
            <button>Delete</button>
        </div>)
    }

    export default Smurf

// const mapStateToProps= state =>{

//     return {
//         data:state.data,
//         // smurf:state.smurf
//     }
// }
// export default connect(mapStateToProps,null)(Smurf)