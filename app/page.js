import Image from "next/image";
import styles from "./page.module.css";
import { getTime } from '@/util/time';

async function Time() {
  const data = await getTime();
  console.log('data: ' + JSON.parse(data).time);

  return JSON.parse(data).time;
}

export default function Home() {
  return (
    <main className={styles.main}>
     <h1>Azure nextjs app</h1>
     <div>
      <Time />
     </div>
    </main>
  );
}

