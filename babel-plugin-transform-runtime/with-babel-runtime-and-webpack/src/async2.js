export const handleAsyncAwait3 = async () => {
  const data = await Promise.resolve('hiii')
  return data
}

export function* handleGenerator3() {
  yield 11
  yield 22
}

export async function* handleAsyncAwaitGenerator3() {
  await 111
  yield 22
}
