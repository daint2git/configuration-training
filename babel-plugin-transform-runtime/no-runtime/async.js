export const handleAsyncAwait2 = async () => {
  const data = await Promise.resolve('hiii')
  return data
}

export function* handleGenerator2() {
  yield 11
  yield 22
}

export async function* handleAsyncAwaitGenerator2() {
  await 111
  yield 22
}
