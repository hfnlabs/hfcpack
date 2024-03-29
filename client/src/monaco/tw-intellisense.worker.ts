import * as Comlink from 'comlink'
import { type MaybeColorValue, toColorValue } from '@twind/core'
import type { Intellisense as IntellisenseAPI } from './tw-intellisense'

let intellisense: any
async function intellisensePromise() {
  if (intellisense)
    return intellisense

  // @ts-expect-error no types
  const { createIntellisenseWithTailwind } = await import('twind-intellisense-hfc')
  intellisense = createIntellisenseWithTailwind()
  return intellisense
}

const api: IntellisenseAPI = {
  async init() {
  },

  async suggest(...args) {
    const intellisense = await intellisensePromise()
    return await intellisense.suggest(...args)
  },

  async suggestAt(...args) {
    const intellisense = await intellisensePromise()
    return intellisense.suggestAt(...args)
  },

  async documentationFor(...args) {
    return
    const intellisense = await intellisensePromise()
    return intellisense.documentationFor(...args)
  },

  async documentationAt(...args) {
    return
    const intellisense = await intellisensePromise()
    return intellisense.documentationAt(...args)
  },

  async collectColors(...args) {
    const intellisense = await intellisensePromise()
    return intellisense.collectColors(...args)
  },

  async validate(...args) {
    const intellisense = await intellisensePromise()
    return intellisense.validate(...args)
  },

  async getColors() {
    const intellisense = await intellisensePromise()
    const colors: Record<string, Record<string, string>> = {}

    const set = (path: string[], value: string) => {
      if (
        ![
          'currentcolor',
          'transparent',
          'inherit',
          'initial',
          'revert',
          'revert-layer',
          'unset',
        ].includes(value.toLowerCase())
      ) {
        path = path
          .join('-')
          .split('-')
          .filter(part => part !== 'DEFAULT')
        const section = path[0]
        const key = path.slice(1).join('-') || 'DEFAULT'
        ;(colors[section] ??= {})[key] = value
      }
    }
    //
    function collectColors(source: Record<string, MaybeColorValue>, path: string[] = []) {
      for (const [key, value] of Object.entries(source)) {
        const currentPath = [...path, key]
        if (typeof value === 'string')
          set(currentPath, value)

        else if (typeof value === 'function')
          set(currentPath, toColorValue(value))

        else
          collectColors(value, currentPath)
      }
    }

    collectColors(intellisense.theme('colors'))

    return Object.fromEntries(
      Object.entries(colors)
        .sort((a, b) => {
          // 1. single value colors first
          const aKeys = Object.keys(colors[a[0]])
          const bKeys = Object.keys(colors[b[0]])

          const aStandalone = aKeys.length === 1 && aKeys[0] === 'DEFAULT'
          const bStandalone = bKeys.length === 1 && bKeys[0] === 'DEFAULT'
          if (aStandalone && !bStandalone)
            return -1

          if (!aStandalone && bStandalone)
            return 1

          // 2. others sorted
          return a[0].localeCompare(b[0], 'en', { numeric: true })
        })
        .map(([section, colors]) => [
          section,
          Object.fromEntries(
            Object.entries(colors).sort((a, b) =>
              a[0].localeCompare(b[0], 'en', { numeric: true }),
            ),
          ),
        ]),
    )
  },
}

Comlink.expose(api)
