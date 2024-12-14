<script setup lang="ts">
import type { Member } from '~/interfaces';

// === レイアウト読み込み /lauouts/ フォルダ内
definePageMeta({
    layout: "member"
});

// === ヘッダ情報変更 タブのタイトルを変更
const PAGE_TITLE = "会員リスト";
useHead({
    title: PAGE_TITLE
});

// データ取得
const memberList = useState<Map<number, Member>>("memberList");

</script>

<template>

    <!---
    <h1>会員管理</h1>
    -->

    <nav id="breadcrumbs">
        <ul>
            <li><NuxtLink v-bind:to="{name: 'index'}">TOPへ</NuxtLink></li>
            <li>{{ PAGE_TITLE }}</li>
        </ul>
    </nav>

    <section>
        <h2>{{ PAGE_TITLE }}</h2>

        <p>
            新規会員登録は<NuxtLink v-bind:to="{name: 'member-memberList-memberAdd'}">こちらから</NuxtLink>
        </p>

        <section>
            <ul>
                <li
                v-for="[id, member] in memberList"
                v-bind:key="id">

                <NuxtLink v-bind:to="{name: 'member-memberList-memberDetail-id', params:{id: id}}">
                    IDが{{ id }}番：{{ member.name }} さん
                </NuxtLink>

                </li>
            </ul>
        </section>

        <NuxtPage />

    </section>

</template>