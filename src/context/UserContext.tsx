import { createContext, ReactNode, useContext, useState } from "react";

type UserData = {
  name: string;
  email: string;
  cpf: string;
  table: string;
};

type UserContextData = {
  userData: UserData | null;
  isUserRegistered: boolean;
  registerUser: (data: UserData) => void;
  clearUserData: () => void;
};

const UserContext = createContext<UserContextData | null>(null);

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  const registerUser = (data: UserData) => {
    setUserData(data);
  };

  const clearUserData = () => {
    setUserData(null);
  };

  const isUserRegistered = userData !== null;

  const value: UserContextData = {
    userData,
    isUserRegistered,
    registerUser,
    clearUserData,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
