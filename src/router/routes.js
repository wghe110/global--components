export default [
  {
    path: '/',
    component: () => import('@/views/layout/home.vue'),
    children: [
      {
        path: '/jsx',
        meta: {
          title: 'jsx'
        },
        component: () => import('@/views/layout/jsx/index.vue')
      },
      {
        path: '/demo',
        meta: {
          title: 'demo'
        },
        component: () => import('@/views/demo/index.vue')
      },
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/layout/login.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/layout/404.vue')
  },
]