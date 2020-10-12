import { forwardRef, createElement, memo } from 'react'

export function createComponent<Props>(
  Component: React.FunctionComponent<Props>,
  config?: {
    attach?: {
      displayName?: string
      useProps: (
        props?: Partial<Props>,
        config?: { disableCSSProps?: Array<string>; themeKey?: string }
      ) => any
    }
    defaultProps?: Partial<Props>
    themeKey?: string
    memoize?: boolean
  }
): any {
  const FlushComponent = (
    props: React.PropsWithChildren<Props>,
    ref: React.Ref<any>
  ) => {
    return createElement(
      Component,
      { ...props, elementRef: ref },
      props?.children
    )
  }

  let ForwardedFlushComponent = forwardRef(FlushComponent)

  if (config.memoize) {
    ForwardedFlushComponent = memo(ForwardedFlushComponent)
  }

  return Object.assign(ForwardedFlushComponent, config.attach)
}
