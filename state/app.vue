<script setup lang="ts">
import type { Member } from '@/interfaces';

// 会員情報リストをステートとして用意
useState<Map<number, Member>>(
  "memberList", 
  (): Map<number, Member> => {
    const memberListInit = new Map<number, Member>();

    memberListInit.set(1, {id: 1, name: "夏目智徹", email: "t@mail.com", points: 89, 
    note: "入会９か月" });

    memberListInit.set(2, {id: 2, name: "チンギスハーン", email: "ttt@mail.com", points: 67, 
    note: "入会５か月" });

    memberListInit.set(3, {id: 3, name: "バモスるい", email: "bbb@mail.com", points: 99, 
    note: "勧誘中" });

    memberListInit.set(4, {id: 4, name: "るい北澤", email: "jjjj@mail.com", points: 20, 
    note: "" });

    memberListInit.set(5, {id: 5, name: "ハリソン山中", email: "hari@mail.com", points: 50, 
    note: "強制退会" });

    return memberListInit;
  }
);
</script> 

<template>
  <div>
    <TheBaseSection />
  </div>
</template>
