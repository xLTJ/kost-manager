import {firestore} from "../firebase.config.js";
import { doc, setDoc, collection, where, query, getDocs } from "firebase/firestore";

export const addRecipe = async (userUID, recipeURI, recipeData) => {
    try {
        await setDoc(doc(firestore, 'savedRecipes', `${userUID}+${recipeURI}`), {
            userUID: userUID,
            recipeURI: recipeURI,
            recipe: recipeData
        });
    } catch (error) {
        console.error(error)
    }
}

export const getSavedRecipes = async (userUID) => {
    try {
        const q = query(collection(firestore, 'savedRecipes'), where('userUID', '==', userUID));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => doc.data());
    } catch (error) {
        console.error(error)
    }
}