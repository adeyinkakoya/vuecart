import axios from 'axios'

export default {
    getProducts: (context) => {
        axios.get('http://127.0.0.1:8000/api/products')
            .then(res => context.commit('SET_PRODUCTS', res.data))
            .catch(err => console.log(err))
    },
    getProduct: (context, id) => {
        axios.get(`http://127.0.0.1:8000/api/products/${id}`)
            .then(res => context.commit('SET_PRODUCT', res.data))
            .catch(err => console.log(err))
    },
    addProductToCart: (context, payload) => {
        context.commit('ADD_PRODUCT_TO_CART', payload)
        axios.post('http://127.0.0.1:8000/api/cart', {
            product_id: payload.product.id
        })

    },
    getCartFromDB: (context) => {

        axios.get('http://127.0.0.1:8000/api/cart')
            .then(res => context.commit('ADD_PRODUCTS_TO_CART_FROM_DB', res.data))
            .catch(err => console.log(err))
    }


}