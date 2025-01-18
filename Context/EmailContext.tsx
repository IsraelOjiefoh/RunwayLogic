import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
interface EmailContextType {
  email: string;
  setEmail: (email: string) => void;
}

// Create the context with default undefined
const EmailContext = createContext<EmailContextType | undefined>(undefined);

// Create a provider component
interface EmailProviderProps {
  children: ReactNode;
}

export const EmailProvider: React.FC<EmailProviderProps> = ({ children }) => {
  const [email, setEmail] = useState<string>("");

  return (
    <EmailContext.Provider value={{ email, setEmail }}>
      {children}
    </EmailContext.Provider>
  );
};

// Custom hook for consuming the context
export const useEmail = (): EmailContextType => {
  const context = useContext(EmailContext);
  if (!context) {
    throw new Error("useEmail must be used within an EmailProvider");
  }
  return context;
};
