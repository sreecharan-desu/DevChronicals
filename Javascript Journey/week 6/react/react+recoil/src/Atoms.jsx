import { atom, atomFamily, selector } from "recoil";

export const TitleAtom = atom({
    key : "TitleAtom",
    default : ""
})

export const DescriptionAtom = atom({
    key : "DescriptionAtom",
    default : ""
})

export const DisplaySelector = selector({
    key : 'DisplaySelector',
    get : ({get})=>{
        const TitleValue = get(TitleAtom)
        const DescriptionValue = get(DescriptionAtom)
        return {"Title" : TitleValue,"Description" : DescriptionValue}
    }
})


export const Todos = atom({
    key : 'Todosfamily',
    default : []
})

export const filterValue = atom({
    key : "filterValue",
    default : ' '
})


export const FilterSeector = selector({
    key : 'FilterSeector',
    get : ({get})=>{
        const filter = get(filterValue)
        const TodosArray = get(Todos)
        let filteredTodos = []
        for(let i = 0; i < TodosArray.length ;i++){
            if(TodosArray[i].Title.includes(filter) || TodosArray[i].Description.includes(filter))
                filteredTodos = [...filteredTodos,TodosArray[i]]
            else
                continue
        }
        console.log(filteredTodos)
        return filteredTodos;
    }
})