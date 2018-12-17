import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
// import "intersection-observer"

import './layout.css'
import Transition from "../components/transition"
import { BigCross, SmallCross } from '../components/crosses';


const Layout = ({ children, pageTitle, location }) => (
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
      
        {location.pathname === "/" ? (
          <BigCross />
        ):(
          <SmallCross left={!location.pathname.includes("about")}/>
        )}

        <Transition location={location}>
          <div style={{ position: "relative" }}>
          { console.log(location)}
            {children}
          </div>
        </Transition>
      </div>
    )}
  />
)


export default Layout;