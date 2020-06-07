import React from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import Banner from "../components/Banner"
import { Link } from "gatsby"
const Error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="oops, its a dead end">
          <Link to="/" className="btn-white">
            back to home
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default Error
