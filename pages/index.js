import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'

export default function Home({ weatherData }) {
  const {main, weather, name} = weatherData
  console.log("weather", weatherData)
  return (
    <div className={styles.container}>
      <Head>
        <title>Weather in Hanoi</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Weather in Hanoi
        </h1>
        <ul>
          <li>{name} - {weather[0].main}</li>
          <li>Min Temperature: {FtoC(main.temp_min)}</li>
          <li>Max Temperatire: {FtoC(main.temp_max)}</li>

        </ul>

      </main>



    </div>
  )
}

function FtoC(temp) {
  return ((5 / 9) * (temp - 32).toFixed(2))
}

export async function getStaticProps() {
  const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=fa83a95719bb2cabaccc5ab2d7e49c3d')
  return {
    props: {
      weatherData: res.data
    },
  }
}