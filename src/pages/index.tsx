// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"



type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
        }
        fields: {
          slug: string
        }
      }
    }
  }
}

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Untangle - Mental Health Matters" />
      <section className="header_section">
        <div className="container">
          <div className="main-title">
            <h2 className="logo">
              <div className="title-text">
                <span className="heading">untangle</span>
              </div>
            </h2>
          </div>

          

          <div className="secondary-text">
            <h1>Accelerating India's Mental Health Revolution</h1>
            <p>In view of the mental health crisis caused by the pandemic, we aim to support as many people as possible through our <b>#CopeWithCovid</b> Initiative.</p>
          </div>

          <div className="subscribe-box">
              <div className="form">
                <div id="mc_embed_signup">
                  
                    <div id="mc_embed_signup_scroll" className="newsletter">
                      
                      <div className="sub-action">
                        
                        <div className="submit-button">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeZYMXu8SwreOd7Ze3N7_j7-1U8ufwA91Qxy1y-195am1zOeg/viewform" target="__blank">
                            <input type="submit" value="Sign up here" name="subscribe" id="mc-embedded-subscribe" className="button sub-button" />
                            </a>
                        </div>
                      </div>
                    </div>
                  
                </div>
              </div>
              

              <div className="social-p">
                <p>200+ clients trust our 40+ Therapists</p>
              </div>
          </div>
          <div className="latest-issue">
            <a href="https://bit.ly/untanglecwcfaq" target="__blank" className="issue-box">
              <h2>Here are some FAQs</h2>
              <h5> for the ones who wish to seek Therapy/Counseling Sessions</h5>
            </a>
            <p>More questions? Contact us directly via <a href="https://wa.me/message/ISLOY4QZG7GTM1" target="__blank">Whatsapp</a></p>
          </div>

          <div className="join-us">
            <a href="https://bit.ly/untanglecwcfaq" target="__blank"className="join-us-box">
            <h2>Join us as a Psychologist</h2>
            </a>
            
          </div>
          
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer-wrap">
            <div className="credit">
              <h4>untangle, 2020</h4>
              <ul className="menu-social">
                  <li>
                    <a href="https://instagram.com/untangle.space" target="__blank"><img src="/insta.svg"/></a>
                  </li>
                  <li>
                    <a href="https://twitter.com/untangle_space" target="__blank"><img src="/twitter.svg"/></a>
                  </li>
              </ul>
            </div>
            <div className="quote">
              <h4>Curated with love <a href="http://aakarshna.co/?ref=designletterco" target="__blank"></a><a href="https://vijayverma.co/?ref=designletterco" target="__blank"></a></h4>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
