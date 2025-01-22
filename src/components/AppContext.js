import React, {createContext, useState} from 'react';
export const AppContext = createContext({});

export function AppProvider({children}) {
  

  return <>{children}</>
}