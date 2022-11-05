import { IUser } from "../../../interface";
import { ThunkDispatch } from "redux-thunk";
import { IUserState } from "../../reducers/register/typesReducers";
import { AnyAction } from "redux";

export enum UserActionType {
    ADD_USER = 'ADD_USER',
    DELETE_USER = 'DELETE_USER',
    SET_USERS = 'SET_USERS',
    SET_USERS_LOADING ='SET_USERS_LOADING',
    SET_USERS_ERROR = 'SET_USERS_ERROR',
    POST_USER = 'POST_USER'
}

export interface IAddUser {
    type: UserActionType.ADD_USER;
    payload: IUser;
}

export interface IDeleteUser {
    type: UserActionType.DELETE_USER;
    payload: IUser;
}

export interface ISetUsers {
    type: UserActionType.SET_USERS;
    payload: IUser[];
}

export interface ISetUsersLoading {
    type: UserActionType.SET_USERS_LOADING;
    payload: boolean;
}

export interface ISetUsersError {
    type: UserActionType.SET_USERS_ERROR;
    payload: string | null;
}

export interface IPostUser {
    type: UserActionType.POST_USER;
}

export type UsersAction = IAddUser | IDeleteUser | ISetUsers | ISetUsersLoading | ISetUsersError | IPostUser

export type UsersDispatch = ThunkDispatch<IUserState, any, AnyAction>