import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import './layout.css'
import Transition from '../components/transition'
import { BigCross, SmallCross } from '../components/crosses'
import { Overlays } from '../components/overlays'

const timeout = 400

const getCrossStyle = {
  active: {
    transition: `opacity ${timeout}ms ease-out`,
    pointerEvents: 'auto',
    opacity: 1,
  },
  inactive: {
    transition: `opacity ${timeout}ms ease-in`,
    pointerEvents: 'none',
    opacity: 0,
  },
}

class Layout extends React.Component {
  state = {
    leftAlignCross: false,
  }

  updateCrossAlignment = () => {
    this.setState({
      leftAlignCross: this.props.location.pathname.includes('projects'),
    })
  }

  componentDidMount() {
    this.updateCrossAlignment()
  }

  onExited = () => {
    if (!this.props.location.pathname.includes('projects')) {
      setTimeout(() => {
        this.updateCrossAlignment()
      }, 100)
    }
  }

  onEntering = () => {
    if (this.props.location.pathname.includes('projects'))
      this.updateCrossAlignment()
  }

  render() {
    const { location, children } = this.props

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={(data) => (
          <div>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: 'description',
                  content:
                    'Faith is a multifaceted creative design agency with a focus on fashion, retail, luxury, and lifestyle sectors.',
                },
                { name: 'keywords', content: 'design, faith' },
                { name: 'author', content: 'Paul Sych' },
              ]}
            >
              <html lang="en" />
            </Helmet>

            <BigCross
              style={{
                ...getCrossStyle[
                  location.pathname === '/' ||
                  location.pathname === '/offline-plugin-app-shell-fallback/'
                    ? 'active'
                    : 'inactive'
                ],
              }}
            />

            <div
              style={{
                ...getCrossStyle[
                  location.pathname !== '/' &&
                  location.pathname !== '/offline-plugin-app-shell-fallback/'
                    ? 'active'
                    : 'inactive'
                ],
              }}
            >
              <SmallCross align={this.state.leftAlignCross ? 'LEFT' : ''} />
            </div>

            <Overlays />

            <Transition
              location={location}
              onExited={this.onExited}
              onEntering={this.onEntering}
            >
              <div style={{ position: 'relative' }}>{children}</div>
            </Transition>
          </div>
        )}
      />
    )
  }
}

export default Layout
