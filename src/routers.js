import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import Loader from './components/Loader';
import { selectLoading } from "./store/selectors";

const Cats = lazy(() => import("./pages/cats"));

export default function Routers() {
    const loading = useSelector(selectLoading);

    return (
        <Suspense fallback={<Loader />}>
            {loading ? <Loader /> : ""}
            <Routes>
                <Route path="/*" element={<Cats />} />
            </Routes>
        </Suspense>
    )
}