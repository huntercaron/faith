import React from 'react'
import { Link } from 'gatsby'
import './crosses.js'

import cross from './../assets/cross.svg'
import thinCross from './../assets/cross-thin.svg'
import thickCross from './../assets/cross-thick.svg'

const BigCross = (props) => (
  <Link to="/about">
    <div className="cross-box" {...props}>
      <img className="cross"  alt="cross-logo" src={cross}/>
    </div>
  </Link>
)

const SmallCross = (props) => (
  <Link to="/">
    <div className={"cross-box thin-cross-box hidden-cross " + (props.left && "left-cross-box")} {...props}> 
      <img className="cross" alt="cross-logo" src={thickCross}/>
      <img className="cross cross-thin" alt="cross-logo" src={thinCross}/>
    </div>
  </Link>
)

export { BigCross, SmallCross }