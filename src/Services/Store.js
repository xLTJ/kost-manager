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

// State for storing the filters that are applied to the recipe search.
const useFilterStore = create((set) => ({
    filters: {
        diet: [],
        health: [],
        cuisineType: [],
        mealType: [],
        dishType: [],
        calories: '',
        ingredientNumber: '',
    },

    // Add a filter to the filter store. If the filter already exists or is invalid, it wont be added.
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

    // Remove a filter from the filter store. If the filter doesn't exist or is invalid, it will not be removed (cus it doesnt exist).
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

    // Set a filter to a new value. If the filter doesn't exist or is invalid, it will not be set. Should only be used for filters with a single value.
    setFilter: (filterName, newValue) => {
        if (useFilterStore.getState().filters[filterName] === null) {
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
    },

    // Reset all filters to their default values.
    resetFilters: () => {
        set({filters: {
                diet: [],
                health: [],
                cuisineType: [],
                mealType: [],
                dishType: [],
                calories: '',
                ingr: '',
            }})
    }
}));

const useAddedFoodStore = create((set) => ({
    addedFood: [],

    // Add a food item to the food store. If the food item already exists, it wont be added.
    addFood: (food) => {
        if (useAddedFoodStore.getState().addedFood.find((item) => item === food)) {
            console.error("Food already added")
            return;
        }

        set({addedFood: [...useAddedFoodStore.getState().addedFood, food]})
    },

    // Remove a food item from the food store. If the food item doesn't exist, it will not be removed (cus it doesnt exist).
    removeFood: (food) => {
        if (!useAddedFoodStore.getState().addedFood.find((item) => item === food)) {
            console.error("Food not found")
            return;
        }

        set({addedFood: useAddedFoodStore.getState().addedFood.filter((item) => item !== food)})
    },

    // Clear all food items from the food store.
    clearFoods: () => set({addedFood: []})
}));

export {useUserStore, useActiveModalStore, useFilterStore, useAddedFoodStore};