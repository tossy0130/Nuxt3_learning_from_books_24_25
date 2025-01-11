// データ形式読み込み
import type {ReturnJSONMembers, Member} from "@/interfaces";

// データ読み込み
import {createMemberList} from "@/membersDB";

export default defineEventHandler(
 //   (event): ReturnJSONMembers => {
 async (event): Promise<ReturnJSONMembers> => {

    // 空の Map オブジェクト用意
    let memberList = new Map<number, Member>();
 //   const memberList = createMemberList();

    // ストレージの用意
    const storage = useStorage();

    // ストレージから、会員リスト情報JSONオブジェクトを取得
    const memberListStorage = await storage.getItem("local:member-management_members");

    // 会員情報オブジェクト JSON オブジェクトが存在するなら
    if(memberListStorage != null) {
        // JSON オブジェクトを MAP へ変換    JSON => MAP
        memberList = new Map<number, Member>(memberListStorage as any)
    }
    
    const memberListValues = memberList.values();

    // Array.from で配列へ変換   abcde などの文字列が、 ['a', 'b', 'c', 'd', 'e'] になる。
    const memberListArray = Array.from(memberListValues);

    return {
        result: 1,
        data: memberListArray
    }

 }
      
    
);

