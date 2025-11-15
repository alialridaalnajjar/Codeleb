export enum RoleType {
  USER = "USER",
  ADMIN = "ADMIN",
}

export interface IUser {
  user_id: number;
  username: string;
  email: string;
  password_hash: string;
  role: RoleType;
  created_at: Date;
  profile_photo_url?: string | null;
  DOB?: Date | null;
  location?: string | null;
}