import React, { createContext, useReducer, useState } from 'react';
import { reducer } from './reducer';


export const secondContext = createContext(undefined)
 
 

export function SecondContextProvider({children}){
    const initialState =  []
    
      // Use useReducer with your reducer function and initial state
      const [state, dispatch] = useReducer(reducer, initialState);
     
      // Create a function to dispatch actions
      const setWish = (wish) => {
        const SET_WISH = 'SET_WISH'   
        dispatch({ type: SET_WISH, payload: wish });
      };
      const deleteWish = (wish) => {
        const DELETE_WISH = 'DELETE_WISH'   
        dispatch({ type: DELETE_WISH, payload: wish });
      };
      const completeWish = (wish) => {
        const COMPLETE_WISH = 'COMPLETE_WISH'   
        dispatch({ type: COMPLETE_WISH, payload: wish });
      };

    return <secondContext.Provider value={{state, setWish,deleteWish,completeWish}}>
            {children}
         </secondContext.Provider>
}