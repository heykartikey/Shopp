const API = 'https://fakestoreapi.com/products'

export const getProducts = async () => {
    const response = await fetch(API)
    return await response.json()
}

export const getProductDetail = async pid => {
    const response = await fetch(`${API}/${pid}`)
    return await response.json()
}
