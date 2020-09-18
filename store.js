import React, {createContext, useEffect, useState} from 'react'
import * as firebase from 'firebase'

export const Context = createContext(null)

export default function GlobalStateProvider({children}) {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(
      () => {
        //  first @param () =>
        const unsubscribe =
            firebase.auth().onAuthStateChanged(function (user) {

              if (user) {
                setLoading(true)
                setData(user)
                setLoading(false)
              }
            })

        return () => unsubscribe()

      }, [loading]) //second @param is deps

  const initialState = {
    user: data,
    loading,
    setLoading
  }

  return (
      <Context.Provider value={initialState}>
        {children}
      </Context.Provider>
  )

}

