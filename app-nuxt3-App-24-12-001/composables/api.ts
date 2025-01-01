export const useApi = () => {
    const {$api} = useNuxtApp()
    return $api
}

// アプリケーションへ提供する。