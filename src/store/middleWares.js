import { addCatsData, setCategories, setCatsData, setLoading } from "./actions";

export const getCategories = ()=>{
    return dispatch => {
        dispatch(setLoading(true))
        fetch("https://api.thecatapi.com/v1/categories")
            .then(res => res.json())
            .then(json => {
                dispatch(setCategories(json))
                dispatch(setLoading(false))
            })
    }
}

export const getCatsByCategory = (id, page)=>{
    return dispatch => {
        dispatch(setLoading(true))
        fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${id}`)
            .then(res => res.json())
            .then(json => {
                dispatch(page === 1 ? setCatsData(json) : addCatsData(json))
                dispatch(setLoading(false))
            })
    }
}