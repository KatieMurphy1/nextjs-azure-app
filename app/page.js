import { revalidatePath } from "next/cache";
import styles from "./page.module.css";
import { getTime } from '@/util/time';

async function Time() {
  const data = await getTime();
  console.log('data: ' + JSON.parse(data).time);
  revalidatePath('/', 'layout');
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

