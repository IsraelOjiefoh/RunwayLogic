import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
interface OccupationContextType {
  occupation: string;
  setOccupation: (occupation: string) => void;
}

// Create the context with default undefined
const OccupationContext = createContext<OccupationContextType | undefined>(
  undefined
);

// Create a provider component
interface OccupationProviderProps {
  children: ReactNode;
}

export const OccupationProvider: React.FC<OccupationProviderProps> = ({
  children,
}) => {
  const [occupation, setOccupation] = useState<string>("");

  return (
    <OccupationContext.Provider value={{ occupation, setOccupation }}>
      {children}
    </OccupationContext.Provider>
  );
};

// Custom hook for consuming the context
export const useOccupation = (): OccupationContextType => {
  const context = useContext(OccupationContext);
  if (!context) {
    throw new Error("occupation must be used within an occupationProvider");
  }
  return context;
};
