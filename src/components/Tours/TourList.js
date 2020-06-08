import React, { useState, useEffect } from "react"
import styles from "../../css/items.module.css"
import Title from "../Title"
import Tour from "./Tour"
const TourList = ({ tours: { edges } }) => {
  const [tours, setTours] = useState()
  const [sortedTours, setSortedTours] = useState()

  useEffect(() => {
    setTours(edges)
    setSortedTours(edges)
  }, [])
  return (
    <section className={styles.tours}>
      <Title title="our" subtitle="tours" />
      <div className={styles.center}>
        {sortedTours?.map(({ node }) => (
          <Tour tour={node} />
        ))}
      </div>
    </section>
  )
}

export default TourList
