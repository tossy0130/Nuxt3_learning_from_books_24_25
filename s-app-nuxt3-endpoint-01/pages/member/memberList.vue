<script setup lang="ts">

definePageMeta({
    layout: "member",
});


// ====== エンドポイントから、データを取得 ======
const asyncData = useLazyFetch("/api/getMemberList");

const memberList = asyncData.data;
const pending = asyncData.pending;

</script>

<template>

    <nav id="breadcrumbs">
        <ul>
            <li><NuxtLink v-bind:to="{name: 'index'}">HOME</NuxtLink></li>
            <li>会員リスト</li>
        </ul>
    </nav>

    <section>
        <h2>会員リスト</h2>

        <p>
            <NuxtPage v-bind:to="{name: 'member-memberAdd'}">新規登録</NuxtPage>
        </p>

        <!-- エンドポイントから、データを取得して表示する -->
        <p v-if="pending">データ取得中...</p>
        <section v-else>
            <ul>
                <li 
                    v-for="member in memberList"
                    v-bind:key="member.id">

                    <NuxtLink v-bind:to="{name: 'member-memberDetail-id', params: {id: member.id}}">
                        ID：{{ member.id }} Name:{{ member.name }}さん。
                    </NuxtLink>

                </li>
            </ul>
        </section>

    </section>

</template>