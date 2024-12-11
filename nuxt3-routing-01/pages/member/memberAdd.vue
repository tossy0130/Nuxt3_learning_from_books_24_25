<script setup lang="ts">

import type { Member } from '~~/interfaces';

// ルータオブジェクトを取得
const router = useRoute();

// 会員情報取得
const memberList = useState<Map<number, Member>>('memberList');

// 入力データと同期させる、Memberオブジェクト
const member: Member = reactive ( 
    {
    id: 0,
    name: "",
    email: "",
    points: 0,
    note: ""
    }
);

// フォームがサブミットされた時の処理
const onAdd = (): void => {
    memberList.value.set(member.id, member);
    router.push({name: "member-memberList"});
};

</script>

<template>
    <h1>会員情報</h1>

    <nav id="breadcrumbs">
        <ul>
            <li><NuxtLink v-bind:to="{name: 'indxt'}">TOP</NuxtLink></li>
            <li><NuxtLink v-vind:to="{name: 'member-memberList'}">会員リスト</NuxtLink></li>
        </ul>
    </nav>

    <section>
        <h2>会員情報追加</h2>

    </section>

</template>