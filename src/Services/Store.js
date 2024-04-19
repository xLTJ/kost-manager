import {create} from "zustand";

const useUserStore = create((set) => ({
    username: '',
    userData: {},
    isLoggedIn: false,
    updateUser: (newUser) => set({username: newUser.email, userData: newUser}),
    userLoggedIn: (loggedIn) => set({isLoggedIn: loggedIn})
}));

export {useUserStore};