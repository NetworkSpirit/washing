import axios from "axios";
import { AppDispatch } from "../store";
import { IUser } from "../../models/IUser";
import { userSlice } from "./UserSlice";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching())
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
        dispatch(userSlice.actions.usersFetchingSuccess(response.data))
    } catch (e) {
        dispatch(userSlice.actions.usersFetchingError("asdsad"));
    }
}