<script setup lang="ts">

// Map データ読み込み
import type { Member } from '@/interfaces';

// === ページヘッダ情報 タブのタイトルを変更
const PAGE_TITLE = "会員詳細情報";
useHead({
    title: PAGE_TITLE
});

const route = useRoute()

// 下の computed で取得するために、 Map 全体の値を取得
const memberList = useState<Map<number, Member>>("memberList");

// ID で特定のユーザを取得
const member = computed(
    (): Member => {
        const id = Number(route.params.id); // 特定の id 取得
        return memberList.value.get(id) as Member;
    }
);

// 備考処理
const localNote = computed(
    (): string => { 
        let localNote = "--";
        // 備考が、undefined じゃなかったら、 値を入れる
        if(member.value.note != undefined) {
            localNote = member.value.note;
        }
        return localNote;
    }
);

</script>

<template>
    <section>
        <h2>{{ PAGE_TITLE }}</h2>

        <dl>
            <dt>ID</dt>
            <dd>{{ member.id }}</dd>

            <dt>名前</dt>
            <dd>{{ member.name }}</dd>

            <dt>メールアドレス</dt>
            <dd>{{ member.email }}</dd>

            <dt>保有ポイント</dt>
            <dd>{{ member.points }}</dd>

            <dt>備考</dt>
            <dd>{{ localNote }}</dd>
        </dl>
    </section>
</template>