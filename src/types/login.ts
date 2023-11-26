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

export type TLoginReturn = {
  user: TUserLoginReturn;
  token: string;
};
