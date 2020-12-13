import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import Footer from "../components/footer"
import { Link, graphql } from "gatsby"

export default function Home({data}) {
  console.log(data)
  return ( 
  <Container>
	  <Header />

	  <div>
        <h1>Blog Posts</h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
                      <Link
              to={node.fields.slug}
            >
            <h3>
              {node.frontmatter.title}{" "}
              <span>
                — {node.frontmatter.date}
              </span>
            </h3>
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