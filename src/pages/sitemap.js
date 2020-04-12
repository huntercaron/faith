import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { Title } from '../templates/project'

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 50vh 0 50px 40px;
`

const TitleLink = styled(Title)`
  a {
    height: 40px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #333;
  }

  a:hover {
    color: #999;
  }
`

const Sitemap = (props) => {
  const {
    data: { projects },
  } = props

  return (
    <Container>
      {projects.edges.map(({ node: project }) => (
        <TitleLink>
          <Link to={project.fields.slug}>
            <span className="underline underline-black">______ </span>
            {project.frontmatter.title}
          </Link>
        </TitleLink>
      ))}
    </Container>
  )
}

export default Sitemap

export const query = graphql`
  query SitemapQuery {
    projects: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/projects/" } } }
    ) {
      edges {
        node {
          id
          fileAbsolutePath

          frontmatter {
            title
            key
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 2100, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
