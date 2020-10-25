import React from 'react'
import { connect } from 'react-redux';
import {getSmurf} from '../actions'
import Smurf from './smurf'
import FormSmurf from './formSmurf'

      const SmurfList = props=>{
          console.log('props in list',props)
        return(<div className='smurfs-container'>
            
                
           <FormSmurf />
            
           
            <button onClick={()=>{props.getSmurf()
            }}>Get Smurfs</button>
            
            <div className='smurfs'>
            {props.data.map((smurf,i)=>{
                console.log('smurf map',smurf)
               return <Smurf key={i} smurf={smurf} />
            })}
        
            </div>
           
        </div>)
    }


const mapStateToProps = state=>{
    console.log('MApStatestate in List',state.data)

        return {   data:state.data,
                    smurf:state.smurf
             }
}

export default connect(mapStateToProps,{getSmurf})(SmurfList)