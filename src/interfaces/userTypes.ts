import { ReactNode } from "react";

export interface UserContext {
  userState: UserState;
}

export interface UserState {
  isAuthenticated: boolean;
  username: string | null;
  email: string | null;
  token: string | null;
}
export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
