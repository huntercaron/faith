import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import { SmallCross } from '../components/crosses'

const AboutTemplate = (props) => {
  const about = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title
  const {
    description,
    contact,
    press,
    clients,
    awards
  } = props.data.markdownRemark.frontmatter

  return (
    <div>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title={`About | ${siteTitle}`}
      />

      <div className="info">
        <div className="info-inner">
          <p>{description}</p>

          <h4>
            contact 
            <p><a href={`mailto:${contact}`}>{contact}</a></p>
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
        clients
        awards
      }
    }
  }
`