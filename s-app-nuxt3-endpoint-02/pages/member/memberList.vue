<script setup lang="ts">

import type { Member } from '~/interfaces';

definePageMeta({
    layout: "member",
});


// ====== エンドポイントから、データを取得 ======
// const asyncData = useLazyFetch("/api/getMemberList");

const asyncData = useLazyFetch("/member-management/members");

// const memberList = asyncData.data;
const responseData = asyncData.data;
const pending = asyncData.pending;

const memberList = computed(
    (): Member[] => {
        
        // 空の配列を用意
        let returnList: Member[] = [];

        // null でなければ値を取得
        if(responseData.value != null) {
            returnList = responseData.value.data;
        }
        return returnList;
    }
);

// 会員リストが空かどうかの判定
const isEmptyList = computed(
    (): boolean => {
      return memberList.value.length == 0;
    }
);

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
            <NuxtLink v-bind:to="{name: 'member-memberAdd'}">新規登録</NuxtLink>
        </p>

        <!-- エンドポイントから、データを取得して表示する -->
        <p v-if="pending">データ取得中...</p>
        <section v-else>
            <ul>

                <!-- 会員リストが空の場合 -->
                 <li v-fi="isEmptyList">
                    会員情報は存在しません。
                 </li>

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