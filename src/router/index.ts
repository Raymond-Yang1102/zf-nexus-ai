import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '@/config/locale'

const langPattern = SUPPORTED_LOCALES.join('|')

interface BaseRoute {
  name: string
  component: RouteRecordRaw['component']
}

const baseRoutes: BaseRoute[] = [
  {
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    name: 'Products',
    component: () => import('@/views/Products.vue')
  },
  {
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    name: 'Help',
    component: () => import('@/views/Help.vue')
  }
]

const routes: RouteRecordRaw[] = []

baseRoutes.forEach((route) => {
  const path = route.name === 'Home' ? '' : route.name.toLowerCase()

  if (route.name === 'Home') {
    // 首页：保留无语种根路径作为日语入口
    routes.push(
      {
        path: '/',
        name: route.name,
        component: route.component
      } as RouteRecordRaw
    )
  }

  // 所有页面均携带语种前缀
  routes.push(
    {
      path: `/:lang(${langPattern})${path ? `/${path}` : '/'}`,
      name: `${route.name}Localized`,
      component: route.component
    } as RouteRecordRaw
  )
})

// 无语种的非首页路径 → 重定向到日语版本
routes.push(
  {
    path: '/products',
    redirect: '/ja/products'
  },
  {
    path: '/about',
    redirect: '/ja/about'
  },
  {
    path: '/help',
    redirect: '/ja/help'
  }
)

routes.push({
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: () => import('@/views/NotFound.vue')
})

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

export { DEFAULT_LOCALE, SUPPORTED_LOCALES }

export default router
