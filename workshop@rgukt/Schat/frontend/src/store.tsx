import { atom } from "recoil";

type Conversation = {
    user : string;
    model : string;
}

export const conversation = atom<Conversation[]>({
    key : 'conversation',
    default : []
})