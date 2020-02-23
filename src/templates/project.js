import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { useLocalRemarkForm } from 'gatsby-tinacms-remark'
import 'intersection-observer'
import get from 'lodash.get'

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
  const ProjectForm = {
    label: 'Project',
    fields: [
      {
        label: 'Title',
        name: 'frontmatter.title',
        description: 'Enter the title of the post here',
        component: 'text',
      },
      {
        label: 'Description',
        name: 'frontmatter.description',
        description: 'Enter the post description',
        component: 'textarea',
      },
      {
        label: 'Images',
        name: 'frontmatter.gallery_images',
        component: 'group-list',
        description: 'Gallery List',
        itemProps: item => ({
          key: item.id,
        }),
        defaultItem: () => ({
          name: 'New Image',
          id: Math.random()
            .toString(36)
            .substr(2, 9),
        }),
        fields: [
          {
            name: 'id',
            label: 'Thumbnail',
            component: 'image',
            parse: filename => `/content/images/${filename}`,

            previewSrc: (formValues, { input }) => {
              console.log(input)
              console.log(formValues)
              const path = input.name.replace('rawFrontmatter', 'frontmatter')
              const gastbyImageNode = get(formValues, path)
              if (!gastbyImageNode) return ''
              //specific to gatsby-image
              return gastbyImageNode.childImageSharp.fluid.src
            },

            uploadDir: () => {
              return '/static/assets/media'
            },
          },
        ],
      },
      {
        name: 'rawFrontmatter.thumbnail',
        label: 'Thumbnail',
        component: 'image',
        parse: filename => `/content/images/${filename}`,

        previewSrc: (formValues, { input }) => {
          const path = input.name.replace('rawFrontmatter', 'frontmatter')
          const gastbyImageNode = get(formValues, path)
          if (!gastbyImageNode) return ''
          //specific to gatsby-image
          return gastbyImageNode.childImageSharp.fluid.src
        },

        uploadDir: () => {
          return '/static/assets/media'
        },
      },
    ],
  }

  const [markdownRemark] = useLocalRemarkForm(data.markdownRemark, ProjectForm)
  const project = markdownRemark
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
          {project.frontmatter.gallery_images.map(image => (
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
      ...TinaRemark
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
