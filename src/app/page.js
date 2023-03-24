import React from 'react'
import classes from './page.module.css'
import HomePage from './components/HomePage'
export default function Home() {
  return (
    <div >
      <main className={classes.container}>
      <HomePage />
      </main>
    </div>
  )
}
