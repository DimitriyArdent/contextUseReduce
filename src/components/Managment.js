import React, {useState, useContext} from 'react'
import { secondContext } from '../context/Context';
import  './components.css'


 function Managment( ) {
  const  {state, setWish }  = useContext(secondContext)

    const [taskData, setTaskData] = useState({
        task: '',
        status: false,
        id:0
      });

    function handleSubmit(e){
        e.preventDefault()
         
        setWish(taskData )
     }



    const handleChange = (e) => {
        const { value } = e.target;
        setTaskData((prevData) => ({
          ...prevData,
           task : value 
        }));
      };

  return (
    <div className='sub-wrapper' >
        
        <form  className='form-wrap' onSubmit={(e)=>handleSubmit(e)}>
            <div className='content-wrap'>
                 <label>add task</label>
                 <input name='taskName' onChange={(e)=>handleChange(e)} value={taskData.task}></input>
                 <button type='submit'>add</button>
            </div>
            
        </form>
        
    </div>
  )
}

export default Managment
