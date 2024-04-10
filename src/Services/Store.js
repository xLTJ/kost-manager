import {create} from "zustand";

const useUserStore = create((set) => ({
    username: '',
    userData: {},
    updateUser: (newUser) => set({username: newUser.email, userData: newUser})
}));

export {useUserStore};