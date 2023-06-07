import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { selectedProduct } from "../redux/actions/product-actions"
import { getProductDetail } from "../utils"

import './ProductDetail.css'

const DetailCard = ({ id, image, title, description }) => (
    <div className="wrapper">
        <div className="image">
            <img src={image} alt={title} />
        </div>
        <div className="info">
            <div className="title">{title}</div>
            <div className="desc">{description}</div>
        </div>
    </div>
)

export default function ProductDetail() {
    const { pid } = useParams()
    let product = useSelector(state => state.selected)
    const dispatch = useDispatch()

    useEffect(() => {
        getProductDetail(pid)
            .then(data => dispatch(selectedProduct(data)))
            .catch(err => console.error(err))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pid])
    
    if (+pid !== product.id) product = {}

    return <div id='main'><DetailCard {...product} /></div>
}
