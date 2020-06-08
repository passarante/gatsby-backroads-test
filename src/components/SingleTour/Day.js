import React, { useState } from "react"
import { FaAngleDown } from "react-icons/fa"
import styles from "../../css/day.module.css"

const Day = ({ day, info }) => {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <article className={styles.day}>
      <h4>
        {day}
        <button className={styles.btn}>
          <FaAngleDown onClick={() => setShowInfo(showInfo => !showInfo)} />
        </button>
      </h4>
      {showInfo && <p>{info}</p>}
    </article>
  )
}

export default Day
