import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Home - Next Tutorial </title>
      </Head>
        <h1 className={styles.homeTitle}>Welcome Home</h1>
        <h3>허현의 next.js 테스트 예제입니다 상단의 메뉴바를 이용해주세요!</h3>
        <img src="https://images.unsplash.com/photo-1502355984-b735cb2550ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              width="1700" height="600"
        
        >
        </img>
      
        
          
        </div>

  )
}
