import { Dispatch, SetStateAction } from "react";

export interface IFormInput {
  userName: string;
  password: string | number;
}

export interface AuthContextProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  openRegistration: () => void;
  openModal: boolean;
  closeCart: () => void;
  session: boolean;
  setSession: Dispatch<SetStateAction<boolean>>;
}
