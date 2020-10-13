import * as React from 'react'
import { Box as ReakitBox, BoxProps as ReakitBoxProps } from 'reakit'
import {
  SxStyleProp,
  createElement,
  createComponent,
  omitCSSProps,
  pickHTMLProps,
  mergeRefs,
  useCx,
  compose,
} from 'flush-system'

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

function useProps(props: BoxProps) {
  const compoundProps = compose(props)
  const className = useCx(compoundProps)
  const htmlProps = omitCSSProps(pickHTMLProps(compoundProps))

  const ref = compoundProps.elementRef ?? {
    ref: mergeRefs(compoundProps.elementRef, compoundProps.ref),
  }

  const wrapElement = compoundProps.wrapElement ?? {
    wrapElement: compoundProps.wrapElement,
  }

  return { ...htmlProps, className, ...ref, ...wrapElement }
}

export const Box = createComponent<BoxProps>(
  (props, ref) => {
    const boxProps = useProps(props)

    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: boxProps,
      ref,
    })
  },
  {
    assign: { displayName: 'Box', useProps },
    memoize: false,
  }
)
