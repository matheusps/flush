import React, { ReactNode, memo, useMemo } from 'react'
import { ThemeProvider as ThemeUIProvider } from '@theme-ui/core'
import 'focus-visible/dist/focus-visible'
import merge from 'deepmerge'

import { theme as defaultTheme } from './theme'

interface Props {
  children: ReactNode
  theme?: any
}

export function ThemeProvider({ children, theme: custonTheme = {} }: Props) {
  const theme = useMemo(() => merge(defaultTheme, custonTheme), [])
  return <ThemeUIProvider theme={theme}>{children}</ThemeUIProvider>
}
