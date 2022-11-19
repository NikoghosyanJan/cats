import { ADD_CATS_DATA, SET_CATEGORIES, SET_CATS_DATA, SET_LOADING } from "../types";

const initialState = {
    categories: [],
    catsData: [],
    loading: false
};

export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories: payload
            };
        case SET_CATS_DATA:
            return {
                ...state,
                catsData: payload
            };
        case ADD_CATS_DATA:
            return {
                ...state,
                catsData: [
                    ...state.catsData,
                    ...payload
                ]
            };
        case SET_LOADING:
            return {
                ...state,
                loading: payload
            };
        default:
            return state;
    }
}