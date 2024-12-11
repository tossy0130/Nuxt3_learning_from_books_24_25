<script setup lang="ts">

import type { Member } from '@/interfaces';

// 会員情報を取得
const memberList = useState<Map<number, Member>>('memberList');

</script>

<template>
    <h1>会員管理</h1>
    <nav id="breadcrumbs">
        <li><NuxtLink v-bind:to="{name: 'index'}">TOP</NuxtLink></li>
        <li>会員リスト</li>
    </nav>

    <section>
        <h2>
            会員リスト
        </h2>
        <p>
            新規会員登録はこちらから
        </p>

        <section>
            <ul>
                <li 
                    v-for="[id, member] in memberList"
                    v-bind:key="id">

                    <NuxtLink v-bind:to="{name: 'member-memberDetail-id', params: {id: id}}">
                    IDが{{ id }}の{{ member.name }}さん
                    </NuxtLink>
                </li>
            </ul>
        </section>
    </section>
</template>