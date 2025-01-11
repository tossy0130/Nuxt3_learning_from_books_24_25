import type { Member,ReturnJSONMembers } from "~/interfaces";

export default defineEventHandler(
    async (event): Promise<ReturnJSONMembers> => {
        
        const body = await readBody(event);
        const member = body as Member;
        console.log(member);

        // 空の MAP を用意
        let memberList = new Map<number, Member>();

        const storage = useStorage();
        const memberListStorage = await storage.getItem("local:member-management_members");

        if(memberListStorage != null) {

            // JSON => MAP へ変換
            memberList = new Map<number, Member>(memberListStorage as any);
        }

        memberList.set(member.id, member);
        

        // MAP => JSON （配列オブジェクト）  ...memberList
        await storage.setItem("local:member-management_members", [...memberList]);

        return {
            result: 1,
            data: [member]
        };
    }
);

