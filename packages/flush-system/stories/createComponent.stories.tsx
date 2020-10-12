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

export const SxProps: Story = () => {
  return (
    <ThemeProvider>
      <Box
        bg="primary"
        color="source.light"
        borderRadius={4}
        fontSize={64}
        sx={{ bg: 'secondary' }}
      >
        Primary Box
      </Box>
    </ThemeProvider>
  )
}
