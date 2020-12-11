import React, { useReducer } from 'react';
import { reducer, store } from '../reducers/Reducer.js';

const IdeasContext = React.createContext()

function IdeasContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, store)
  const contextToProvide = {
    state,
    dispatch
  }
  return(
    <IdeasContext.Provider value={contextToProvide}>
      { children }
    </IdeasContext.Provider>
  )
}

export {
  IdeasContext,
  IdeasContextProvider
}
