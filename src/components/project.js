import React from 'react'
import { Link } from 'gatsby'

const Project = ({ link, title }) => (
  <div class="project hide-project proj-5-box" >
    <div class="proj-5 proj-inner" data-proj="8" >
        <div class="image-box">
            <img src="images/proj-5.jpg"
                srcset="images/proj-5@2x.jpg 2x, images/proj-5@3x.jpg 3x"
                class="proj-5-img proj-img"
                alt="fshnunlimited magazine issue #3"/>

            <div class="project-info">
                <div class="proj-rect proj-5-rect" data-scroll-speed="-30">
                    <div class="proj-text-box">
                        <h4><span class="underline">_____ </span>Fshnunlimited <br/>“Life and Death” Edition</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)

export default Project
