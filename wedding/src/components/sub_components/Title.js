import React from 'react'

//styles
import styles from './Title.module.css'

const Title = ({name, style}) => {
  return (
    <>
    <h1 className={`${styles.title} ${{style}}`}>{name}</h1>
    </>
  )
}

export default Title
