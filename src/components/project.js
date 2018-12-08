import React from 'react'
import { Link } from 'gatsby'

const Project = ({ link, title }) => (
  <div class="project proj-5-box" >
    <Link to={link}>
        <div class="proj-5 proj-inner">
            <div class="image-box">
                

                <div class="project-info">
                    <div class="proj-rect proj-5-rect" data-scroll-speed="-30">
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
