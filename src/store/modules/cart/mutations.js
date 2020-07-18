export default {

    ADD_PRODUCT_TO_CART: (state, payload) => {

        //let productId = payload.product.id
        //loop through the cart array and return the row where product id is the incoming payload product id
        let productAlreadyInCart = state.cart.find((item) => {
            return item.product.id == payload.product.id
        })
        if (productAlreadyInCart) {
            productAlreadyInCart.quantity += payload.quantity // += means add the value of the one on the right to the one on the left

        } else {
            state.cart.push(payload)
        }

    },

    // REMOVE_CART_ITEM: (state, index) => {
    //     state.cart.splice(index, 1)
    // },

    ADD_PRODUCTS_TO_CART_FROM_DB: (state, payload) => {
        state.cart = payload
    },
    REMOVE_PRODUCT_FROM_CART: (state, producttoremove) => {
        state.cart = state.cart.filter((item) => {
            return item.product.id != producttoremove.id
        })
    },
    CLEAR_ENTIRE_CART: (state) => {
        state.cart = []
    }

}