import { FlushStyleObject } from './css/types'

export type WithStyles<P> = P & {
  styles?: FlushStyleObject
}

export { FlushStyleObject }

export type ResponsiveValue<T> = T | T[]
