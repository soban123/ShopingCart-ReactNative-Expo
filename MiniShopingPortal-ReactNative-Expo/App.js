import React, { useState, useEffect ,useReducer } from 'react';
import { AsyncStorage  } from 'react-native';

 export   const  MyContext = React.createContext({});


import Drawer from './Navigation/DrawNavigation'


export default function App( ) {

const [prevProducts , setprevProducts] = useState([]); 



  const count = useState(0);

  const reducer = (state, action) => {
    const { payload } = action; 
    switch (action.type) {
      case "ADD_ITEM":
       return payload;
      default:
       return state;
  }};
  function addNewItem(state, task) {
    const list = [...state.list];
    const newItem = {
      itemId: list.length + 1,
      task: task,
      completed: false
    };
    return {
      list: [...state.list, newItem]
    };
  }
  const initialState = 0 ;

  const [globalState, dispatch] = useReducer(reducer , count);
  
  return (
   <MyContext.Provider value={{ globalState, dispatch }}>
      <Drawer />
   </MyContext.Provider >
  );
}
