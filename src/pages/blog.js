import React from "react"
import Layout from "../components/layout"
import {graphql,useStaticQuery} from "gatsby"



const BlogPage=()=>{
    const data=useStaticQuery(graphql`query{
        allMarkdownRemark{
          edges{
            node{
              frontmatter{
                title
                date
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
                        <h2>{item.node.frontmatter.title}</h2>
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