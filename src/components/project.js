import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import './project.css'

const Project = ({ title, thumbnail, link, projectKey }) => (
    <div className={`project proj-${projectKey}-box`}>
        <Link to={link} className="project-link">
            <div className="proj-inner">
                <Img fluid={thumbnail} className={`proj-${projectKey}-img proj-image`}/>

                <div class="project-info">
                    <div class={`proj-rect proj-${projectKey}-rect`}>
                        <div class="proj-text-box">
                            <h4><span class="underline">_____ </span>{title}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </div>
)

// const Project = ({ link, title, thumbnail, index }) => (
//   <div class={`project proj-${index}-box`} >
//     <Link to={link}>
//         <div class={`proj-${index} proj-inner`}>
//             <div class="image-box">
//                 <Img class={`proj-${index}-img proj-img`} fluid={thumbnail}/>

//                 <div class="project-info">
//                     <div class={`proj-rect proj-${index}-rect`}>
//                         <div class="proj-text-box">
//                             <h4><span class="underline">_____ </span>{title}</h4>
//                         </div>
//                     </div>
//                 </div>

//                 </div>
//             </div>
//         </Link>
//     </div>
// )

export default Project
