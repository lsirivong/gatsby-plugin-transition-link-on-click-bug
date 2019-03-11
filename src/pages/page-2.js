import React from "react"
import Link from "gatsby-plugin-transition-link"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TextBlob from "../components/text-blob"

const clickHandler = () => {
  console.log(`${new Date()} : Page 2 Link Click`)
}

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Instructions</h1>

    <p>
      Scroll Down and Click a link. Notice that links with `onClick` do not reset scroll position.
    </p>

    <p>
      <Link to="/">Go back to the homepage (Normal)</Link>
    </p>
    <p>
      <Link to="/" onClick={clickHandler}>Go back to the homepage (With Click Handler)</Link>
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
      <Link to="/">Go back to the homepage (Normal)</Link>
    </p>
    <p>
      <Link to="/" onClick={clickHandler}>Go back to the homepage (With Click Handler)</Link>
    </p>
  </Layout>
)

export default SecondPage
