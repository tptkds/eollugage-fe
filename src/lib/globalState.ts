import { atom } from 'jotai'

// 사장이면 true, 직원이면 false
const isOwnerAtom = atom<boolean>(true)
