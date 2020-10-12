import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Box } from './index'
import { ThemeProvider } from 'flush-system'

export default {
  title: 'flush-ui/box',
} as Meta

export const Basic: Story = () => {
  return <Box>Cool Box</Box>
}

export const Sx: Story = () => {
  return (
    <Box
      sx={{
        fontSize: 64,
      }}
    >
      Huge Text
    </Box>
  )
}

export const ConsumeTheme: Story = () => {
  return (
    <ThemeProvider>
      <Box
        sx={{
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

export const CustomTheme: Story = () => {
  return (
    <ThemeProvider
      theme={{
        fonts: {
          body: 'sans-serif',
          mono: '"Dank Mono", monospace',
        },
        space: {
          large: 20,
        },
        borderRadius: {
          round: 10,
        },
        box: {
          primary: {
            margin: 4,
            fontSize: 64,
            fontFamily: 'body',
            bg: 'primary',
            color: 'source.light',
            borderRadius: 'round',
            padding: 'large',
          },
          secondary: {
            margin: 4,
            fontSize: 64,
            fontFamily: 'mono',
            bg: 'secondary',
            color: 'source.light',
            borderRadius: 'round',
            padding: 'large',
          },
        },
      }}
    >
      <Box
        sx={{
          variant: 'box.primary',
        }}
      >
        Primary Box
      </Box>
      <Box
        sx={{
          variant: 'box.secondary',
        }}
      >
        Secondary Box
      </Box>
    </ThemeProvider>
  )
}
