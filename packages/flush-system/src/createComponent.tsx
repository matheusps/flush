import React from 'react'
import { css as cssExtractor } from '@theme-ui/css'
import { css } from 'emotion'
import { pickCSSProps } from './util'
// import { useDefaultProps } from './useDefaultProps'

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
  const Comp = (props: React.PropsWithChildren<Props>, ref: React.Ref<any>) => {
    // const { props: newProps } = useDefaultProps(props, config);

    // TODO get theme props (passing props)
    return React.createElement(
      Component,
      { ...props, elementRef: ref },
      props?.children
    )
  }

  let ForwardedComponent = React.forwardRef(Comp)

  if (config.memoize) {
    ForwardedComponent = React.memo(ForwardedComponent)
  }

  Comp.dislayName = config.attach.displayName

  return Object.assign(ForwardedComponent, config.attach)
}
