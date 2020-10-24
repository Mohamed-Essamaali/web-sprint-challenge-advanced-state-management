import React from 'react'
import { connect } from 'react-redux';
import {getSmurf} from '../actions'
import Smurf from './smurf'
import FormSmurf from './formSmurf'
      const SmurfList = props=>{
        return(<div>

           <FormSmurf />
            
           
            <button onClick={()=>{props.getSmurf()
            }}>Get Smurfs</button>
            

            {props.data.map(el=>{
               return <Smurf smurf={el}/>
            })}

        </div>)
    }


const mapStateToProps = state=>{
    console.log('MApStatestate in List',state.data)
    return {data: state.data }
}

export default connect(mapStateToProps,{getSmurf})(SmurfList)