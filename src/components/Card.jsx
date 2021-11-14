import { Link } from "react-router-dom"
import './Card.css'

export default function Card({ title, id, image, price, category }) {
    return <div className="card">
        <div className="inner">
            <div className="image">
                <img src={image} alt={title} />
            </div>
            <div className="details">
                <Link to={`product/${id}`}>
                    <div className="title">{title}</div>
                </Link>
                <div className="price">$ {price}</div>
                <div className="category">{category}</div>
            </div>
        </div>
    </div>
}
