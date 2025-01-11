<template>
    <h1>HOME</h1>

    <!-- エラーテスト -->
    <li>
        <NuxtLink v-bind:to="{name: 'errorHandlerBasic'}">
            エラー表示実験
        </NuxtLink>
    </li>

    <nav id="breadcrumbs">
        <ul>
            <li>
                HOME
            </li>
        </ul>
    </nav>

    <section>
        <p>
            <NuxtLink v-bind:to="{name: 'member-memberList'}">
                会員情報はこちら
            </NuxtLink>
        </p>
    </section>

</template>

<script setup lang="ts">

</script>