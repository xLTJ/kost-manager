import {create} from "zustand";

const useUserStore = create((set) => ({
    username: '',
    userData: {},
    isLoggedIn: false,
    updateUser: (newUser) => set({username: newUser.email, userData: newUser}),
    userLoggedIn: (loggedIn) => set({isLoggedIn: loggedIn})
}));

const useActiveModalStore = create((set) => ({
    activeModal: false,
    modalContent: Object,
    openModal: (content) => set({activeModal: true, modalContent: content}),
    closeModal: () => set({activeModal: false})
}));

const useFilterStore = create((set) => ({
    filters: {
        diet: [],
        health: [],
        cuisine: [],
        mealType: [],
        dishType: [],
        calories: null,
        ingredientNumber: null,
    },

    addFilter: (filterName, newValue) => {
        if (!useFilterStore.getState().filters[filterName]) {
            console.error("invalid filter")
            return;
        }

        if (useFilterStore.getState().filters[filterName].find((filter) => filter === newValue)) {
            console.error("Filter already exists");
            return;
        }

        set((state) => ({
                filters: {
                    ...state.filters,
                    [filterName]: [...state.filters[filterName], newValue]
                }
            }));
    },

    removeFilter: (filterName, valueToRemove) => {
        if (!useFilterStore.getState().filters[filterName]) {
            console.error("invalid filter")
            return;
        }

        if (!useFilterStore.getState().filters[filterName].find((filter) => filter === valueToRemove)) {
            console.error("Filter doesn't exist");
            return;
        }

        set((state) => ({
            filters: {
                ...state.filters,
                [filterName]: state.filters[filterName].filter(filter => filter !== valueToRemove)
            }
        }));
    },

    setFilter: (filterName, newValue) => {
        if (!useFilterStore.getState().filters[filterName]) {
            console.error("invalid filter")
            return;
        }

        if (Array.isArray(useFilterStore.getState().filters[filterName])) {
            console.error("For filters with multiple values please use addFilter instead")
            return;
        }

        set((state) => ({
            filters: {
                ...state.filters,
                [filterName]: newValue
            }
        }));
    }
}));

export {useUserStore, useActiveModalStore, useFilterStore};