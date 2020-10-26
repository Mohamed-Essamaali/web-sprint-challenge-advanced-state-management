import React,{useState} from 'react';
import { connect } from 'react-redux';
import {addSmurf}from '../actions'

const FormSmurf = props=>{

    const[smurf,setSmurf] = useState({
        name:'',
        age:'',
        height:''
    })


    const handleChange = e=>{

        setSmurf({...smurf, id:Date.now(),
            [e.target.name]:e.target.value})
    }

console.log('new smurf', smurf)
    return (
        <div>
           
                <input type='text' name='name' placeholder='smurf name'alue={smurf.name} onChange={handleChange}/>
                <input   name='age' placeholder='age' value= {smurf.age} onChange={handleChange}/>
                <input   name = 'height' placeholder='height' value= {smurf.height} onChange={handleChange}/>
                 <button className='add-btn' onClick={()=>{props.addSmurf(smurf)}} >Add New Smurf</button>
             
        </div>
    )
 
}

const mapStateToProps= state=>{

    return{
            data:state.data,
            smurf:state.smurf,
           }
}
export default connect(mapStateToProps,{addSmurf})(FormSmurf)