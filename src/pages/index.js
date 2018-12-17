import React from 'react'
import { graphql, Link } from 'gatsby'
import './index.css'

import Img from 'gatsby-image'
import Layout from '../components/layout'
import Project from '../components/project'

const IndexPage = ({ data: { projects: { edges: projects }, homepage: { frontmatter: { projectOrder }}}}) => {
  projects.map(project => {
    return project.relativePath = "src/" + project.node.fileAbsolutePath.split("src/")[1]
  })

  projects.sort((a, b) => {
    return projectOrder.indexOf(a.relativePath) - projectOrder.indexOf(b.relativePath)
  });

  const activeProjects = projects.filter(project => projectOrder.indexOf(project.relativePath) > -1);

  return (
    <Layout>
      <div className="grid">
        {activeProjects.map(({ node: project }, i) => 
          <Project 
            key={project.id}
            index={i+1}
            link={project.fields.slug}
            title={project.frontmatter.title}
            thumbnail={project.frontmatter.thumbnail.childImageSharp.fluid}
          />
        )}
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query GridQuery {
    homepage: markdownRemark (fileAbsolutePath: { regex: "/homepage.md/" }) {
      frontmatter {
        projectOrder
      }
    }
    projects: allMarkdownRemark(filter: { fields: { slug: { regex: "/projects/" }}}) {
      edges {
        node {
          id
          fileAbsolutePath

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