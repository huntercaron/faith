import React from "react"
import { TransitionGroup, Transition as ReactTransition } from "react-transition-group"

const timeout = 250
const getTransitionStyles = {
  entering: {
    position: `absolute`,
    opacity: 0,
  },
  entered: {
    transition: `all ${timeout}ms ease-in-out`,
    transform: `translateY(0) scale(1)`,
    transformOrigin: `top center`,
    opacity: 1,
  },
  exiting: {
    transition: `all ${timeout}ms ease-in-out`,
    transform: `translateY(10px) scale(0.95)`,
    transformOrigin: `top center`,
    opacity: 0,
  },
}

class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props

    return (
      <TransitionGroup>
        <ReactTransition
          key={location.pathname}
          timeout={{
            enter: timeout,
            exit: timeout,
          }}
        >
          {status => (
            <div
              style={{
                ...getTransitionStyles[status],
              }}
            >
              {children}
            </div>
          )}
        </ReactTransition>
      </TransitionGroup>
    )
  }
}

export default Transition
