import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { SmallCross } from '../components/crosses'

class AboutTemplate extends React.Component {
  render() {
    const about = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} pageTitle={about.frontmatter.title}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          title={`${about.frontmatter.title} | ${siteTitle}`}
        />

        <SmallCross />


        
      </Layout>
    )
  }
}

export default AboutTemplate

export const pageQuery = graphql`
  query AboutPage($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        description
        color
        libraries
        social {
          name
          link
        }
      }
    }
  }
`