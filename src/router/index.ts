import { createRouter, createWebHashHistory } from "vue-router";
import isMobile from "../utils/isMobile";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'index',
            component: () => import('../view/index.vue')
        },
        {
            path:'/mobile',
            name:'mobile',
            component: ()=> import('../view/mobile.vue'),
            beforeEnter:((to,from)=>{
                return from.path === '/'
            })
        }
    ]
})

router.beforeEach((to,from,next)=>{
    if (to.name === 'index' && isMobile(navigator.userAgent)) {
       return  next({name:'mobile'})
    }
    if (to.name === 'mobile' && !isMobile(navigator.userAgent)) {
       return  next({name:'index'})
    }
    next()
})
export default router