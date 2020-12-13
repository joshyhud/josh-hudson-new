import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import Intro from "../components/intro"
import Footer from "../components/footer"
import WorkContent from "../components/workcontent"
import {Link, graphql } from "gatsby"
import frontpageStyles from "../styles/frontpage.module.css" 

export default function Home({data}) {
  console.log(data)
  return ( 
    <Container>
    <Header />
    <Intro /> 

    <div className={frontpageStyles.posts}>
    <h1>Latest Posts </h1>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div className={frontpageStyles.post} key={node.id}>
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

    <Link className={frontpageStyles.more} to="/blog">View more posts</Link>
    </div>

    <div className={frontpageStyles.work}>
      <h1>My Work</h1>
      <p> I work with a range of different languages and platforms for example HTML, CSS, Javascript/JQuery, PHP, MySQL, Laravel, Wordpress and some React and Gatsby. For instance this site is built using Gatsby, which has been great fun working on and learning.</p>

    </div>

    <Footer />

    </Container>



    )
}

export const query = graphql`
query {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 3){
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