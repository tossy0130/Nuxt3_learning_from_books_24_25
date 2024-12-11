<script setup lang="ts">
import type { Member } from './interfaces';

// 会員情報リストをステートとして用意
useState<Map<number, Member>> (
  "memberList",
  (): Map<number, Member> => {
    const memberListInit = new Map<number, Member>();

    // メンバー 01
    memberListInit.set(1, {id: 1, name: "夏目智徹", email: "t@mail.com", points: 89, 
    note: "入会９か月" });

      // メンバー 02
      memberListInit.set(2, {id: 2, name: "大空つばさ", email: "oo@mail.com", points: 59, 
    note: "入会2か月" });

       // メンバー 03
       memberListInit.set(3, {id: 3, name: "岬太郎", email: "misaki@mail.com", points: 69, 
    note: "入会5か月" });

    return memberListInit;
  }
)

</script>

<template>
  <header>
      <h1>ルーティングサンプル</h1>

      <NuxtPage />
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

#breadcrumbs ul li::before {
  content: " > ";
}

#breadcrumbs ul li:first-child::before {
  content: none;
}

</style>
