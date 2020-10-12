import React, { ReactNode, memo } from 'react'
import { ThemeProvider as ThemeUIProvider } from '@theme-ui/core'
import 'focus-visible/dist/focus-visible'

import { theme } from './theme'

interface Props {
  children: ReactNode
}

export function ThemeProvider({ children }: Props) {
  return <ThemeUIProvider theme={theme}>{children}</ThemeUIProvider>
}

