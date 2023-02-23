import { createContext, useEffect, useReducer } from 'react'
import { Reducer } from './Reducer'

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isFetching: false,
  error: false
}

export const LoginContext = createContext(INITIAL_STATE)

export const LoginContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user))
  })
  return (
    <LoginContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}
