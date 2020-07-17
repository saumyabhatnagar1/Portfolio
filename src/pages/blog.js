import React from "react"
import Layout from "../components/layout"
import {graphql,useStaticQuery, Link} from "gatsby"



const BlogPage=()=>{
    const data=useStaticQuery(graphql`query{
        allMarkdownRemark{
          edges{
            node{
              frontmatter{
                title
                date
              }
              fields{
                slug
              }
              
             
            }
          }
        }
      }`)
      
    return (
        
            <Layout>
            <h1>My Blog</h1>
            <ol>
                {data.allMarkdownRemark.edges.map((item)=>{
                    return(
                    <li>
                        <h2><Link to={`/blog/${item.node.fields.slug}`}>{item.node.frontmatter.title}</Link> </h2>
                        <p>{item.node.frontmatter.date}</p>
                    </li>
                    )
                })}
            </ol>
            <div>

            
            </div>
            <p>Coming Soon....</p>
            </Layout>
        
    )
}

export default BlogPage