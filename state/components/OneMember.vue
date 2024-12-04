<script setup lang="ts">

import type { Member } from '@/interfaces';

// Props インターフェイスを定義
interface Props {
    id : number;
}

// Props オブジェクト設定
const props = defineProps<Props>();

// 会員情報リストを　ステートから取得
const memberList = useState<Map<number, Member>>("memberList");
// 該当する会員情報の取得
const member = memberList.value.get(props.id) as Member;

// 備考（note） を加工する算出プロパティ
const localNote = computed(
    (): string => {
        let localNote = member.note;
        // 備考がない場合
        if(localNote == undefined) {
            localNote = '--';
        }
        return localNote;
    }
);

// ポイント加算　ボタン　クリック
const pointUp = (): void => {
    member.points+=1;
}

</script>

<template>
    <section class="box">
        <h4>{{ member.name }} さん</h4>
        <dl>
            <dt>ID</dt>
            <dd>{{ id }}</dd>

            <dt>メールアドレス</dt>
            <dd>{{ member.email }}</dd>

            <dt>保有ポイント</dt>
            <dd>{{ member.points }}</dd>

            <dt>備考</dt>
            <dd>{{ localNote }}</dd>
          
        </dl>

        <button v-on:click="pointUp">ポイント加算</button>

    </section> <!-- ========== section END ======== -->
</template>

<style scoped>

.box { border: green 1px solid;margin: 10px;}

</style>

