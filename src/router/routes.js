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
        path: '/auto-scroll',
        meta: {
          title: 'auto-scroll'
        },
        component: () => import('@/views/auto-scroll/index.vue')
      },
      {
        path: '/mobile-echarts',
        meta: {
          title: 'mobile-echarts'
        },
        component: () => import('@/views/mobile-echarts/index.vue')
      },
      {
        path: '/echarts',
        meta: {
          title: 'echarts'
        },
        component: () => import('@/views/echarts/index.vue')
      },
      {
        path: '/tinymce',
        meta: {
          title: 'tinymce'
        },
        component: () => import('@/views/tinymce/index.vue')
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