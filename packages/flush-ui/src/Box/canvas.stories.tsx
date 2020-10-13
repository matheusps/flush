import React, { useRef } from 'react'
import { Story, Meta } from '@storybook/react'

import { Box } from './index'
import { ThemeProvider } from 'flush-system'
import { base } from 'flush-themes'
import { Input } from '../Input'

export default {
  title: 'flush-ui/box',
} as Meta

export const Basic: Story = () => {
  return (
    <ThemeProvider theme={base}>
      <Box>Cool Box</Box>
    </ThemeProvider>
  )
}

export const Sx: Story = () => {
  return (
    <ThemeProvider theme={base}>
      <Box
        sx={{
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
    <ThemeProvider theme={base}>
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

export const StyleProps: Story = () => {
  return (
    <ThemeProvider theme={base}>
      <Box bg="primary" color="source.light" borderRadius={4} fontSize={64}>
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
    <ThemeProvider theme={base}>
      <Box
        ref={ref}
        borderRadius={4}
        borderStyle="solid"
        fontSize={18}
        use="input"
        type="text"
      />
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
    <ThemeProvider theme={base}>
      <Box
        ref={ref}
        borderRadius={4}
        borderStyle="solid"
        fontSize={18}
        use={Input}
        type="text"
      />
      <button onClick={handleFocus}>Focus</button>
    </ThemeProvider>
  )
}

export const Flexbox: Story = () => {
  return (
    <ThemeProvider theme={base}>
      <Box display="flex" width="100%" direction="column">
        <Box width="20%" height={120} bg="primary" />
        <Box width="20%" height={120} bg="secondary" />
      </Box>
    </ThemeProvider>
  )
}
