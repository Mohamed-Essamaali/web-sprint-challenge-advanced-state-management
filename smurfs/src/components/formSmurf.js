import React,{useState} from 'react';
import { connect } from 'react-redux';

const FormSmurf = props=>{

    const[newSmurf,setNewSmurf] = useState({
        name:'',
        age:'',
        height:''
    })

    const handleChange = e=>{

        let newS = {
            id:Date.now(),
            [e.target.name]:e.target.value
        }
        setNewSmurf({...newSmurf, id:Date.now(),
            [e.target.name]:e.target.value})
    }

console.log('newSmorf', newSmurf)
    return (
        <div>
             <form onSubmit={()=>props.addSmurf(newSmurf)}>
                <input type='text' name='name' placeholder='smurf name'alue={newSmurf.name} onChange={handleChange}/>
                <input  name='age' placeholder='age' value= {newSmurf.age} onChange={handleChange}/>
                <input  name = 'height' placeholder='height' value= {newSmurf.height} onChange={handleChange}/>
                 <button >Add New Smurf</button>
             </form>
        </div>
    )
 
}
export default connect()(FormSmurf)