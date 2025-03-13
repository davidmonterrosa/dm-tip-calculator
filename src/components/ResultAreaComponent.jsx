import React from 'react'

const ResultAreaComponent = () => {
  return (
    <div className='flex flex-col justify-between bg-veryDarkCyan rounded-2xl font-["SpaceMono"] p-12 '>
      <section className='flex flex-col gap-12 mt-3'>
        <article className='flex justify-between'>
          <div className='text-start'>
            <h1 className='text-white '>Tip Amount</h1>
            <p className='text-grayishCyan'>/ person</p>
          </div>
          <p id='tipAmount' className='text-strongCyan text-6xl font-bold'>$0.00</p>
        </article>

        <article className='flex justify-between'>
          <div className='text-start'>
            <h1 className='text-white '>Total</h1>
            <p className='text-grayishCyan'>/ person</p>
          </div>
          <p id='totalAmount' className='text-strongCyan text-6xl font-bold'>$0.00</p>
        </article>
      </section>

      <button className='bg-strongCyan hover:bg-lightGrayishCyan font-bold font-["SpaceMono"] text-2xl uppercase text-veryDarkCyan rounded-lg w-full'>Reset</button>

    </div>
  )
}

export default ResultAreaComponent