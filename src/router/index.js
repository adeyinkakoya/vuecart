import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/product/:id',
        name: 'Product',
        component: Product,
        props: true
    },
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import ( /* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

const router = new VueRouter({
    routes
})

// router.beforeResolve((to, from, next) => {
//     // If this isn't an initial page load.
//     if (to.name) {
//         // Start the route progress bar.
//         NProgress.start()
//     }
//     next()
// })

// router.afterEach((to, from) => {
//     // Complete the animation of the route progress bar.
//     NProgress.done()
// })

export default router