export interface User {
  id: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  created_at: Date;
  updated_at: Date;
}

export type UnsavedUser = Omit<User, "id">