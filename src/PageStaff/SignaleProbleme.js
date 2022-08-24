import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import {toast } from 'react-toastify'
import axiosInstance from '../axios'




function SignaleProbleme(){
     const [problem,setproblem]=useState("")
     const history=useHistory()

     const handleblem=e=>{
     	setproblem(e.target.value)
     }
     const notify = () => toast.success("Probleme  signalé  avec succes!",{
     position:toast.POSITION.TOP_CENTER,
     autoClose:false
    });
    const handlesubmit=e=>{
    	e.preventDefault();
    	axiosInstance
    	.post('staff/signaledeprobleme/',{probleme:problem})
    	.then(()=>{
          history.push('/')
          notify()
    	})
    }

	return(
     <div>
     <form className='centerbtn' onSubmit={handlesubmit}> 
        <p>Une breve description du probleme</p>
        <textarea
        required onChange={handleblem}
        rows="4" cols="40" name='description'
        />
        <p >
        <button type='submit'className="w3-btn w3-round-xxlarge w3-green"> Soumettre</button>
        </p>
        </form>
     </div>

	);
}


export default SignaleProbleme;