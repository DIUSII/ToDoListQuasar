import Vue from 'vue'
import Router from 'vue-router'

import tMainBlockWrapper from '../components/t-main-block/t-main-block-wrapper'
import tLogin from '../components/login/login'


Vue.use(Router);

let router = new Router({
    routes:[
        {
            path:'/',
            name: 'main',
            component: tMainBlockWrapper
        },
        {
            path: '/login',
            name: 'login',
            component: tLogin,
        }
    ]
});
if(localStorage.getItem('test') === "1"){
    router.push({ path: '/login' })
}
else{
    localStorage.setItem('test', 1);
    router.push({ path: '/sign-up' })
}
// console.log(router);
export default router