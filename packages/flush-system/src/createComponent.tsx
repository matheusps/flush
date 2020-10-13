import { forwardRef, memo, FunctionComponentElement } from 'react'

export function createComponent<Props>(
  Component: (
    props: React.PropsWithChildren<Props>,
    ref: React.Ref<any>
  ) => FunctionComponentElement<Props>,
  config?: {
    assign?: {
      displayName?: string
      useProps: (
        props?: Partial<Props>,
        config?: { disableCSSProps?: Array<string> }
      ) => any
    }
    defaultProps?: Partial<Props>
    memoize?: boolean
  }
): any {
  let FlushComponent = forwardRef(Component)

  if (config.memoize) {
    FlushComponent = memo(FlushComponent)
  }

  return Object.assign(FlushComponent, config.assign)
}
