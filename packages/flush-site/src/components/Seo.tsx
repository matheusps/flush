import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'

interface Props {
  title?: string
}

export function Seo(props: Props) {
  const { pathname } = useLocation()
  const seo = {
    title: props.title ?? 'Themed',
    titleTemplate: pathname === '/' ? `%s` : '%s | Themed',
    description: 'Some cool description',
    image: '/social.png',
    url: 'https://github.com/matheusps',
  }

  return (
    <Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
      <link rel="icon" type="image/png" href="/icon.png" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
    </Helmet>
  )
}
