import * as React from 'react'

export default function ElementWrapper(props: { element: React.ReactNode }) {
  const { element } = props

  return <React.Fragment>{element}</React.Fragment>
}
