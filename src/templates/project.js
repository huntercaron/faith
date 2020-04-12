import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import 'intersection-observer'

const Title = styled.h1`
  text-align: left;
  font-size: 1.35rem;
  letter-spacing: 0.2px;
  transition: all 500ms ease;
  font-family: Georgia;
  text-transform: uppercase;
  font-size: 1.1rem;
  letter-spacing: 0.7px;
  margin-bottom: 2rem;
  line-height: 1.4;
  width: 100%;
  max-width: 1100px;
`

const Info = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 2rem 4rem 6px 4rem;
`

const Description = styled.div`
  font-size: 1.35rem;
  letter-spacing: 0.2px;
  max-width: 800px;
  white-space: pre-wrap;
  margin-bottom: 4rem;
  margin-right: 2rem;
  width: 100%;
`

const Container = styled.div`
  width: 100%;
  margin: 30vh 0 4rem 0;
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
`

const Gallery = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 2rem;

  .gatsby-image-wrapper {
    width: 100%;
    margin: 2rem 1rem;
    max-width: 1100px;
    max-height: calc(100vh - 4rem);

    img {
      object-fit: contain !important;
    }
  }
`

const ProjectTemplate = ({ data }) => {
  const project = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const siteDescription = project.excerpt

  return (
    <div>
      <Container>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${project.frontmatter.title} | ${siteTitle}`}
        />

        <Info>
          <Title>
            <span className="underline underline-black">______ </span>{' '}
            {project.frontmatter.title}
          </Title>
          <Description
            dangerouslySetInnerHTML={{
              __html: project.frontmatter.description,
            }}
          />
        </Info>

        <Gallery>
          {project.frontmatter.gallery_images.map((image) => (
            <Img
              backgroundColor="#fbfbfb"
              key={image.id}
              fluid={image.childImageSharp.fluid}
            />
          ))}
        </Gallery>
      </Container>
    </div>
  )
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        description
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1100, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        gallery_images {
          id
          childImageSharp {
            fluid(maxWidth: 1100, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`
