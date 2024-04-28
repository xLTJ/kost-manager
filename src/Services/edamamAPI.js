const appID = 'f83b8f14';
const foodAppID = '34a8f42d';
const appKey = '6387510eb571594260811899498ddeda';
const foodAppKey = '9ebed71458a3b5e0f9eac05ed31b9544';

const edamamAPI = {
    // Function to search for recipes using the Edamam API. The options parameter is an object that contains the search parameters.
    async searchRecipes(options) {

        const baseSearchParams = new URLSearchParams({
            type: 'public',
            app_id: appID,
            app_key: appKey
        });

        for (const [key, value] of options) {
            baseSearchParams.append(key, value);
        }

        const searchParams = baseSearchParams.toString()

        const payload = {
            headers: {accept: 'application/json'}
        }

        const body = await fetch(`https://api.edamam.com/api/recipes/v2?${searchParams}`, payload)
        const response = await body.json();

        return response;
    },

    // Function to search for food items using the Edamam API. The query parameter is a string that contains the search query.
    async searchFood(query) {
        const searchParams = new URLSearchParams({
            app_id: foodAppID,
            app_key: foodAppKey,
            ingr: query,
            "nutrition-type": "cooking"
        }).toString();

        const payload = {
            headers: {accept: 'application/json'}
        }

        const body = await fetch(`https://api.edamam.com/api/food-database/v2/parser?${searchParams}`, payload)
        const response = await body.json();

        return response;
    }
}

export default edamamAPI;