import { atom } from "recoil";


export const fromAcc = atom({
    key : 'fromAcc',
    default : null
})

export const toAcc = atom({
    key : 'toAcc',
    default : null
})

export const transactionSatus = atom({
    key : 'transactionStatus',
    default : {
        start : false,
        success : true
    }
})

export const amount = atom({
    key : 'amount',
    default : ''
})