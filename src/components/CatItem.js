export default function CatItem({ cat }) {
    return (
        <div className="cat-item">
            <img
                title={cat.id}
                src={cat.url}
                alt={cat.id}
            />
        </div>
    )
}