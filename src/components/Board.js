import React,{useContext } from 'react'
import './components.css'
import { MdDelete } from "react-icons/md";
import { GiFinishLine } from "react-icons/gi";
import { FaSort } from "react-icons/fa";
import { secondContext } from '../context/Context';
function Board( ) {
const {state, deleteWish, completeWish} = useContext(secondContext)
 
      function handleDelete(id){
        deleteWish(id)
      }
      function handleFinish(id) {
        completeWish(id)
      }

  return (
    <div className='sub-wrapper'>
        <div className='title-wrapper'>
             <FaSort className='filter'  ></FaSort>
             <div>tasks:</div>
        </div>
       
      {(state && state.length > 0) ? state.map((data)=>(
        <>
        {<div className='task'>
            <div>{data.id}</div>
            <div>{data.task}</div>
            <div>{data.status? 'Completed': 'Uncompleted'}</div>
            <MdDelete onClick={()=>{handleDelete(data.id)}}  ></MdDelete>
            <GiFinishLine onClick={()=>{handleFinish(data.id)}} ></GiFinishLine>
        </div>}
        </>
      )) : <div>no data</div>}
    </div>
  )
}

export default Board
