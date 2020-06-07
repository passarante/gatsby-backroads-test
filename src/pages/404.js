import React from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import Banner from "../components/Banner"
import Anilink from "gatsby-plugin-transition-link/AniLink"

const Error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="oops, its a dead end">
          <Anilink to="/" className="btn-white">
            back to home
          </Anilink>
        </Banner>
      </header>
    </Layout>
  )
}

export default Error
