import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Project = ({ link, title, thumbnail, index }) => (
  <div class={`project proj-${index}-box`} >
    <Link to={link}>
        <div class={`proj-${index} proj-inner`}>
            <div class="image-box">
                <Img class={`proj-${index}-img proj-img`} fluid={thumbnail}/>

                <div class="project-info">
                    <div class={`proj-rect proj-${index}-rect`}>
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
