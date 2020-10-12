import { useThemeUI } from '@theme-ui/core'
import { css as cssExtractor } from '@theme-ui/css'
import { css } from 'emotion'
import invariant from 'tiny-invariant'
import merge from 'deepmerge'
import { isObjectEmpty, pickCSSProps } from './util'
import { SxStyleProp } from './types'

type Props<P> = P & {
  sx?: SxStyleProp
}

export function useCx<P>(props: Props<P>): string {
  const { theme } = useThemeUI()

  invariant(
    !isObjectEmpty(theme) || theme,
    '☠️ Make sure that you are under the ThemeProvider'
  )

  const { sx = {} } = props
  const cssProps = pickCSSProps(props)

  const styled = merge<SxStyleProp>(cssProps, sx)

  const extractedThemeObject = cssExtractor(styled)(theme)
  const className = css(extractedThemeObject)

  return className
}
