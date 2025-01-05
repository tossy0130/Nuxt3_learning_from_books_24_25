// データ形式取得
import type {Member, ReturnJSONMembers} from "@/interfaces";

// データ取得
import {createMemberList} from "@/membersDB";

export default defineEventHandler(
    (event): ReturnJSONMembers => {
        // ルートパラメータの取得
        const params = event.context.params;

        // 一覧取得
        const memberList = createMemberList();

        // ルートパラメータの id を数値に変換
        // params!.id  =>  ! は、undefinedの場合は強制的に、undefinedじゃないとする。
        const idNo = Number(params!.id);

        // idに該当する個別データの取得
        const member = memberList.get(idNo) as Member;

        return {
            result: 1,
            data: [member]
        }
    }
)