const buttonStyles = {
  border: 'none',
  borderRadius: 3,
  cursor: 'pointer',
  position: 'relative',
  ':focus:not([data-focus-visible-added])': {
    outline: 'none',
    boxShadow: 'none',
  },
  ':focus': {
    outline: 'none',
    boxShadow: 'focus',
  },
  fontSize: 1,
  height: 40,
  width: 'auto',
  paddingLeft: 4,
  paddingRight: 4,
}

// TODO create variants
export const theme = {
  space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
  colors: {
    primary: '#3772FF',
    secondary: '#080708',
    danger: '#DF2935',
    warning: '#FDCA40',
    muted: '#E6E8E6',
    source: {
      light: '#fff',
      dark: '#000',
    },
  },
  button: {
    primary: {
      ...buttonStyles,
      bg: 'primary',
      color: 'source.light',
    },
    secondary: {
      ...buttonStyles,
      bg: 'secondary',
      color: 'source.light',
    },
  },
  'of-input': {
    borderRadius: 4,
    fontSize: 20,
    borderStyle: 'solid',
    ':hover': {
      borderColor: 'secondary',
    },
    ':focus': {
      outline: 'none',
      borderColor: 'primary',
    },
  },
  'input-error': {
    borderRadius: 4,
    fontSize: 30,
    borderStyle: 'solid',
    borderColor: 'danger',
  },
}

export type Theme = typeof theme
