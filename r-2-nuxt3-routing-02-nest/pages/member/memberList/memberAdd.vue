<script setup lang="ts">

import type { Member } from '~/interfaces';

// === ページタイトル
const PAGE_TITLE = "会員情報追加";
definePageMeta({
    layout: "member"
});

useHead({
    title: PAGE_TITLE
});

const router = useRouter();

const memberList = useState<Map<number, Member>>("memberList");

const member: Member = reactive(
    {
        id: 0,
        name: "",
        email: "",
        points: 0,
        note: ""
    }
);

const onAdd = (): void => {
    memberList.value.set(member.id, member);
    // リダイレクト処理
    router.push({name: "member-memberList"});
}

</script>

<template>
    <section>
        <form v-on:submit.prevent="onAdd">
            <dl>

                <dt>
                    <label for="addId">ID&nbsp;</label>
                </dt>
                <dd>
                    <input type="number" id="addId" v-model.number="member.id" required>
                </dd>

                <dt>
                    <label for="addName">名前&nbsp;</label>
                </dt>
                <dd>
                    <input type="text" id="addName" v-model="member.name" required>
                </dd>

                <dt>
                    <label for="addEmail">メールアドレス&nbsp;</label>
                </dt>
                <dd>
                    <input type="email" id="addEmail" v-model="member.email" required>
                </dd>

                <dt>
                    <label for="addPoints">ポイント</label>
                </dt>
                <dd>
                    <input type="number" id="addPoints" v-model:="member.points" required>
                </dd>

                <dt>
                    <label for="備考"></label>
                </dt>
                <dd>
                    <textarea id="addNote" v-model="member.note"></textarea>
                </dd>
            </dl>

            <button type="submit">登録</button>

        </form>
    </section>
</template>