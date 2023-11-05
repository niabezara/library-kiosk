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
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [openModal, setOpenModal] = useState(false);

  const openRegistration = () => {
    setOpenModal((prevOpenModal) => !prevOpenModal);
  };
  const closeCart = () => {
    setOpenModal(false);
  };

  return (
    <AuthContext.Provider
      value={{ openRegistration, openModal, setOpenModal, closeCart }}
    >
      {children}
    </AuthContext.Provider>
  );
}
