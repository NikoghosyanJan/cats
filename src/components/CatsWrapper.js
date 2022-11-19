import { useDispatch, useSelector } from "react-redux"
import { getCatsByCategory } from "../store/middleWares";
import { sleectCatsData } from "../store/selectors"
import CatItem from "./CatItem";

export default function CatsWrapper({ page, setPage, activeCategory }) {
    const dispatch = useDispatch();
    const catsData = useSelector(sleectCatsData);

    const handleLoadMore = () => {
        setPage(page + 1)
        dispatch(getCatsByCategory(activeCategory, page + 1))
    }

    return (
        <div className="wrapper">
            <div className="container">
                {catsData.length ?
                    catsData.map((cat, index) =>
                        <CatItem
                            key={index + cat.id}
                            cat={cat}
                        />
                    ) :
                    <h1>Please, select a category</h1>
                }
            </div>
            {catsData.length ? <button
                className="load-more"
                onClick={handleLoadMore}
            >
                Load more
            </button> : ""}
        </div>
    )
}