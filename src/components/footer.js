import React from "react";
import{useStaticQuery,graphql} from 'gatsby'
const Footer=()=>{
    const author=useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                author
            }
        }
    }
    `)
    return(
        <footer>Created By, {author.site.siteMetadata.author}, &copy;  2020</footer>
    )
}

export default Footer