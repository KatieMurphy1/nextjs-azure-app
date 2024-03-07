export async function getTime() {
    const data = JSON.stringify({ time: new Date() });
    console.log('from get time')
    console.log(data)
    return data;
}