import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import mdText from './markdown-text'
import ReactMarkdown from 'react-markdown'
import breaks from 'remark-breaks'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <center><iframe width="560" height="315" src="https://www.youtube.com/embed/XasOVvkrFI4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
    <ReactMarkdown
      source={mdText}
      plugins={[breaks]}
    />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
  </Layout>
)

export default IndexPage

