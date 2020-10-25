import React from 'react'
import { connect } from 'react-redux'
// class Smurf extends React.Component{


//     render(){
const Smurf = props=>{
console.log('props in smurf',props)

        return(<div>
            <h3>{props.smurf.name}</h3>
            <p>{props.smurf.age}</p>
            <p>{props.smurf.height}</p>

        </div>)
    }


const mapStateToProps= state =>{

    return {
        data:state.data
    }
}
export default connect(mapStateToProps,null)(Smurf)