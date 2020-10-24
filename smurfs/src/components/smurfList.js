import React from 'react'
import { connect } from 'react-redux';
import {getSmurf} from '../actions'
import Smurf from './smurf'
// class SmurfList extends React.Component{
    
//     constructor(){
// super();
// this.state = {
//     data:[]
// }

//     }

    // render(){
      const SmurfList = props=>{
        return(<div>
            {props.data.map(el=>{
               return <Smurf smurf={el}/>
            })}
           
            <button onClick={()=>{props.getSmurf()
            }}>Get Smurfs</button>
        </div>)
    }


const mapStateToProps = state=>{
    console.log('MApStatestate in List',state.data)
    return {data: state.data }
}

export default connect(mapStateToProps,{getSmurf})(SmurfList)