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
    name: 'Company',
    component: () => import('@/views/Company.vue')
  },
  {
    name: 'Products',
    component: () => import('@/views/Products.vue')
  },
  {
    name: 'Technology',
    component: () => import('@/views/Technology.vue')
  },
  // 暂时不开放团队页面
  // {
  //   name: 'Team',
  //   component: () => import('@/views/Team.vue')
  // }
]

const routes: RouteRecordRaw[] = []

baseRoutes.forEach((route) => {
  const path = route.name === 'Home' ? '' : route.name.toLowerCase()

  if (route.name === 'Home') {
    routes.push(
      {
        path: '/',
        name: route.name,
        component: route.component
      } as RouteRecordRaw
    )
  }

  routes.push(
    {
      path: `/:lang(${langPattern})${path ? `/${path}` : '/'}`,
      name: `${route.name}Localized`,
      component: route.component
    } as RouteRecordRaw
  )
})

routes.push(
  {
    path: '/company',
    redirect: '/ja/company'
  },
  {
    path: '/products',
    redirect: '/ja/products'
  },
  {
    path: '/technology',
    redirect: '/ja/technology'
  },
  {
    path: '/team',
    redirect: '/ja/team'
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