import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import PageLink from '../components/pageLink'
import Project from '../components/project'

const SectionTitle = ({ title }) => (
  <h2 style={{fontSize: "4rem", marginTop: "4rem"}}>
    {title}
  </h2>
)

const IndexPage = ({ data: { projects: { edges: projects }, homepage: { frontmatter: { projectOrder } }}}) => (
  <Layout>
    {projectOrder}
  
    {projects.map(({ node: project }, i) => 
      <Project 
        key={project.id}
        index={i+1}
        link={project.fields.slug}
        title={project.frontmatter.title}
        thumbnail={project.frontmatter.thumbnail.childImageSharp.fluid}
      />
    )}

    <Link to="/about">
      <SectionTitle title="About &rarr;"/>
    </Link>

  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    homepage: markdownRemark (fileAbsolutePath: { regex: "/homepage.md/" }) {
      frontmatter {
        projectOrder
      }
    }

    projects: allMarkdownRemark(filter: { fields: { slug: { regex: "/projects/" }}}) {
      edges {
        node {
          id
          frontmatter {
            title
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

    blog: allMarkdownRemark(filter: { fields: { slug: { regex: "/posts/" }}}) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`