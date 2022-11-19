import { useState } from "react";
import Categories from "../../components/Categories";
import CatsWrapper from "../../components/CatsWrapper";
import "./style.scss"

export default function Cats() {
    const [page, setPage] = useState(1);
    const [activeCategory, setActiveCategory] = useState("");

    return (
        <main className="page-main">
            <Categories
                setPage={setPage}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />
            <CatsWrapper
                activeCategory={activeCategory}
                page={page}
                setPage={setPage}
            />
        </main>
    )
}