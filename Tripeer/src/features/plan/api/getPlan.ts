export default async function getPlan() {
  try {
    const response = await fetch('/api/history/151'); // 예시용 api입니다. 이와 같이 활용하면 될듯 합니다.
    if (!response.ok) {
      throw new Error();
    }
    const data = await response.json();
    return data;
  } catch {
    throw new Error('에러발생');
  }
}
