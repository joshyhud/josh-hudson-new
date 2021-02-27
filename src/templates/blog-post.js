import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import Container from "../components/container"
import postStyles from "../styles/post.module.css"
import SEO from "../components/seo"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const image = post.frontmatter.image
      ? post.frontmatter.image.childImageSharp.resize
      : null

  return (
    <Container>
    	  <Header />
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          image={image}
          pathname={this.props.location.pathname}
        />
      <div className={postStyles.article}>
        <h1>{post.frontmatter.title}</h1>
        <h4>{post.frontmatter.date}</h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      	  <Footer />
    </Container>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        image: featured
      }
    }
  }
`