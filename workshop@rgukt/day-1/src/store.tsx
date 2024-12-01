import { atom } from "recoil";

interface Todo {
    id : string;
    title: string;
    description: string;
    created_at: string;
    completed : boolean;
}

export const Todos = atom<Todo[]>({
    key : 'todos',
    default : []
})