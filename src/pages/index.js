import React from "react"
import Link from "gatsby-plugin-transition-link"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TextBlob from "../components/text-blob"

const clickHandler = () => {
  console.log(`${new Date()} : Index Link Click`)
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Instructions</h1>

    <p>
      Scroll Down and Click a link. Notice that links with `onClick` do not reset scroll position.
    </p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <p>
      <Link to="/page-2/">Go to page 2 (Normal)</Link>
    </p>
    <p>
      <Link to="/page-2/" onClick={clickHandler}>Go to page 2 (With Click Handler)</Link>
    </p>

    <TextBlob />
    <TextBlob />
    <TextBlob />
    <TextBlob />
    <TextBlob />
    <TextBlob />
    <TextBlob />
    <TextBlob />
    <TextBlob />
    <TextBlob />

    <p>
      <Link to="/page-2/">Go to page 2 (Normal)</Link>
    </p>
    <p>
      <Link to="/page-2/" onClick={clickHandler}>Go to page 2 (With Click Handler)</Link>
    </p>
  </Layout>
)

export default IndexPage
