import {
  createSystem,
  useTheme,
  useClassName,
  get,
  merge,
  FlushStyleObject,
} from '@flush/system'
import { theme } from '@flush/theme'

const {
  ThemeProvider,
  cn,
  createElement,
} = createSystem({
  theme,
})

export {
  ThemeProvider,
  cn,
  createElement,
  useClassName,
  useTheme,
  get,
  merge,
  theme,
  FlushStyleObject,
}
