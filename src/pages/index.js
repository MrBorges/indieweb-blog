import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => (
  <Layout pageTitle="Home Page">
    <p>This is a work in progress. Hang on.</p>
    <StaticImage 
     alt="This is my play room"
     src="../images/gaming-room.jpg" />
  </Layout>
  
)

export default IndexPage
