import * as React from 'react'
import { Input as ReakitInput, InputProps as ReakitInputProps } from 'reakit'
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
  children?: React.ReactNode | ((props: InputProps) => React.ReactNode)
  disabled?: boolean
}
export type InputProps = Omit<ReakitInputProps, 'sx'> &
  LocalBoxProps & { sx?: SxStyleProp }

function useProps(props: InputProps) {
  const compoundProps = compose(props)
  const className = useCx({ ...compoundProps, themeKey: 'of-input' })
  const htmlProps = omitCSSProps(pickHTMLProps(compoundProps))

  const ref = compoundProps.elementRef ?? {
    ref: mergeRefs(compoundProps.elementRef, compoundProps.ref),
  }

  const wrapElement = compoundProps.wrapElement ?? {
    wrapElement: compoundProps.wrapElement,
  }

  return { ...htmlProps, className, ...ref, ...wrapElement }
}

export const Input = createComponent<InputProps>(
  (props, ref) => {
    const inputProps = useProps(props)

    return createElement({
      children: props.children,
      component: ReakitInput,
      use: props.use,
      htmlProps: inputProps,
      ref,
    })
  },
  {
    assign: { displayName: 'Input', useProps },
    memoize: false,
  }
)
