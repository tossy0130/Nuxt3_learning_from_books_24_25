import type {Member} from "@/interfaces";

export function createMemberList(): Map<number, Member> {
	const memberListInit = new Map<number, Member>();
	memberListInit.set(33, {id: 33, name: "夏目智徹", email: "tossy@example.com", points: 100, note: "初回入会特典あり。"});
	memberListInit.set(55, {id: 55, name: "ハリソン山中", email: "hari@example.com", points: 67});
    
	return memberListInit;
}
