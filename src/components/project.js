import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import './project.css'

const Project = ({ title, thumbnail, link, projectKey }) => (
  <div className={`project proj-${projectKey}-box`}>
    <Link to={link} className="project-link">
      <div className="proj-inner">
        <Img
          fluid={thumbnail}
          backgroundColor="#ffffff"
          className={`proj-${projectKey}-img proj-image`}
        />

        <div className="project-info">
          <div className={`proj-rect proj-${projectKey}-rect`}>
            <div className="proj-text-box">
              <h4>
                <span className="underline">_____ </span>
                {title}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>
)

export default Project
