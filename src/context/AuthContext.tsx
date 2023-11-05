import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface AuthContextProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  openRegistration: () => void;
  openModal: boolean;
  closeCart: () => void;
  session: boolean;
  setSession: Dispatch<SetStateAction<boolean>>;
}

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
