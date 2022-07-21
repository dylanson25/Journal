export default {
    name: 'Home',
    component: () => import(/*webpackChunkName: "daybook"*/'@/modules/home/layouts/HomeLayout.vue')
}