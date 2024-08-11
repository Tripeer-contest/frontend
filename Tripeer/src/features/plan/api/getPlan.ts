export default async function getPlan() {
  await timeout();
  try {
    const response = await fetch('src/features/plan/api/data.json');
    if (!response.ok) {
      throw new Error();
    }
    const data = await response.json();
    return data;
  } catch {
    throw new Error('에러발생');
  }
}

async function timeout() {
  return new Promise((res) => setTimeout(res, 3000));
}
