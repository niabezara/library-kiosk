import { createContext, useContext, useState } from "react";
import { AuthContextProps } from "../interfaces/AuthTypes";

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [openModal, setOpenModal] = useState(false);
  const [session, setSession] = useState(
    localStorage.getItem("token") !== null
  );

  // open modal
  const openRegistration = () => {
    setOpenModal((prevOpenModal) => !prevOpenModal);
  };

  // close modal
  const closeCart = () => {
    setOpenModal(false);
  };

  return (
    <AuthContext.Provider
      value={{
        openRegistration,
        openModal,
        setOpenModal,
        closeCart,
        setSession,
        session,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
