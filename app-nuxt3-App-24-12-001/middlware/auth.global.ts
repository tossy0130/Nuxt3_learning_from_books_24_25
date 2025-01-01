export default defineNuxtRouteMiddleware((to) => {7

    // === 認証画面で、ログインしていなかったら、リダイレクト処理
    const authStore = useAuthStore()
    const redirect = authStore.validateRoute(to) 
    if(redirect) {
        return navigateTo(redirect);
    }
})
