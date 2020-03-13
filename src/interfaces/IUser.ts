export interface IUser {
  id: number;
  email: string;
  name: string;
  accessCode: string;
  createdAt: Date;
  lastLogin: Date;
  approved: boolean;
  updatedAt: Date;
  group: string;
  subGroups: string[];
  apiKey: string;
  loginAttempts: number;
  locked: boolean;
  defaultPriority: number;
  resetToken: string;
  resetTokenExpires: Date;
  isAdmin: boolean;
  needsPasswordChange: boolean;
}
