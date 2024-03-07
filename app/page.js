import { revalidatePath } from "next/cache";
import styles from "./page.module.css";
import { getTime } from '@/util/time';

async function Time() {
  const data = await getTime();
  console.log('data: ' + data.results);
  revalidatePath('/', 'layout');
  return data.results;
}

export default function Home() {
  return (
    <main className={styles.main}>
     <h1>Azure nextjs app</h1>
     <div> 
      <p>Total number of users: </p>
      <Time />
     </div>
    </main>
  );
}

