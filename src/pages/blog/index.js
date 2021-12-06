import * as React from 'react'
import Layout from '../../components/layout'
import { graphql, Link } from 'gatsby'
import { postTitle } from '../../components/layout.module.css'

const blogPage = ({data}) =>{
    return(
        <Layout pageTitle ="My blog posts">
            
                {
                    data.allMdx.nodes.map((node) => (
                        <article key={node.id}>
                         <h2 className={postTitle}><Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link></h2>
                         <p>Posted: {node.frontmatter.date}</p>                         
                        </article>
                    ))
                }
            
        </Layout>
    )
}

export const query = graphql`
query {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
      id      
      slug
    }
  }
}
`

export default blogPage