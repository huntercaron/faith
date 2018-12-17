import React from 'react'
import { Link } from 'gatsby'
import './crosses.js'

import cross from './../assets/cross.svg'
import thinCross from './../assets/cross-thin.svg'
import thickCross from './../assets/cross-thick.svg'

const BigCross = () => (
  <Link to="/about">
    <div className="cross-box">
      <img class="cross"  alt="cross-logo" src={cross}/>
    </div>
  </Link>
)

const SmallCross = ({ left }) => (
  <Link to="/">
    <div className={"cross-box thin-cross-box hidden-cross " + (left && "left-cross-box")}>
      <img class="cross" alt="cross-logo" src={thickCross}/>
      <img class="cross cross-thin" alt="cross-logo" src={thinCross}/>
    </div>
  </Link>
)

export { BigCross, SmallCross }