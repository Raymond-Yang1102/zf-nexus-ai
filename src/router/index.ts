import { type Component } from 'vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const localized = '(en|zh-Hant)'
const pageRoutes: Array<{ name: string; path: string; component: Component; props?: Record<string, string> }> = [
  { name: 'Home', path: '/', component: () => import('@/views/Home.vue') },
  { name: 'Company', path: '/company', component: () => import('@/views/Company.vue') },
  { name: 'Products', path: '/products', component: () => import('@/views/Products.vue') },
  { name: 'Technology', path: '/technology', component: () => import('@/views/Technology.vue') },
  { name: 'Team', path: '/team', component: () => import('@/views/Team.vue') },
  { name: 'Privacy', path: '/privacy', component: () => import('@/views/InformationPage.vue'), props: { page: 'privacy' } },
  { name: 'Terms', path: '/terms', component: () => import('@/views/InformationPage.vue'), props: { page: 'terms' } }
]

const routes: RouteRecordRaw[] = pageRoutes.flatMap((route) => [
  { path: route.path, name: route.name, component: route.component, props: route.props },
  { path: `/:lang${localized}${route.path === '/' ? '/' : route.path}`, name: `${route.name}Localized`, component: route.component, props: route.props }
])

routes.push({ path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFound.vue') })

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  }
})
