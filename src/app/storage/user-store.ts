import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { UserModel } from "../models/user.model"

export type UserState = {
    user: UserModel;
};

const initialState: UserState = {
    user: null
}

export const UserStore = signalStore(
    { providedIn: "root"},
    withState(initialState),
    withMethods(store => ({
        initUser(user: UserModel) {
            patchState(store, currentState => ({user}))
        },
        logoutUser() {
            patchState(store, currentState => ({ user: null as UserModel}))
        }
    }))
);