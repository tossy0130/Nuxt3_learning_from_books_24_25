<template>

    <section>
        エラーを<button v-on:click="onThrowsErrorClick">発生</button>
    </section>

</template>

<script setup lang="ts">

const onThrowsErrorClick = (): void => {
    throw createError("疑似エラー発生");
};

</script>