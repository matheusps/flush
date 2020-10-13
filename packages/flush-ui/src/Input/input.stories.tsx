import React, { useRef } from 'react'
import { Story, Meta } from '@storybook/react'

import { Input } from './index'
import { ThemeProvider } from 'flush-system'
import { border } from 'polished'

export default {
  title: 'flush-ui/input',
} as Meta

export const Basic: Story = () => {
  return (
    <ThemeProvider>
      <Input />
      <Input borderColor="warning" />
    </ThemeProvider>
  )
}

export const Hover: Story = () => {
  return (
    <ThemeProvider>
      <Input
        borderColor="muted"
        _hover={{ borderColor: 'pink' }}
        _focus={{
          outline: 'none',
          borderColor: 'red',
        }}
      />
    </ThemeProvider>
  )
}
