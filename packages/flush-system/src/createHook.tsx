// import { useDefaultProps } from './useDefaultProps'
// import { useThemeProps } from './useThemeProps'
// import { pickCSSProps } from './util'

export function createHook<P>(
  useHook: (
    props: Partial<P>
    // options: { disableCSSProps?: Array<string>; themeKey: string }
  ) => Partial<P>
  // config?: { defaultProps?: Partial<P>; themeKey?: string }
) {
  return (
    props: Partial<P>
    // { disableCSSProps = [], themeKey: themeKeyOverride = undefined } = {}
  ) => {
    return useHook(props)
  }
}
