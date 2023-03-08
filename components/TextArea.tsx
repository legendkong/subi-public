import '@/styles/textarea.module.css'
import { Fragment, useState } from 'react'
import RegexResult from './RegexResult'
import Explanation from './Explanation'
// import Loading from './Loading'

function Loading(): any {
  return (
    <div className='flex items-center justify-center'>
      <svg
        className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
      >
        <circle
          className='opacity-25'
          cx='12'
          cy='12'
          r='10'
          stroke='currentColor'
          stroke-width='4'
        ></circle>
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        ></path>
      </svg>{' '}
      Racking my brain...
    </div>
  )
}

function TextArea() {
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('^d{6}bestToolEva$')
  const [loading, isLoading] = useState(() => Loading)
  const [explanation, setExplanation] = useState('')

  async function sendPrompt(e: React.FormEvent, prompt: String) {
    e.preventDefault()
    setResult(loading)
    setExplanation('')
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt
      })
    })

    if (!response.ok) {
      const errorMessage = await response.text()
      setResult(errorMessage)
      return
    }

    const data = response.body
    if (!data) {
      return
    }

    setExplanation(loading)

    const reader = data.getReader()
    const decoder = new TextDecoder()
    let done = false
    let regexLoading = true
    let outputString = ''

    while (!done) {

      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      outputString += chunkValue;
      if (outputString.split(" -- ")[1] && regexLoading) {
        setResult(outputString.split(" -- ")[0]);
        setExplanation("");
        regexLoading = false;

      }
      if (!regexLoading) {
        setExplanation((prev: any) => prev + chunkValue)
      }
    }

    if (!outputString.split(' -- ')[1]) {
      let failSafe = ' SOMETHING WENT WRONG. DO REPORT THE BUG TO US.'
      setResult(outputString + failSafe)
      setExplanation(outputString + failSafe)
    }
  }

  return (
    <Fragment>
      <form
        className='max-w-3xl w-full'
        onSubmit={(e: React.FormEvent) => sendPrompt(e, prompt)}
      >
        <div className='flex mt-5'>
          <p className='text-left font-medium'>
            Describe the RegEx in simple terms{' '}
            <span className='text-slate-500'>
              (specify the conditions, if any)
            </span>
            .
          </p>
        </div>
        <div className='flex flex-row w-full justify-center mr-2'>
          <div className='w-full h-full mr-2'>
            <input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              // rows={1}

              className='caret-fuchsia-500 w-full px-3 py-3 rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5'
              placeholder={
                '  e.g. 6-digit postal code of people residing in Singapore'
              }
            />
          </div>
          <button
            className='shadow-lg transform active:scale-75 transition-transform cursor-pointer bg-violet-300 h-full font-extrabold justify-center px-4 py-3 my-5 rounded-md'
            onClick={(e: React.FormEvent) => sendPrompt(e, prompt)}
          >
            👏
          </button>
        </div>
      </form>
      <RegexResult result={result} />
      <Explanation explanation={explanation} />
    </Fragment>
  )
}

export default TextArea
