import React, { PropsWithChildren } from 'react'
import { ThemeProvider as BaseProvider } from '@theme-ui/core'
import { css } from '@emotion/css'

import { FlushStyleObject } from '../css/types'
import { css as transformStyles } from '../css'
import { createElementFactory } from './createElementFactory'


export function createSystem<T>(theme: T) {
  const ThemeProvider = createProvider(theme)
  const cn = createCn(theme)
  const createElement = createElementFactory([])

  return {
    ThemeProvider,
    createElement,
    cn
  }
}

export function createCn<T>(theme: T) {
  return (styles: FlushStyleObject) => {
    const cssObject = transformStyles(styles)(theme)
    const className = css(cssObject)

    return className
  }
}

export function createProvider<T>(theme: T) {
  return function ThemeProvider({ children }: PropsWithChildren<{}>) {
    return <BaseProvider theme={theme}>{children}</BaseProvider>
  }
}
