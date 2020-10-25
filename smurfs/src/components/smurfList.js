import React from 'react'
import { connect } from 'react-redux';
import {getSmurf} from '../actions'
import Smurf from './smurf'
import FormSmurf from './formSmurf'
import SmurfContext from '../contexts/contextSmurf'
      const SmurfList = props=>{
          console.log('props in list',props)
        return(<div>
            
                
           <FormSmurf />
            
           
            <button onClick={()=>{props.getSmurf()
            }}>Get Smurfs</button>
            

            {props.data.map((smurf,i)=>{
                console.log('smurf map',smurf)
               return <Smurf key={i} smurf={smurf} />
            })}
        
        </div>)
    }


const mapStateToProps = state=>{
    console.log('MApStatestate in List',state.data)

        return {   data:state.data,
                    smurf:state.smurf
             }
}

export default connect(mapStateToProps,{getSmurf})(SmurfList)