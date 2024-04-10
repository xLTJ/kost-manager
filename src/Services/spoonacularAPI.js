const APIKey = import.meta.env.VITE_SPOONACULARAPIKEY;

const spoonacularAPI = {
    async searchRecipe(options) {
        options[ 'apiKey' ] = APIKey;

        const searchParams = new URLSearchParams(options).toString();
        const payload = {
            headers: {accept: 'application/json'}
        }

        const body = await fetch(`https://api.spoonacular.com/recipes/complexSearch?${searchParams}`, payload)
        const response = await body.json();

        return response;
    }
}

export default spoonacularAPI;