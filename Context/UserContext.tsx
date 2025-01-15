import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type for the user object
interface User {
  _id: string;
  email: string;
  brandName: string;
  occupation: string;
}

// Define the context type
interface UserContextType {
  user: User | null; // Allow user to be null initially
  setUser: (user: User | null) => void; // Allow clearing the user by setting null
}

// Create the context with a default undefined value
const UserContext = createContext<UserContextType | undefined>(undefined);

// Create a provider component
interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for consuming the context
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
