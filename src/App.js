import React,{useState} from 'react'
 import './App.css';
 import Board from './components/Board';
 import Managment from './components/Managment';
 import Header from './components/Header';
 import { SecondContextProvider } from './context/Context';
 function App() {
 


  return (
    <div  >
      <Header></Header>
      <div className='wrapper'>

        <SecondContextProvider>
            <Managment  ></Managment>
            <Board  ></Board>
        </SecondContextProvider>
 
          
      </div>
     
          
        
      

    </div>

    

     
  );
}

export default App;
