export default [
    {
        path: '/',
        redirect: '/carousel'
    },
    {
        path: '/carousel',
        name: 'carousel',
        meta: { title: '轮播图首页' },
        component: () => import('../views/carousel.vue')
    },
]