const path=require('path')
const { cpuUsage } = require('process')

module.exports.onCreateNode=({node,actions})=>{

    const {createNodeField}=actions
    if(node.internal.type==='MarkdownRemark'){
        const slug=path.basename(node.fileAbsolutePath,'.md')
        console.log(slug)
        createNodeField({
            node:node,
            name:'slug',
            value:slug
        })
    }
}