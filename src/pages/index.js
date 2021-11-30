import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => (
  <Layout pageTitle="Home Page">
    <p>I'm doing this by following a gatsby tutorial</p>
    <StaticImage 
     alt="Silly girl, being silly."
     src="../images/silly_girl.png" />
  </Layout>
  
)

export default IndexPage
