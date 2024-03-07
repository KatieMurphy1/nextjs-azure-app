import { revalidatePath } from "next/cache";
export async function getTime() {
    const data = JSON.stringify({ time: new Date() });
    console.log('from get time')
    console.log(data)
    revalidatePath('/', 'layout');
    return data;
}