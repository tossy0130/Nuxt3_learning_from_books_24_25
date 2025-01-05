// データ形式読み込み
import type {ReturnJSONMembers} from "@/interfaces";

// データ読み込み
import {createMemberList} from "@/membersDB";

export default defineEventHandler(
    (event): ReturnJSONMembers => {
        const memberList = createMemberList();
        const memberListValues = memberList.values();
        const memberListArray = Array.from(memberListValues);

        return {
            result: 1,
            data: memberListArray
        }
    }
);

