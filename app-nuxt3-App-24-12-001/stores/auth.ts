import type { User } from "@/models/user"
import type { RouterLocationNormalized } from '#vue-router'

// === ユーザ更新処理
export const useAuthStore = defineStore(
    'auth',
    () => {
        const user = ref<User>()

        // === ユーザが、ログインしているか、していないかの判定
        const isLogin = computed<boolean>(() => !!user.value)

        // === ログイン必須のページで、ログインしていない場合は、リダイレクトで飛ばす
        const validateRoute = (route: RouterLocationNormalized) => {
            // ログインしていない時の処理
            if (route.meta.requiresAuth && !isLogin.value) {
                return '/login'
            }
        }

        const setUser = (newUser: User) => {
            user.value = newUser
        }

        const clearUser = () => {
            user.value = undefined
        }

        return {
            user,
            setUser,
            clearUser,
            validateRoute,
        }

    }
)