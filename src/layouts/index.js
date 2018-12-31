import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import './layout.css'
import Transition from "../components/transition"
import { BigCross, SmallCross } from '../components/crosses';

const timeout = 400;

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

const Layout = (props) => (
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
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Faith is a multifaceted creative design agency with a focus on fashion, retail, luxury, and lifestyle sectors.' },
            { name: 'keywords', content: 'design, faith' },
            { name: 'author', content: 'Paul Sych'}
          ]}
        >
          <html lang="en" />
        </Helmet>
      

        <BigCross style={{...getCrossStyle[(props.location.pathname === "/" ? 'active' : 'inactive')]}}/>
          
        <div style={{...getCrossStyle[((props.location.pathname !== "/") ? 'active' : 'inactive')]}}>
          <SmallCross 
            style={{opacity: 0, ...getCrossStyle[(!(props.location.pathname.includes("about")) ? 'active' : 'inactive')]}}
            align="LEFT"
          />

          <SmallCross 
            style={{opacity: 0, ...getCrossStyle[(props.location.pathname.includes("about") ? 'active' : 'inactive')]}}
          />
        </div>


        <Transition location={props.location}>
          <div style={{ position: "relative" }}>
          { console.log(props)}
            {props.children}
          </div>
        </Transition>
      </div>
    )}
  />
)


export default Layout;