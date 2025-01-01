<template>
     <div v-if="posts" class="px-[40px] flex flex-col gap-[32px]">
        <div class="flex items-center justify-between">
            <span class="text-[24px] font-bold">Users</span>
          
        </div>
       <NDataTable remote :data="posts" :columns="columns" />
    </div>
</template>

<script setup lang="ts">


import { NDataTable, type DataTableColumns } from "naive-ui";
import type { Post } from "@/models/post";

//composables/api.ts 内の useApi 関数
const api = useApi();

const router = useRouter();

definePageMeta({
  layout: 'default',
  requireAuth: true,  // =========== このページには、認証が必要。 ===========
});

/*
const {data: posts } = useFetch<Post []>(
    "https://jsonplaceholder.typicode.com/posts"
);
*/

// === /posts のエンドポイントへアクセス　データ取得
const { data : posts } = useAsyncData<Post[]>(() => api('/posts'))

const columns = computed<DataTableColumns<Post>>(() => [ 
    {
        key: "id",
        title: 'ID',
        render: (row) => row.id,
    },
    {
        key: 'title',
        title: 'Title',
        render: (row) => row.title,
    },
    {
        key: 'body',
        title: 'Body',
        render: (row) => row.body,
    },
]);

</script>