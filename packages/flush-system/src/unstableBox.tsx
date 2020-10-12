import * as React from 'react'
import { Box as ReakitBox, BoxProps as ReakitBoxProps } from 'reakit'
import { createComponent } from './createComponent'
import { createHook } from './createHook'
import { createElement } from './createElement'

import { omitCSSProps, pickHTMLProps, mergeRefs, compose } from './util'
import { SxStyleProp } from '@theme-ui/core'
import { useCx } from './useCx'

type ComponentType<R> = React.ComponentType<R> & { useProps: any }

export type LocalBoxProps = {
  use?: string | ComponentType<any>
  children?: React.ReactNode | ((props: BoxProps) => React.ReactNode)
  variant?: string
  disabled?: boolean
  elementRef?: React.Ref<any>
  themeKey?: string
}
export type BoxProps = Omit<ReakitBoxProps, 'sx'> &
  LocalBoxProps & { sx?: SxStyleProp }

const useProps = createHook<BoxProps>((
  props /*, { disableCSSProps, themeKey } */
) => {
  const compoundProps = compose(props)
  const className = useCx(compoundProps)

  // Convert CSS props to an object.
  // Example input:
  // props = { color: 'red', backgroundColor: 'blue', isEnabled: true }
  //
  // Example output:
  // style = { color: 'red', backgroundColor: 'blue' }
  // const style = useStyle(props, { disableCSSProps })

  // Append the styles from above as a className on the DOM element (with precedence).
  // let className = useClassName({
  //   style: styles.style,
  //   styleProps: { ...props, style },
  //   themeKey,
  //   prevClassName: props.className,
  // })

  // Append the Box styles as a className on the DOM element.
  // className = useClassName({
  //   style: styles.Box,
  //   styleProps: props,
  //   prevClassName: className,
  //   themeKey,
  // })

  // Pick out and invalid HTML props & omit the CSS props.
  // This avoids strange dom props
  const htmlProps = omitCSSProps(pickHTMLProps(compoundProps))

  const ref = compoundProps.elementRef ?? {
    ref: mergeRefs(compoundProps.elementRef, compoundProps.ref),
  }

  const wrapElement = compoundProps.wrapElement ?? {
    wrapElement: compoundProps.wrapElement,
  }

  return { ...htmlProps, className, ...ref, ...wrapElement }
})

export const Box = createComponent<BoxProps>(
  function BoxComponent(props) {
    const boxProps = useProps(props)

    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: boxProps,
    })
  },
  {
    attach: { displayName: 'Box', useProps },
    themeKey: 'Box',
    memoize: true,
  }
)
