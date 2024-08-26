import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import AppLayout from '@/views/frontend/Layout.vue'

//App
import App from '@/views/frontend/Home/App.vue'

const routes = [

    /*
    |--------------------------------------------------------------------------
    | Dashboard
    |--------------------------------------------------------------------------|
    */
    {
        path: '',
        component: AppLayout,
        children: [
            {
                path: '',
                component: App,
                name: 'App',
            },

            //  DEFAULT ROUTE
            // { path: '*', component: NotFoundPage },
        ]
    }, 
    
];

const VueRouter = createRouter({

    history: createWebHistory(),
    strict: true,
    routes: routes,
});

// router.beforeEach((to, from, next) => {
//     document.title = to.meta.title
//     if (to.meta.middleware == "guest") {
//         if (store.state.auth.authenticated) {
//             next({ name: "dashboard" })
//         }
//         next()
//     } else {
//         if (store.state.auth.authenticated) {
//             next()
//         } else {
//             next({ name: "login" })
//         }
//     }
// })

export default VueRouter;