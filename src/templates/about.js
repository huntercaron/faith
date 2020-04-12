import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

const AboutTemplate = (props) => {
  const siteTitle = props.data.site.siteMetadata.title
  const {
    description,
    contact,
    press,
    clients,
    awards,
    instagram,
  } = props.data.markdownRemark.frontmatter

  return (
    <div>
      <Helmet htmlAttributes={{ lang: 'en' }} title={`About | ${siteTitle}`} />

      <div className="info">
        <div className="info-inner">
          <p>{description}</p>

          <h4>
            contact
            <p className="no-margin">
              <a href={`mailto:${contact}`}>{contact}</a>
            </p>
            <p>
              <a href={instagram} target="_blank" rel="noopener noreferrer">
                instagram
              </a>
            </p>
          </h4>

          <h4>Selected Press & Publications</h4>
          <p>{press}</p>

          <h4>Selected Client list</h4>
          <p>{clients}</p>

          <h4>Awards</h4>
          <p>{awards}</p>
        </div>
      </div>
    </div>
  )
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
        description
        contact
        press
        instagram
        clients
        awards
      }
    }
  }
`
