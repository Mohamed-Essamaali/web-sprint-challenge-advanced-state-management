import React from 'react'
import { connect } from 'react-redux'
import {removeSmurf,toggleEditing} from '../actions'



class Smurf extends React.Component{

    render(){

console.log('props in smurf',this.props)

        return(<div className={`smurf${this.props.completed ? " completed" :''}`}>
            <h3>{this.props.smurf.name}</h3>
            <p>Age: {this.props.smurf.age} years</p>
            <p>Height: {this.props.smurf.height}</p>
            <button onClick={()=>this.props.toggleEditing()}>Toggle Editing</button>
            <button onClick = {()=>this.props.removeSmurf(this.props.smurf)}>Delete</button>
        </div>)
    }
}
    // export default Smurf

const mapStateToProps= state =>{

    return {
        // data:state.data,
        // smurf:state.smurf,
        completed: state.completed
    }
}
export default connect(mapStateToProps,{removeSmurf,toggleEditing})(Smurf)