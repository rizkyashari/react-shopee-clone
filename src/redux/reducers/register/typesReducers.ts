import { IUser } from "../../../interface";

export interface IUserState {
    users: IUser[]
    usersLoading: boolean;
    usersError: string | null
}