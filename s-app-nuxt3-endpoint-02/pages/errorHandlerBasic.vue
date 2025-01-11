<template>

<!-- エラー用 -->
<NuxtErrorBoundary>

    <!-- エラー用 -->
    <ErroGeneratorBasic />

    <template v-slot:error="errorProps">
        <p>エラーが発生しました。</p>
        <p>{{ errorProps.error }}</p>

        <p>
            <NuxtLink v-bind:to="{name: 'index'}">
                戻る
            </NuxtLink>
        </p>

    </template>

</NuxtErrorBoundary>


</template>

<script setup lang="ts">


</script>