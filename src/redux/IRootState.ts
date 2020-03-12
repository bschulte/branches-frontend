import { IAuthState } from "./slices/auth.slice";

export interface IRootState {
  auth: IAuthState;
}
