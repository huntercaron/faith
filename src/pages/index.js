import React from 'react'
import { graphql } from 'gatsby'
import "intersection-observer"
import './index.css'

import Project from '../components/project'
import { BigCross } from '../components/crosses'

const IndexPage = ({ data: { projects: { edges: projects }, homepage: { frontmatter: { projectOrder }}}}) => {
  projects.map(project => {
    return project.relativePath = "src/" + project.node.fileAbsolutePath.split("src/")[1]
  })

  projects.sort((a, b) => {
    return projectOrder.indexOf(a.relativePath) - projectOrder.indexOf(b.relativePath)
  });

  const activeProjects = projects.filter(project => projectOrder.indexOf(project.relativePath) > -1);

  return (
    <div>
      <div className="grid">
        {activeProjects.map(({ node: project }, i) => 
          <Project 
            key={project.id}
            projectKey={project.frontmatter.key}
            index={i+1}
            link={project.fields.slug}
            title={project.frontmatter.title}
            thumbnail={project.frontmatter.thumbnail.childImageSharp.fluid}
          />
        )}
      </div>
    </div>
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