import {atom} from "recoil"

export const AppBarStroe = atom({
    key : 'AppBar',
    default : ''
})


export const balance = atom({
    key : 'balabce',
    default : '00.00'
})

export const Searchbar = atom({
    key : 'SearchBar',
    default : ''
})


export const users = atom({
    key : 'users',
    default : []
})