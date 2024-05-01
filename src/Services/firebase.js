import {firestore} from "../firebase.config.js";
import {doc, setDoc, collection, where, query, getDocs, serverTimestamp, orderBy} from "firebase/firestore";

// Add a new recipe to the savedRecipes collection. The recipe is stored with the userUID and the recipeURI as the document ID.
export const addRecipe = async (userUID, recipeURI, recipeData) => {
    try {
        await setDoc(doc(firestore, 'savedRecipes', `${userUID}+${recipeURI}`), {
            userUID: userUID,
            recipeURI: recipeURI,
            recipe: recipeData,
            timestamp: serverTimestamp()
        });
    } catch (error) {
        console.error(error)
    }
}

// Get all saved recipes for a user based on their UID. The recipes are sorted by timestamp in descending order.
export const getSavedRecipes = async (userUID) => {
    try {
        const q = query(
            collection(firestore, 'savedRecipes'),
            where('userUID', '==', userUID),
            orderBy('timestamp', 'desc')
        );
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => doc.data());
    } catch (error) {
        console.error(error)
    }
}