<template>

    <NForm ref="formRef" :model="formValue" :rules="rulesform">
        <div class="flex flex-col gap-[24px]">
            <NFormItem label="ID" path="id">
                <NInput v-model:value="formValue.id" />
            </NFormItem>

            <NFormItem label="パスワード" path="id">
                <NInput v-model:value="formValue.password" :type="'password'" />
            </NFormItem>

            <NButton @click="login">
                <sapn class="text-[14px]">ログイン</sapn>
            </NButton>
        </div>
    </NForm>
    
</template>

<script setup lang="ts">

import { NButton, NForm, NFormItem, NInput,
    type FormInst,
    type FormRules,
 } from 'naive-ui';

 import type { User } from '@/models/user';
import { useAuthStore } from '~/stores/auth';

// import { publicAssetsURL } from 'nuxt/dist/core/runtime/nitro/paths';

// レイアウト選択
definePageMeta({
    layout: 'static',
    requireAuth: false,  // =========== このページには、認証が必要なし、※認証いらない ===========
})


// ====================== form の値設定 
interface FormValue {
    id: string;
    password: string;
}

// 値初期化
const emptyFormValue: FormValue = {
    id: "",
    password: "",
}

// フォームと連携 model
const formValue = ref<FormValue>(emptyFormValue);
// フォーム連携
const formRef = ref<FormInst>();



const api = useApi();
const router = useRouter();

// ログイン時、ユーザ更新
const authStore = useAuthStore();

// submit された時の処理
const login = async () => {

    try{
        // ユーザ取得
        const res = await api<User>(`/users/${formValue.value.id}`)  
        console.log(res);

        // ユーザの更新
        authStore.setUser(res);

        // 画面遷移
        router.push("/")

        //=== バリデーション　実行
        //  await formRef.value?.validate()
        // console.log(formValue.value);
    } catch( error ) {
        // 例外処理
        console.log(error);
    }

    // console.log(formValue.value);
};   

// ========= バリデーション の記述
const rulesform: FormRules = {
    id: {
        required: true,
        message: 'ID は必須項目です。',
    },
    password: {
        required: true,
        message: 'パスワードは、必須項目です。',
    },
};




</script>