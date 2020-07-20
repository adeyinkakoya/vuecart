import { api } from '../../../api/base'
const CART_ENDPOINT = "cart"


export default {

    addProductToCart: (context, payload) => {
        context.commit('ADD_PRODUCT_TO_CART', payload)
        api.post(CART_ENDPOINT, {
            product_id: payload.product.id
        })

        context.commit('PUSH_NOTIFICATION', {
                id: (Math.random().toString(36) + Date.now().toString(36)).substring(2),
                type: "success",
                message: "Product Succesfully added to cart"
            }, { root: true }) // Add the 3rd parameter to specify we are moving to the root/base state and not the cart module local state.

    },
    getCartFromDB: (context) => {
        api.get(CART_ENDPOINT)
            .then(res => context.commit('ADD_PRODUCTS_TO_CART_FROM_DB', res.data))
            .catch(err => console.log(err))
    },
    removeProductFromCart: (context, producttoremove) => {
        context.commit('REMOVE_PRODUCT_FROM_CART', producttoremove)
        api.delete(`${CART_ENDPOINT}/${producttoremove.id}`)
        context.commit("PUSH_NOTIFICATION", {
            id: (Math.random().toString(36) + Date.now().toString(36)).substring(2),
            type: "danger",
            message: "Product removed from cart"
        }, { root: true })
    },
    clearEntireCart: (context) => {
        context.commit('CLEAR_ENTIRE_CART')
        api.delete(CART_ENDPOINT)
        context.commit("PUSH_NOTIFICATION", {
            id: (Math.random().toString(36) + Date.now().toString(36)).substring(2),
            type: "danger",
            message: "Cart Empty"
        }, { root: true })
    }
}