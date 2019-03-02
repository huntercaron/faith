import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';
import './crosses.js'

import cross from './../assets/cross.svg'
// import whiteCross from './../assets/cross-white.svg'
import thinCross from './../assets/cross-thin.svg'
import thickCross from './../assets/cross-thick.svg'

// const BigCross = (props) => (
//   <Link to="/about">
//     <div className="cross-box" {...props}>
//       <img className="cross"  alt="cross-logo" src={cross}/>
//     </div>
//   </Link>
// )

const CrossSVG = styled.svg`

  line {
    fill: none;
    stroke: white;
  }

  &:hover line {
    stroke: black;
  }

  &:hover polygon {
    fill: white;
  }
`

const BigCross = (props) => (
  <Link to="/about">
    <div className="cross-box" {...props}>
      <CrossSVG className="cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285.99 421.42">
      <title>cross</title>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <polygon points="285.99 220.34 195.99 130.34 195.99 102.88 93.11 0 89.98 0 89.98 117.3 0 117.3 0 120.62 89.98 210.61 89.98 318.41 192.99 421.42 195.99 421.42 195.99 223.3 285.99 223.3 285.99 220.34"/>
            <line x1="91.99" y1="1.71" x2="91.99" y2="317.59"/>
            <line x1="1.51" y1="119.3" x2="182.11" y2="119.3"/>
          </g>
        </g>
      </CrossSVG >
    </div>
  </Link>
)

const SmallCross = (props) => (
  <Link to="/">
    <div className={"cross-box thin-cross-box hidden-cross " + (props.align === "LEFT" && "left-cross-box")} {...props}> 
      <img className="cross" alt="cross-logo" src={thickCross}/>
      <img className="cross cross-thin" alt="cross-logo" src={thinCross}/>
    </div>
  </Link>
)

export { BigCross, SmallCross }