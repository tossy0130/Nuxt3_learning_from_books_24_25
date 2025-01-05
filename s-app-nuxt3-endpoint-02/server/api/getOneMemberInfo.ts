import type { Member } from "~/interfaces";
import { createMemberList } from "~/membersDB";

// 
export default defineEventHandler(
    (event): Member => {

        // クエリパラメータを取得
        const query = getQuery(event);
        
        // Map オブジェクトを生成
        const memberList = createMemberList();

        // クエリパラメータの IDを数値へ変換
        const idNo = Number(query.id);

        // クエリパラメータに該当する、会員の情報を取得
        const member = memberList.get(idNo) as Member;

        return member;

    }
);