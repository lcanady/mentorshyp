import React, { createContext, useRef, useState } from "react";
import firebase from "./firebase.config";

export const Context = createContext(null);

export default function GlobalStateProvider({ children }) {
  const localRef = useRef();
  const remoteRef = useRef();
  const [loading, setLoading] = useState(true);

  const initialState = {
    localRef,
    remoteRef,
  };

  return <Context.Provider value={initialState}>{children}</Context.Provider>;
}
