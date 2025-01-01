<template>
    <div v-if="users" class="px-[40px] flex flex-col gap-[32px]">
        <div class="flex items-center justify-between">
            <span class="text-[24px] font-bold">Users</span>
            <!-- 新規登録 -->
             <NButton @click="router.push('/users/new')">
                <sapn class="text-[14px]">新規登録</sapn>
             </NButton>
        </div>
       <NDataTable remote :data="users" :columns="columns" />
    </div>
</template>

<script setup lang="ts">

import { NButton, NDataTable, type DataTableColumns } from "naive-ui";
import type { User } from '@/models/user';

//composables/api.ts 内の useApi 関数
const api = useApi();

// === ルーティング情報取得
const router = useRouter();

definePageMeta({
  layout: 'default',
  requireAuth: true,  // =========== このページには、認証が必要。 ===========
});

/*
// === 非同期処理で　値取得
// ====== useFetch
// === /posts のエンドポイントへアクセス データ取得
const { data: users } = useFetch<User []> ( 
    "https://jsonplaceholder.typicode.com/users"
);
*/

// === /posts のエンドポイントへアクセス　データ取得
const { data : users } = useAsyncData<User[]>(() => api('/users'))


// === 表示用 データ加工
const columns = computed<DataTableColumns<User>>(() => [
    // 1データ目    
    {
        key: "id",
        title: "ID",
        render: (row) => row.id,
    },
    // 2データ目
    {
        key: "name",
        title: "Name",
        render: (row) => row.name,
    },
    // 3データ目
    {
        key: "email",
        title: "Email",
        render: (row) => row.email,
    },
    // 4データ目
    {
        key: "website",
        title: "Website",
        render: (row) => row.website,
    }
]);

</script>