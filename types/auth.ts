export type RegisterRequest = {
  email: string;
  password: string;
  userName: string;
};

export type User = {
  id: string;
  email: string;
  userName?: string;
  photoUrl?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type CheckSessionRequest = {
  success: boolean;
};
