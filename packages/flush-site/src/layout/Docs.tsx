/* eslint-disable react/jsx-pascal-case */
/** @jsx jsx */
import { jsx, ThemeProvider } from '@theme-ui/core'
import React from 'react'
import { Styled } from '@theme-ui/mdx'
import baseTheme from '@theme-ui/preset-base'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Seo } from '../components/Seo'

// import SEO from '../components/SEO'
// import LiveCode from '../components/Live/LiveCode'
// import Header from '../components/Header'
// import BlocksSidebar from '../components/Blocks/Sidebar'
// import DocsSidebar from '../components/Docs/Sidebar'
// import Footer from '../components/Footer'
// import _TableOfContents from '../components/TableOfContents'

// const Sidebars = {
//   blocks: BlocksSidebar,
//   docs: DocsSidebar,
// }

type Props = {
  children: React.ReactNode
  pageContext?: any
  path?: string
  title?: string
  isFluid?: boolean
  breakpoint?: string
  type?: string
}

// const TableOfContents = bumbag.styled(_TableOfContents)`
//   position: fixed;
//   top: 100px;
//   right: 1rem;
//   visibility: ${(props) => (!props.isFluid ? 'visible' : 'hidden')};
//   overflow: auto;
//   max-height: calc(100vh - 200px);
//   width: 250px;
//   border-left: 1px solid ${bumbag.palette('white800')};
//   padding-left: 1rem;

//   @media screen and (max-width: ${(props) =>
//     bumbag.theme(`breakpoints.${props.breakpoint}`)(props) + 832}px) {
//     visibility: hidden;
//   }
// `

export default function Docs(props: Props) {
  const { children, pageContext = {}, path = '' } = props

  // ////////////////////////////////////////////////////////////////////

  const components = React.useMemo(
    () => ({
      // ...bumbag,
      // a: (props: any) => <bumbag.Link {...props} />,
      // blockquote: (props: any) => (
      //   <bumbag.Blockquote
      //     backgroundColor={
      //       colorMode === 'dark' ? 'primaryShade' : 'primaryTint'
      //     }
      //     borderColor="primary"
      //     marginTop="major-2"
      //     marginBottom="major-2"
      //     {...props}
      //   />
      // ),
      code: Styled.code,
      // inlineCode: (props: any) => (
      //   <bumbag.Code fontSize="15px" {...props} palette="primary" />
      // ),
      h1: Styled.h1,
      h2: Styled.h2,
      h3: Styled.h3,
      h4: Styled.h4,
      h5: Styled.h5,
      h6: Styled.h6,
      // h2: (props: any) => (
      //   <bumbag.Heading
      //     use="h2"
      //     fontSize="500"
      //     marginTop="major-6"
      //     marginBottom="major-4"
      //     {...props}
      //   />
      // ),
      // h3: (props: any) => (
      //   <bumbag.Heading
      //     fontSize="400"
      //     use="h3"
      //     marginTop="major-6"
      //     marginBottom="major-4"
      //     {...props}
      //   />
      // ),
      // h4: (props: any) => (
      //   <bumbag.Heading
      //     fontSize="300"
      //     use="h4"
      //     marginTop="major-6"
      //     marginBottom="major-4"
      //     {...props}
      //   />
      // ),
      // h5: (props: any) => (
      //   <bumbag.Heading
      //     use="h5"
      //     marginTop="major-6"
      //     marginBottom="major-4"
      //     {...props}
      //   />
      // ),
      // h6: (props: any) => (
      //   <bumbag.Heading
      //     use="h6"
      //     marginTop="major-6"
      //     marginBottom="major-4"
      //     {...props}
      //   />
      // ),
      // p: (props: any) => (
      //   <bumbag.Paragraph
      //     {...props}
      //     overrides={{
      //       Paragraph: {
      //         styles: {
      //           base: bumbag.css`
      //             &:not(:last-child) {
      //               margin-bottom: 1.75rem;
      //             }
      //           `,
      //         },
      //       },
      //     }}
      //   />
      // ),
      // ul: (props: any) => (
      //   <bumbag.List
      //     listStyleType="disc"
      //     listStylePosition="outside"
      //     marginLeft="major-4"
      //     marginBottom="major-4"
      //     marginTop="-0.5rem"
      //     {...props}
      //   />
      // ),
      // ol: (props: any) => (
      //   <bumbag.List
      //     listStyleType="decimal"
      //     listStylePosition="outside"
      //     marginLeft="major-4"
      //     marginBottom="major-4"
      //     marginTop="-0.5rem"
      //     {...props}
      //   />
      // ),
      // li: (props: any) => <bumbag.ListItem marginBottom="major-1" {...props} />,
      // strong: (props: any) => <bumbag.Text fontWeight="semibold" {...props} />,
      // table: (props: any) => (
      //   <bumbag.Table marginBottom="major-4" marginTop="major-4" {...props} />
      // ),
      // th: (props: any) => <bumbag.Table.HeadCell {...props} />,
      // tr: (props: any) => <bumbag.Table.Row {...props} />,
      // td: (props: any) => <bumbag.Table.Cell {...props} />,
      // tbody: (props: any) => <bumbag.Table.Body {...props} />,
      // thead: (props: any) => <bumbag.Table.Head {...props} />,
    }),
    []
  )

  // ////////////////////////////////////////////////////////////////////

  const title =
    (props.title ?? pageContext.frontmatter?.seoTitle) ||
    pageContext.frontmatter?.title

  // const breakpoint =
  //   (props.breakpoint ?? pageContext.frontmatter?.breakpoint) || 'tablet'

  // const isFluid = props.isFluid ?? pageContext.frontmatter?.isFluid
  // const type = props.type ?? pageContext.type

  // const Sidebar = Sidebars[type]

  // return (
  //   <React.Fragment>
  //     <SEO title={title} />
  //     <bumbag.PageWithHeader sticky header={<Header />}>
  //       <bumbag.PageWithSidebar
  //         sidebar={<Sidebar path={path} />}
  //         sidebarPlacement="left"
  //         sidebarWidth="270px"
  //       >
  //         {pageContext.tableOfContents && (
  //           <TableOfContents
  //             breakpoint={breakpoint}
  //             isFluid={isFluid}
  //             toc={pageContext.tableOfContents}
  //           />
  //         )}
  //         <bumbag.PageContent
  //           isLayout={isFluid}
  //           isFluid={isFluid}
  //           breakpoint={breakpoint}
  //           use="main"
  //           id="main-content"
  //         >
  //           {pageContext.mdxBody ? (
  //             <MDXProvider components={components}>
  //               <MDXRenderer>{pageContext.mdxBody}</MDXRenderer>
  //             </MDXProvider>
  //           ) : (
  //             children
  //           )}
  //         </bumbag.PageContent>
  //         <bumbag.PageContent>
  //           <Footer />
  //         </bumbag.PageContent>
  //       </bumbag.PageWithSidebar>
  //     </bumbag.PageWithHeader>
  //   </React.Fragment>
  // )

  return (
    <ThemeProvider theme={baseTheme as any}>
      <Seo title={title} />
      <div>
        {pageContext.mdxBody ? (
          <MDXProvider components={components}>
            <MDXRenderer>{pageContext.mdxBody}</MDXRenderer>
          </MDXProvider>
        ) : (
          children
        )}
      </div>
    </ThemeProvider>
  )
}
