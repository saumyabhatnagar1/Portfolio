import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"


const AboutPage=()=>{
    return (
        <Layout>

            <h1>About Page</h1>
            <p>Hi, I am Saumya Bhatangar. I am studying at IIIT Naya Raipur, India. I am undergrad in CSE. I am a full stack developer</p>
            <p>Want to work with me?<Link to="/contact">Contact Me</Link></p>
        </Layout>
    )
}
export default AboutPage