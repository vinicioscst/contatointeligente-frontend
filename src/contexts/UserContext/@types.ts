import { TUserEdit, TUserLogin, TUserRegister } from "@/schemas/user";
import { SetStateAction } from "react";
import { TContactCreate, TContactEdit } from "@/schemas/contacts";

type Id = any;

export interface IUserContext {
  createUser: (formData: TUserRegister) => Promise<void>;
  loginUser: (formData: TUserLogin) => Promise<void>;
  editUser: (formData: TUserEdit) => Promise<void>;
  deleteUser: () => Promise<void>;
  logoutUser: () => void;
  createContact: (formData: TContactCreate) => Promise<void>;
  editContact: (formData: TContactEdit, contactId: string) => Promise<void>;
  deleteContact: (contactId: string) => Promise<void>;
  getContacts: () => Promise<Id | undefined>;
  getContact: (contactId: string) => Promise<void>;
  loginData: TLoginReturn | null;
  setLoginData: React.Dispatch<SetStateAction<TLoginReturn | null>>;
  contacts: TUserContact[] | null;
  contact: TUserContact | null;
}

export interface IUserProviderProps {
  children: React.ReactNode;
}

export type TUserLoginReturn = {
  id: string;
  fullName: string;
  email: string;
  isAdmin: boolean;
  avatar: string | null | undefined;
  telephone: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null | undefined;
};

export type TUserContact = {
  id: string;
  fullName: string;
  email: string;
  telephone: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null | undefined;
};

export type TLoginReturn = {
  user: TUserLoginReturn;
  token: string;
};

export interface TContactReturn {
  id: string;
  fullName: string;
  email: string;
  telephone: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: null;
  user: TUserLoginReturn;
}

export type TUserUpdate = {
  fullName?: string;
  email?: string;
  password?: string;
  avatar?: string;
  telephone?: string;
};
