import {
  forwardRef,
  Ref,
  ReactElement,
  ElementType,
  ComponentProps,
} from 'react'
import { Role as ReakitRole } from 'reakit'

import { useClassName, createElement, FlushStyleObject } from '../system'

const defaultElement = 'div'

/**
 * Polymorphic & abstract component
 */
export const Box: <E extends ElementType = typeof defaultElement>(
  props: BoxProps<E>
) => ReactElement | null = forwardRef(function Box(
  props: BoxOwnProps,
  ref: Ref<HTMLDivElement>
) {
  const { element = defaultElement, ...propsWithoutElement } = props
  const boxProps = useBox(propsWithoutElement)
  const swallow = typeof element !== 'string'

  return createElement({
    component: ReakitRole,
    htmlProps: boxProps,
    element,
    swallow,
    ref,
  })
})

export function useBox(props: BoxOwnProps) {
  const { styles } = props
  const className = useClassName(styles)

  return { ...props, className }
}

export interface BoxOwnProps<E extends ElementType = ElementType> {
  /**
   * element that should be rendered
   * @default div
   */
  element?: E
  /**
   * styles of box
   * @default {}
   * @see https://admin-ui-docs.vercel.app/theming/style-object/
   */
  styles?: FlushStyleObject
  /**
   * theme key to me consumed from admin-ui-theme
   * @private this is for internal usage only
   */
  themeKey?: string
}

export type BoxProps<E extends ElementType> = BoxOwnProps<E> &
  Omit<ComponentProps<E>, keyof BoxOwnProps>
