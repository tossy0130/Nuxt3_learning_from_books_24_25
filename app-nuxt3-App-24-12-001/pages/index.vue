<template>  
    <div class="min-h-screen flex items-center justify-center">
    <NButton>
        <span>hoge</span>
    </NButton>
    </div>
</template>

<script setup lang="ts">
import {NButton} from 'naive-ui';

definePageMeta({
  layout: 'default',
  requireAuth: true,  // =========== このページには、認証が必要。 ===========
});

// 画面遷移
const router = useRouter();

onMounted(() => router.push("/users"));

</script>