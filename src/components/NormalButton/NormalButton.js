import React from 'react'
import styles from './NormalButton.module.css'

function NormalButton({ text }) {
  return (
    <div className={styles.button}>
        <button>{text}</button>
    </div>
  )
}

export default NormalButton