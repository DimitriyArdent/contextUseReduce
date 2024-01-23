
 let counter = 0
export const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_WISH':
       
        return [  ...state,  {...action.payload, id:counter}   ]; // we are creating new array
      case 'DELETE_WISH': 
        return  state.filter((wish)=> wish.id !== action.payload)  // filter function returns new array
      case 'COMPLETE_WISH':
        return state.map((wish)=>{
          if(wish.id=== action.payload){
            return {...wish, status:true}
          }
          return wish
        })
      default:
        return state;
    }
  };
  