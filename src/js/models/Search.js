import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query
    };

    // https://www.edamam.com   // Website get api from him
    //`https://api.edamam.com/search?q=${this.query}&app_id=${appID}&app_key=${key}`
    // const key = '682b3a9204cc61246d2ea70f3bfb14d8';
    // const appID = 'c7241c05';

    async getResults() {
        const key = '19ea937735b512dfc8e085c347e015a4';

        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(this.hits);
        } catch (e) {
            console.log(e);
        }
    };
};