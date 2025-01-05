import type {Member} from "@/interfaces"; // データ収納型 : DBのテーブルみたいなもの
import {createMemberList} from "@/membersDB"; // データ


/*
 defineEventHandler で return で返すと、
 JSON.stringify() で、JSON化しなくても、配列やオブジェクトを return
 するだけで、 JSON 化　される。
*/
export default defineEventHandler(
    (event): Member[] => {
        // membersDB を利用して、会員リスト情報 Map オブジェクトを生成
        const memberList = createMemberList();

        // 上記の Map オブジェクトの値部分を取得
        const memberListValues = memberList.values();

        // 会員情報 Map オブジェクトの値部分を、配列に変換
        const memberListArray = Array.from(memberListValues);

        // 会員情報の配列を返す
        return memberListArray;

    }

);
