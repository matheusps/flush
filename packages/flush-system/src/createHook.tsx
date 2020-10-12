// import { useDefaultProps } from './useDefaultProps'
import { useThemeProps } from './useThemeProps'

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
    const themedProps = useThemeProps(props)
    return useHook(themedProps as any)
  }
}
