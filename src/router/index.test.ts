import { describe, expect, it, vi } from 'vitest'

vi.mock('vue-router', () => ({
  createWebHistory: () => ({}),
  createRouter: ({ routes }: { routes: Array<{ path: string }> }) => ({
    getRoutes: () => routes
  })
}))

import router from './index'

describe('localized route contract', () => {
  it('uses only Japanese and Traditional Chinese as prefixed route families', () => {
    const localizedPaths = router.getRoutes()
      .map((route) => route.path)
      .filter((path) => path.startsWith('/:lang'))

    expect(localizedPaths.length).toBeGreaterThan(0)
    expect(localizedPaths.every((path) => path.includes('(ja|zh-Hant)'))).toBe(true)
    expect(localizedPaths.some((path) => path.includes('(en|'))).toBe(false)
  })

  it('keeps the English home and products routes unprefixed', () => {
    const paths = router.getRoutes().map((route) => route.path)
    expect(paths).toContain('/')
    expect(paths).toContain('/products')
    expect(paths).toContain('/:lang(ja|zh-Hant)/')
    expect(paths).toContain('/:lang(ja|zh-Hant)/products')
  })
})
