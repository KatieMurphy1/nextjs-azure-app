import { revalidatePath } from "next/cache";
export async function getTime() {
   // const data = JSON.stringify({ time: new Date() });
    const data = await fetch('https://testwebappnodejs-apim.azure-api.net/userapi/users').then(r => r.json());
    console.log('from get time')
    console.log(data)
    revalidatePath('/', 'layout');
    return data;
}