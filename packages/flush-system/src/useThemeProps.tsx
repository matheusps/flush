import { SxStyleProp, useThemeUI } from '@theme-ui/core'
import { css as cssExtractor } from '@theme-ui/css'
import { css } from 'emotion'
import invariant from 'tiny-invariant'
import { isObjectEmpty } from './util'

type Props<P> = P & {
  sx?: SxStyleProp
}

export function useThemeProps<P>(props: Props<P>) {
  const { theme } = useThemeUI()

  invariant(
    !isObjectEmpty(theme) || theme,
    '☠️ Make sure that you are under the ThemeProvider'
  )

  const { sx, ...htmlProps } = props
  const extractedThemeObject = cssExtractor(sx)(theme)
  const className = css(extractedThemeObject)

  return {
    ...htmlProps,
    className,
  }
}
