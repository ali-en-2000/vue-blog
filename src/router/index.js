import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () =>  import('../View/Home/index.vue'),
    },
    {
      path: "/login",
      name: "login",
      component: () =>  import('../View/Login/index.vue'),
    },
    ,
    {
      path: "/blog/:id",
      name: "blog",
      component: () =>   import('../View/Blog/index.vue'),
    }


  ]
})


export default router
