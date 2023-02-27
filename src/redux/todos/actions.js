import { ADDED, TOGGLED, COLORSELECTED, DELETED, ALLCOMPLETED, CLEARCOMPLETED, LOADED } from "./actionTypes";

export const added = (todoText) => {
    return {
        type: ADDED,
        payload: todoText
    }
}
export const loaded = (todos) => {
    return {
        type: LOADED,
        payload: todos,
    }
}
export const toggled = (todoId) => {
    return {
        type: TOGGLED,
        payload: todoId
    }
}
export const colorSelected = (todoId, color) => {
    return {
        type: COLORSELECTED,
        payload: {
            todoId,
            color
        }
    }
}
export const deleted = (todoId) => {
    return {
        type: DELETED,
        payload: todoId
    }
}
export const allcompleted = () => {
    return {
        type: ALLCOMPLETED
    }
}
export const clearcompleted = () => {
    return {
        type: CLEARCOMPLETED
    }
}