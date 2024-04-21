const appID = 'f83b8f14';
const appKey = '6387510eb571594260811899498ddeda';

const edamamAPI = {
    async searchRecipes(options) {
        console.log(options)

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
    }
}

export default edamamAPI;