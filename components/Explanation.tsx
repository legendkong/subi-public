import '@/styles/reason.module.css'
function Explanation({ explanation }: any) {
  return (
    <div className='max-w-3xl w-full mt-10  justify-between items-center '>
      {explanation.length > 0 && (
        <>
          <div className='mt-5'>
            <p className='font-medium'>Explanation</p>
          </div>

          <div className='shadow-lg text-left  max-w-3xl w-full p-5 rounded-lg  border-4 border-slate-800 mt-4 '>
            <p
              dangerouslySetInnerHTML={{
                __html: explanation.split('- ').join('<li>')
              }}
            />
          </div>
        </>
      )}
      <div className='flex flex-row w-full justify-center mr-2'>
        <div className='w-full h-full mr-2'></div>
      </div>
    </div>
  )
}

export default Explanation
