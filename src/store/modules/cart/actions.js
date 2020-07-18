import { api } from '../../../api/base'
const CART_ENDPOINT = "cart"


export default {

    addProductToCart: (context, payload) => {
        context.commit('ADD_PRODUCT_TO_CART', payload)
        api.post(CART_ENDPOINT, {
            product_id: payload.product.id
        })
    },
    getCartFromDB: (context) => {
        api.get(CART_ENDPOINT)
            .then(res => context.commit('ADD_PRODUCTS_TO_CART_FROM_DB', res.data))
            .catch(err => console.log(err))
    },
    removeProductFromCart: (context, producttoremove) => {
        context.commit('REMOVE_PRODUCT_FROM_CART', producttoremove)
        api.delete(`${CART_ENDPOINT}/${producttoremove.id}`)
    },
    clearEntireCart: (context) => {
        context.commit('CLEAR_ENTIRE_CART')
        api.delete(CART_ENDPOINT)
    }
}