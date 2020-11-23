import React, { useRef } from 'react'
import { Story, Meta } from '@storybook/react'

import { Box } from './index'
import { cn, ThemeProvider } from '../system'

export default {
  title: 'primitives/box',
} as Meta

export const Basic: Story = () => {
  return (
    <ThemeProvider>
      <Box>Cool Box</Box>
    </ThemeProvider>
  )
}

export const ThemeKey: Story = () => {
  return (
    <ThemeProvider>
      <button className={cn({
        themeKey: 'button.primary'
      })}>Cool Box</button>
    </ThemeProvider>
  )
}

export const Sx: Story = () => {
  return (
    <ThemeProvider>
      <Box
        styles={{
          fontSize: 64,
        }}
      >
        Huge Text
      </Box>
    </ThemeProvider>
  )
}

export const ConsumeTheme: Story = () => {
  return (
    <ThemeProvider>
      <Box
        styles={{
          fontSize: 64,
          bg: 'primary',
          color: 'source.light',
          borderRadius: 4,
        }}
      >
        Primary Box
      </Box>
    </ThemeProvider>
  )
}

export const Ref: Story = () => {
  const ref = useRef(null)
  const handleFocus = () => {
    if (ref.current) {
      ref.current.focus()
    }
  }
  return (
    <ThemeProvider >
      <Box ref={ref} element="input" />
      <button onClick={handleFocus}>Focus</button>
    </ThemeProvider>
  )
}

export const FullUse: Story = () => {
  const ref = useRef(null)
  const handleFocus = () => {
    if (ref.current) {
      ref.current.focus()
    }
  }
  return (
    <ThemeProvider >
      <Box
        ref={ref}
        element="input"
      />
      <button onClick={handleFocus}>Focus</button>
    </ThemeProvider>
  )
}
