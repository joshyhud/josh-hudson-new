import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import Footer from "../components/footer"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import frontpageStyles from "../styles/frontpage.module.css" 

export default function Home({data}) {
  console.log(data)
  return ( 
  <Container>
	  <Header />

	  <div className={frontpageStyles.posts}>
        <h1>Blog Posts</h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div className={frontpageStyles.post} key={node.id}>
            <Link to={node.fields.slug}>
            <h2>{node.frontmatter.title}{" "}
              <span>— {node.frontmatter.date}</span>
            </h2>
            <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>

	  <Footer />

  </Container>



  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }){
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
                    fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`