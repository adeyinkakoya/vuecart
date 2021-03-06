export default {

    SET_PRODUCTS: (state, products) => {
        state.products = products
    },
    SET_PRODUCT: (state, product) => {
        state.product = product
    },
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
    REMOVE_CART_ITEM: (state, index) => {
        state.cart.splice(index, 1)
    },

    ADD_PRODUCTS_TO_CART_FROM_DB: (state, payload) => {
        state.cart = payload
    }
}