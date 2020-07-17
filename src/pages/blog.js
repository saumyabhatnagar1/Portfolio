import React from "react"
import Layout from "../components/layout"
import {graphql,useStaticQuery, Link} from "gatsby"

import blogStyles from './blog.module.scss'

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
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((item)=>{
                    return(
                    <li className={blogStyles.post}>
                      <Link to={`/blog/${item.node.fields.slug}`}>
                        <h2>{item.node.frontmatter.title} </h2>
                        <p>{item.node.frontmatter.date}</p>
                      </Link>
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