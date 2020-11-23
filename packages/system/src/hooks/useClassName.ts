import { createCn } from '../createSystem'
import { FlushStyleObject } from '../css/types'

import { useTheme } from './useTheme'


/**
 * Generate a single classname after merge sx, themeKey & style props
 */
export function useClassName(styles: FlushStyleObject): string {
  const theme = useTheme()
  const cn = createCn(theme)
  const className = cn(styles)

  return className
}
