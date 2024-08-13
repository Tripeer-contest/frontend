export default async function getPlan() {
  try {
    const response = 3;
    await timeout();
    // if (!response.ok) {
    //   throw new Error();
    // }
    // const data = await response.json();
    return response;
  } catch {
    throw new Error('에러발생');
  }
}

async function timeout() {
  return new Promise((res) => setTimeout(res, 1000));
}
