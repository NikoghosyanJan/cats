import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCategories, getCatsByCategory } from "../store/middleWares"
import { selectCategories } from "../store/selectors"

export default function Categories({ setPage, activeCategory, setActiveCategory }) {
    const dispatch = useDispatch()
    const categories = useSelector(selectCategories);

    useEffect(() => {
        dispatch(getCategories())
    }, []);

    const selectCategory = (id) => {
        if (activeCategory !== id) {
            window.scrollTo(0, 0)
            setPage(1);
            setActiveCategory(id)
            dispatch(getCatsByCategory(id, 1))
        }
    }

    return (
        <nav className="categories-nav">
            <ul>
                {categories.length ? categories.map(category => (
                    <li
                        className={activeCategory === category.id ? "active" : ''}
                        onClick={() => { selectCategory(category.id) }}
                        key={category.id}
                    >
                        {category.name}
                    </li>
                )) : ""}
            </ul>
        </nav>
    )
}