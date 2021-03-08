import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import Intro from "../components/intro"
import Footer from "../components/footer"
import {Link, graphql } from "gatsby"
import frontpageStyles from "../styles/frontpage.module.css" 

export default function Home({data}) {
  console.log(data)
  return ( 
    <Container>
    <Header />
    <Intro /> 
    <div className={frontpageStyles.work}>
      <h1>About me</h1>
      <p> I am a Web Developer, working for digital agency <Link to="https://wearetilt.com">We Are Tilt</Link> in Brighton. I work with a range of different languages and platforms for example HTML, CSS/SCSS, Javascript/JQuery, PHP, MySQL, Laravel, Wordpress and some React and Gatsby. For instance this site is built using Gatsby, which has been great fun working on and learning. I also have a good knowledge of HTTPS server setup and managing domains and sites.</p>
      <p> I started my development journey back in 2017 with short 8 week night classes and joined up with codebar to learn my new skills, I then landed my first development job in 2018 and have been coding and learning ever since. The brighton dev community and in the twitterverse is amazing and so helpful and supportful. I have spoken about my journey on podcasts and web interviews and happy to blog when i can about what I find interesting</p>
      <p>If you would like to get in touch please reach out to me on twitter or the contact form.</p>
      <Link className={frontpageStyles.more} to="/work">View my Work</Link>
    </div>

    <div className={frontpageStyles.posts}>
      <h1>Latest Posts </h1>
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
          <Link className={frontpageStyles.more} to="/blog">View more posts</Link>
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