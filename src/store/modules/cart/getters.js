export default {

    getCart: (state) => {
        return state.cart
    },
    getCartSumQuantity: (state) => {
        if (state.cart.length == 0) {
            return 0
        } else {
            let sum = state.cart.map(item => item.quantity).reduce((a, c) => a + c)
            return sum
        }
    },

    getCartTotal: (state) => {
        let total = 0
        state.cart.forEach((item) => {
            total += item.product.price * item.quantity // Go to the first row/element/index of the array.0. Get the price and quantity, multiply and add to the value of total. Then take the current value of total and do thesame of all the other indexes or rows of the array
        })
        return total

        // let total = state.cart.map((item) => {
        //     return item.product.price * item.quantity
        // }).reduce((a, c) => {
        //     return a + c
        // })
        // return total
    }

}