import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Project = ({ link, title, thumbnail }) => (
  <div class="project proj-5-box" >
    <Link to={link}>
        <div class="proj-5 proj-inner">
            <div class="image-box">
                <Img class="proj-5-img proj-img" fluid={thumbnail}/>

                <div class="project-info">
                    <div class="proj-rect proj-5-rect">
                        <div class="proj-text-box">
                            <h4><span class="underline">_____ </span>{title}</h4>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </Link>
    </div>
)

export default Project
