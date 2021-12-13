import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { container, 
           heading, 
           navLinks, 
           navLinkItem, 
           navLinkText, 
           siteTitle, 
           siteTop, 
           topRight, 
           topLeft, 
           topDisplace,
           siteFooter,
           profileLink
 } from './layout.module.css'
import "@fontsource/baloo-bhaijaan-2/600.css"
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({pageTitle, children}) => {
  const data = useStaticQuery(graphql`query {
    site {
      siteMetadata {
        title
      }
    }
  }`)

  return(
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <div className={siteTop}>
        <div className={topRight}>
        <header className={siteTitle}>{data.site.siteMetadata.title}</header>
        <nav>        
          <ul className={navLinks}>
            <li className={navLinkItem}><Link to='/' className={navLinkText}>Home</Link></li>
            <li className={navLinkItem}><Link to='/blog' className={navLinkText}>Blog</Link></li>
            <li className={navLinkItem}><Link to='/about' className={navLinkText}>About Me</Link></li>          
          </ul>
        </nav>     
        </div>
        <div className={topLeft}></div>           
        <div className={topDisplace}></div>
      </div>      
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <footer>
        <div className={siteFooter}>
        <ul className={navLinks}>
            <li className={profileLink}><Link to='/'>
              <StaticImage
                alt="twitter profile"
                src="../images/twitter-brands.svg"                
            />
              </Link></li>
            <li className={profileLink}><Link to='/blog'>
            <StaticImage
                alt="twitter profile"
                src="../images/github-brands.svg"                
            />
              </Link></li>                      
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Layout;