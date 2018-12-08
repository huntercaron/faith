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

const IndexPage = ({ data: { projects: { edges: projects }, blog: { edges: posts }}}) => (
  <Layout>
    {projects.map(({ node: project }) => 
      <Project 
        key={project.id}
        link={project.fields.slug}
        title={project.frontmatter.title}
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
    projects: allMarkdownRemark(filter: { fields: { slug: { regex: "/projects/" }}}) {
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