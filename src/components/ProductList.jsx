import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";

import { setProducts } from './../redux/actions/product-actions'
import { getProducts } from "../utils";

import './ProductList.css'

export default function ProductList() {
    const products = useSelector(state => state.data.products)
    const dispatch = useDispatch()

    useEffect(() => {
        getProducts()
            .then(data => {
                dispatch(setProducts(data))
            })
            .catch(err => console.error(err))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const productCards = products.map(
        product => <Card key={product.id} {...product} />)

    return <div className='productList'>{productCards}</div>
}
