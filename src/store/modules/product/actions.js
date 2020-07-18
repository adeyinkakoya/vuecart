import { api } from '../../../api/base'
const PRODUCT_ENDPOINT = "products"

export default {
    getProducts: (context) => {
        api.get(PRODUCT_ENDPOINT)
            .then(res => context.commit('SET_PRODUCTS', res.data))
            .catch(err => console.log(err))
    },
    getProduct: (context, id) => {
        api.get(`${PRODUCT_ENDPOINT}/${id}`)
            .then(res => context.commit('SET_PRODUCT', res.data))
            .catch(err => console.log(err))
    }
}