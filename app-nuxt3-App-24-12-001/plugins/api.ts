export default defineNuxtPlugin(() => {
    const api = $fetch.create({
        baseURL: 'https://jsonplaceholder.typicode.com/'
    })

    return {
        provide: {
            api, 
        }
    }
});

// === 共通化