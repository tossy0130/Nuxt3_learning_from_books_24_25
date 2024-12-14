<script setup lang="ts">

// インターフェイス読み込み
import type { Member } from './interfaces';

// === ヘッダ情報を変更 start
// タイトル | タイトル２
const SITE_TITLE = "ヘッダ変更サンプル";
useHead({
  titleTemplate:(titleChunk: string|undefined) : string => {
    let title = SITE_TITLE;
    if(titleChunk != undefined) {
      title = `${titleChunk} | ${SITE_TITLE}}`;
    }
    return title;
  }
});
// === ヘッダ情報を変更 END


useState<Map<number, Member>>(
    "memberList",
    (): Map<number, Member> => {
      const memberListInit = new Map<number, Member>();

      memberListInit.set(1, {id: 1, name: "夏目智徹", email: "tossy@gmail.com", points: 99, note: "入会2年"});
      memberListInit.set(2, {id: 2, name: "ハム太郎", email: "hamu@gmail.com", points: 199, note: "入会5年"});
      memberListInit.set(3, {id: 3, name: "地面士", email: "zimen@gmail.com", points: 55, note: "入会1年"});

      return memberListInit;
    }
)

</script>

<template>
  <header>
      <h1>ネストコンポーネント 事例</h1>

      <!-- layouts/default.vue -->
       <NuxtLayout>
          <p>Nuxt Layout 内 pタグ</p>
       </NuxtLayout>

       <!-- pages/  -->
      <main>
        <NuxtPage />
      </main>
  </header>
</template>

<style>
main {
    border: blue 1px solid;
    padding: 10px;
}
#breadcrumbs ul li {
    display: inline;
    list-style-type: none;
}
#breadcrumbs {
    margin-left: 0px;
}
#breadcrumbs ul {
    padding-left: 0px;
}
#breadcrumbs ul .current {
    color: red;
}
#breadcrumbs ul li:before {
    content: " > ";
}
#breadcrumbs ul li:first-child:before {
    content: none;
}
</style>
