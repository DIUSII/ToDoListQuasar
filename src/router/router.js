import Vue from 'vue'
import Router from 'vue-router'

import ToDoList from '../components/ToDoList/todolist'
import tLogin from '../components/login/login'


Vue.use(Router);

let router = new Router({
    routes:[
        {
            path:'/todolist',
            name: 'todolist',
            component: ToDoList
        },
        {
            path: '/login',
            name: 'login',
            component: tLogin,
        }
    ]
});
// if(localStorage.getItem('test') === "1"){
//     router.push({ path: '/login' })
// }
// else{
//     localStorage.setItem('test', 1);
//     router.push({ path: '/sign-up' })
// }
// console.log(router);
// router.push({ path: '/login' })
export default router