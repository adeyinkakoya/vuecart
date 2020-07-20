export default {
    SET_PRODUCTS: (state, products) => {
        state.products = products
        state.loading = false
    },
    SET_PRODUCT: (state, product) => {
        state.product = product
    }

}