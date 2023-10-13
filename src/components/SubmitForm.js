import './SubmitForm.css'
import React,  {useState} from 'react'

function Submit(){
    const [name,setName] = useState("")
    const [fullName,setFullName] = useState()
    
    function InputChange(event){
        
        // console.log(event);
        console.log(event.target.value)
        setName(event.target.value)
        
    }
    function onSubmit(){
        setFullName(name)
    }
    
    return(
        <div className="submit">
            <h1>Hello {fullName}</h1>
            <input type="text" placeholder="Enter Your Name" onChange={InputChange} value={name}></input>
            <button onClick={onSubmit}>Click Me</button>
        </div>
    )
};
export default Submit;