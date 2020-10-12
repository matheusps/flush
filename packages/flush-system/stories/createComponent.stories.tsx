import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Box } from '../src/unstableBox'
import { ThemeProvider } from '../src/ThemeProvider'

export default {
  title: 'system/create-component',
} as Meta

export const Create: Story = () => {
  return <Box use={'h1'}>Something</Box>
}

export const WithSx: Story = () => {
  return (
    <Box
      sx={{
        marginX: 20,
        color: 'primary',
      }}
      use={'h1'}
    >
      Something
    </Box>
  )
}

export const Variant: Story = () => {
  return (
    <ThemeProvider>
      <Box sx={{ 'button + button': { marginLeft: 1 } }}>
        <Box
          sx={{
            variant: 'button.primary',
          }}
          use={'button'}
        >
          Primary Button
        </Box>
        <Box
          sx={{
            variant: 'button.secondary',
          }}
          use={'button'}
          onClick={() => console.log('clicked')}
        >
          Secondary Button
        </Box>
      </Box>
    </ThemeProvider>
  )
}
