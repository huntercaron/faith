import React, { useState, useEffect, useRef } from 'react';

import overlay001 from '../assets/001overlay.png'
import overlay002 from '../assets/002overlay.png'
import overlay003 from '../assets/003overlay.png'

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  });

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}


export const Overlays = () => {
  const [overlayIndex, setOverlayIndex] = useState(null)
  const overlays = [overlay001, overlay002, overlay003];
  
  useInterval(() => {
    const milli = new Date().getMilliseconds();
    const randNum = () => Math.floor(Math.random() * 7) + 3;
    const rands = Array(3).fill(0).map(() => (milli % randNum()) === 0);
    const trueIndex = rands.indexOf(true);
    setOverlayIndex((trueIndex > -1) ? trueIndex : null)
    setTimeout(() => { setOverlayIndex(null) }, 250);
  }, 12043)

  return (
    <>
      {overlays.map((overlay, i) => 
        <div 
          className={`type-overlay overlay-00${i+1}`}
          key={overlay}
          style={{
            backgroundImage: `url("${overlay}")`, 
            opacity: (overlayIndex === i) ? 1 : 0
          }}
        />
      )}
    </>
  )
}