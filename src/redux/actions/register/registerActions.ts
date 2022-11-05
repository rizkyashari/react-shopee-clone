import axios from 'axios'
import { Dispatch } from 'react'
import { IUser } from '../../../interface'
import { UsersAction, UserActionType } from './typesActions'

export const addUser = (payload: IUser)
:UsersAction => {
    return {type: UserActionType.ADD_USER, payload}
}

export const deleteUser = (payload: IUser)
:UsersAction => {
    return {type: UserActionType.DELETE_USER, payload}
}

export const setUsers = (payload: IUser[])
:UsersAction => {
    return {type: UserActionType.SET_USERS, payload}
}

export const setUsersLoading = (payload: boolean)
:UsersAction => {
    return {type: UserActionType.SET_USERS_LOADING, payload}
}

export const setUsersError = (payload: string | null)
:UsersAction => {
    return {type: UserActionType.SET_USERS_ERROR, payload}
};

export const fetchUsers = () => {
    return(dispatch: Dispatch<UsersAction>): void => {
        dispatch(setUsersLoading(true))
        dispatch(setUsersError(null))
        fetch('http://localhost:4000/users').then((response) => {
            if(!response.ok) throw new Error('Fetch users failed')
            return response.json();
        }).then((data) => dispatch(setUsers(data))).catch((error) => dispatch(setUsersError(error)))
        .finally(() => dispatch(setUsersLoading(false)))
    }
}

export const postUser = (payload: IUser) => {
    return (): void => {
      axios.post("http://localhost:4000/users", payload);
    };
  };
  