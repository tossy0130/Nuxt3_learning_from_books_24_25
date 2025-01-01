<template>
    <!-- サイドバー -->
    <NLayout has-sider class="min-h-screen">
      <NLayoutSider :collapsed="isCollapsed" bordered class="min-h-screen">
        <div class="sidebar-content">
          <NMenu :options="menuOptions" />
          <button
            @click="toggleSidebar"
            style="background: none; border: none; cursor: pointer; color: inherit; margin-top: 16px;"
          >
            閉じる
          </button>
        </div>
      </NLayoutSider>
  
      <NLayout class="min-h-screen">
        <NLayoutHeader>
          <div class="py-[24px] px-[40px] flex flex-row items-center justify-end">
            <div class="flex flex-row items-center gap-[12px]">
              <span class="text-[14px]">{{ authStore.user?.name }}</span>
              <NButton @click="toggleSidebar">
                <span>サイドバーを切り替え</span>
              </NButton>
              <NButton v-on:click="logout">
                <span class="text-[14px]">ログアウト</span>
              </NButton>
            </div>
          </div>
        </NLayoutHeader>
  
        <NLayoutContent>
          <slot />
        </NLayoutContent>
      </NLayout>
    </NLayout>
  </template>
  
  <script setup lang="ts">
  import { ref, h } from 'vue';
  import {
    NLayout,
    NLayoutContent,
    NLayoutHeader,
    NLayoutSider,
    NMenu,
    NButton,
    type MenuOption,
  } from 'naive-ui';
  import { RouterLink } from 'vue-router';
  
  // サイドバーの状態を管理
  const isCollapsed = ref(false);

  const authStore = useAuthStore();
  
  // サイドバーの開閉を切り替える関数
  const toggleSidebar = () => {
    isCollapsed.value = !isCollapsed.value;
  };
  
  // メニューの項目
  const menuOptions: MenuOption[] = [
    {
      key: 'users',
      label: () => h(RouterLink, { to: '/users' }, { default: () => 'ユーザ' }),
    },
    {
      key: 'posts',
      label: () => h(RouterLink, { to: '/posts' }, { default: () => 'ポスト' }),
    },
  ];


  // === ログアウト処理
const logout = () => {
    authStore.clearUser();
    navigateTo('/login')
}

  </script>
  
  <style scoped>
  .sidebar-content {
    height: 100%; /* サイドバーの高さを親要素に合わせる */
    overflow-y: auto; /* 縦方向のスクロールを有効化 */
    padding: 8px; /* コンテンツに少し余白を追加 */
  }
  
  /* カスタムスクロールバー (オプション) */
  .sidebar-content::-webkit-scrollbar {
    width: 8px; /* スクロールバーの幅 */
  }
  
  .sidebar-content::-webkit-scrollbar-thumb {
    background-color: #aaa; /* スクロールバーの色 */
    border-radius: 4px; /* スクロールバーの角丸 */
  }
  
  .sidebar-content::-webkit-scrollbar-track {
    background-color: #f0f0f0; /* スクロールトラックの色 */
  }
  </style>
  