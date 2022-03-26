import type { NextPage } from 'next'
import Nav from "../components/common/Layout/Nav"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  return (
    <>
    <Nav/>
    <div className={styles.home}>
    </div>
    </>
  )
}

export default Home

