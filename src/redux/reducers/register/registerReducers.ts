import { UserActionType, UsersAction} from "../../actions/register/typesActions";
import { IUserState } from "./typesReducers";

const initialState: IUserState = {
    users: [],
    usersLoading: true,
    usersError: null
}

export default function userReducer(state = initialState, action: UsersAction): IUserState {
    switch (action.type) {
        case UserActionType.ADD_USER:
            return{...state, users: [...state.users, action.payload]}
        case UserActionType.SET_USERS:
            return{...state, users: action.payload}
        case UserActionType.SET_USERS_LOADING:
            return{...state, usersLoading: action.payload}
        case UserActionType.SET_USERS_ERROR:
            return{...state, usersError: action.payload};
        case UserActionType.POST_USER:
            return { ...state };
        default:
            return state
    }
}