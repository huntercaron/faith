import React from 'react'
import './crosses.js'

import cross from './../assets/cross.svg'

const BigCross = () => (
  <div className="cross-box">
    <img class="cross"  alt="cross-logo" src={cross}/>
  </div>
)

export { BigCross }