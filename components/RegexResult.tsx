import { useState, useEffect } from 'react'

function RegexResult({ result }: any) {
  // const [result, setResult] = useState("testing");
  const [isDisplayed, setIsDisplayed] = useState(false)

  // const inputHandler = (event: any) => {
  //   setResult(event.target.value);
  // };

  const copy = async () => {
    await navigator.clipboard.writeText(result)
    setTimeout(() => {
      setIsDisplayed(true)
    }, 10)
  }

  useEffect(() => {
    if (isDisplayed) {
      const toRef = setTimeout(() => {
        setIsDisplayed(false)
        clearTimeout(toRef)
      }, 2000)
    }
  }, [isDisplayed])

  return (
    <div
      onClick={copy}
      className='shadow-lg rounded-lg transform active:scale-105 transition-transform  cursor-pointer animate-pulse max-w-3xl w-full p-12 border-4 border-slate-800 '
    >
      <div>{result}</div>
      {result != '^d{6}bestToolEva$' && (
        <span className='flex absolute h-4 w-4 top-0 right-0 -mt-1 -mr-1'>
          <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75'></span>
          <span className='relative inline-flex rounded-full h-4 w-4 bg-purple-500'></span>
        </span>
      )}
      {isDisplayed && (
        <p className='text-green-700 mt-2 text-extrabold'>COPIED!</p>
      )}
    </div>
  )
}

export default RegexResult
