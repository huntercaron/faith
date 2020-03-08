import React from 'react'
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group'

const timeout = 250
const getTransitionStyles = {
  entering: {
    position: `absolute`,
    opacity: 0,
  },
  entered: {
    transition: `all ${timeout}ms ease-in-out`,
    transform: `translateY(0) scale(1)`,
    transformOrigin: `center bottom`,
    opacity: 1,
  },
  exiting: {
    transition: `all ${timeout}ms ease-in-out`,
    transform: `scale(0.995)`,
    transformOrigin: `center bottom`,
    opacity: 0,
  },
}

class Transition extends React.PureComponent {
  onEntering = () => {
    this.props.onEntering()
  }

  onExited = () => {
    this.props.onExited()
  }

  render() {
    const { children, location } = this.props

    return (
      <TransitionGroup>
        <ReactTransition
          key={location.pathname}
          onExited={this.onExited}
          onEntering={this.onEntering}
          timeout={{
            enter: timeout,
            exit: timeout,
          }}
        >
          {status => (
            <div style={{ ...getTransitionStyles[status] }}>{children}</div>
          )}
        </ReactTransition>
      </TransitionGroup>
    )
  }
}

export default Transition
