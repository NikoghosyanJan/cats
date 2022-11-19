import { ADD_CATS_DATA, SET_CATEGORIES, SET_CATS_DATA, SET_LOADING } from "../types";

export const setCategories = (payload) => ({
    type: SET_CATEGORIES,
    payload
})

export const setCatsData = (payload) => ({
    type: SET_CATS_DATA,
    payload
})

export const addCatsData = (payload) => ({
    type: ADD_CATS_DATA,
    payload
})

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload
})