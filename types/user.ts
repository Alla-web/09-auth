export type User = {
  id: string;
  email: string;
  username?: string;
  photoUrl?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type UpdateUserRequest = {
  username?: string;
  email?: string;
};
