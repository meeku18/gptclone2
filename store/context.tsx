"use client"
import React, { createContext, useState, useContext ,ReactNode } from 'react';

// Define the type for the context value
interface BoolContextType {
  value: boolean;
  toggleValue: () => void;
}

// Creating a Context to hold the state
const BoolContext = createContext<BoolContextType | undefined>(undefined);

// Custom hook to use the BoolContext
export const useBool = () => {
  const context = useContext(BoolContext);
  if (!context) {
    throw new Error('useBool must be used within a BoolProvider');
  }
  return context;
};

// Provider component to wrap your app and provide the context
export const BoolProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [value, setValue] = useState(false);

  const toggleValue = () => {
    setValue(prevValue => !prevValue);
  };

  const contextValue: BoolContextType = {
    value,
    toggleValue,
  };

  return (
    <BoolContext.Provider value={contextValue}>
      {children}
    </BoolContext.Provider>
  );
};
