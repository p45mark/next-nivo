import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { lineChartData } from "../data";
import { LineChart } from "../LineChart";

export default function Home() {
  const [time, timeSet] = React.useState(7);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <button onClick={() => timeSet(7)}>7</button>
          <button onClick={() => timeSet(30)}>30</button>
          <button onClick={() => timeSet(120)}>120</button>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minMax(600px, 1fr))",
            gridGap: "2rem",
          }}
        >
          {lineChartData[time]?.map(({ id, data, areaBaselineValue }) => (
            <div key={id}>
              <LineChart
                title={String(id)}
                data={data}
                areaBaselineValue={areaBaselineValue}
              />
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
