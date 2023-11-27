"use client";
import { createContext, useState } from "react";
import {
  IUserContext,
  IUserProviderProps,
  TContactReturn,
  TLoginReturn,
  TUserContact,
  TUserLoginReturn,
  TUserUpdate,
} from "./@types";
import { TUserEdit, TUserLogin, TUserRegister } from "@/schemas/user";
import { api } from "@/config/axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { TContactCreate, TContactEdit } from "@/schemas/contacts";

export const UserContext = createContext({} as IUserContext);

export default function UserProvider({ children }: IUserProviderProps) {
  const router = useRouter();
  const [loginData, setLoginData] = useState<TLoginReturn | null>(null);
  const [contacts, setContacts] = useState<TUserContact[] | null>(null);
  const [contact, setContact] = useState<TUserContact | null>(null);

  const createUser = async (formData: TUserRegister) => {
    try {
      await api.post("users", formData).then(() => {
        toast.success("Conta criada com sucesso!");
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async (formData: TUserLogin) => {
    await api
      .post("login", formData)
      .then((res) => {
        const response: TLoginReturn = res.data;
        toast.success("Login realizado com sucesso!");

        Cookies.set("auth_token", response.token);
        localStorage.setItem("CI@USER", JSON.stringify(response.user));
        localStorage.setItem("CI@TOKEN", JSON.stringify(response.token));

        setTimeout(() => {
          router.push("/dashboard");
        }, 2000);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const logoutUser = () => {
    toast.success("Até a próxima! 👋");
    Cookies.remove("auth_token");
    localStorage.removeItem("CI@USER");
    localStorage.removeItem("CI@TOKEN");

    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  const editUser = async (formData: TUserEdit) => {
    const user = JSON.parse(localStorage.getItem("CI@USER") || "");
    const token = JSON.parse(localStorage.getItem("CI@TOKEN") || "");

    if (user === undefined || token === undefined) {
      toast.error("Não foi possível carregar essa informação");
    }
    
    const id = user.id

    await api
      .patch(`/users/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const response: TUserLoginReturn = res.data;
        toast.success("Usuário editado com sucesso!");

        localStorage.setItem("CI@USER", JSON.stringify(response));

        setTimeout(() => {
          router.push("/dashboard");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteUser = async () => {
    const user = JSON.parse(localStorage.getItem("CI@USER") || "");
    const token = JSON.parse(localStorage.getItem("CI@TOKEN") || "");

    if (user === undefined || token === undefined) {
      toast.error("Não foi possível carregar essa informação");
    }
    
    const id = user.id

    await api
      .delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Adeus! 😢");
        Cookies.remove("auth_token");
        localStorage.removeItem("CI@USER");
        localStorage.removeItem("CI@TOKEN");

        setTimeout(() => {
          router.push("/");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createContact = async (formData: TContactCreate) => {
    const user = JSON.parse(localStorage.getItem("CI@USER") || "");
    const token = JSON.parse(localStorage.getItem("CI@TOKEN") || "");

    await api
      .post(`/users/${user.id}/contacts`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Contato criado com sucesso!");

        setTimeout(() => {
          router.push("/dashboard/contacts");
        }, 2000);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const editContact = async (formData: TContactEdit, contactId: string) => {
    const user = JSON.parse(localStorage.getItem("CI@USER") || "");
    const token = JSON.parse(localStorage.getItem("CI@TOKEN") || "");

    if (user === undefined || token === undefined) {
      toast.error("Não foi possível carregar essa informação");
    }

    await api
      .patch(`/users/${user.id}/contacts/${contactId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Contato editado com sucesso!");

        setTimeout(() => {
          router.push(`/dashboard/contacts`);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteContact = async (contactId: string) => {
    const user = JSON.parse(localStorage.getItem("CI@USER") || "");
    const token = JSON.parse(localStorage.getItem("CI@TOKEN") || "");

    await api
      .delete(`/users/${user.id}/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Contato deletado com sucesso");

        setTimeout(() => {
          router.push("/dashboard/contacts");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getContacts = async () => {
    const user = JSON.parse(localStorage.getItem("CI@USER") || "");
    const token = JSON.parse(localStorage.getItem("CI@TOKEN") || "");

    if (user === undefined || token === undefined) {
      return toast.error("Não foi possível carregar essa informação");
    }

    await api
      .get(`/users/${user.id}/contacts/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const data: TContactReturn[] | [] = res.data;
        setContacts(data);
      })
      .catch((res) => {
        toast.error(res);
      });
  };

  const getContact = async (contactId: string) => {
    const user = JSON.parse(localStorage.getItem("CI@USER") || "");
    const token = JSON.parse(localStorage.getItem("CI@TOKEN") || "");

    await api
      .get(`/users/${user.id}/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const data: TContactReturn | null = res.data;
        setContact(data);
      })
      .catch((res) => {
        toast.error(res);
      });
  };

  const contextValue: IUserContext = {
    createUser,
    loginUser,
    editUser,
    deleteUser,
    logoutUser,
    createContact,
    editContact,
    deleteContact,
    getContacts,
    getContact,
    loginData,
    setLoginData,
    contacts,
    contact,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
