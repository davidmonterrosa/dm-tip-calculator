import React from 'react'

const ResultAreaComponent = (props) => {
  return (
    <div className='flex flex-col justify-between bg-veryDarkCyan rounded-2xl font-["SpaceMono"] p-12 '>
      <section className='flex flex-col gap-12 mt-3'>
        <article className='flex justify-between'>
          <div className='text-start'>
            <h1 className='text-white '>Tip Amount</h1>
            <p className='text-grayishCyan'>/ person</p>
          </div>
          <p id='tip' className='text-strongCyan text-6xl font-bold overflow-x-scroll'>{`$${props.tipAmount}`}</p>
        </article>

        <article className='flex justify-between'>
          <div className='text-start'>
            <h1 className='text-white '>Total</h1>
            <p className='text-grayishCyan'>/ person</p>
          </div>
          <p id='total' className='text-strongCyan text-6xl font-bold overflow-x-scroll'>{`$${props.totalAmount}`}</p>
        </article>
      </section>

      <button className='bg-strongCyan hover:bg-lightGrayishCyan font-bold font-["SpaceMono"] text-2xl uppercase text-veryDarkCyan rounded-lg w-full' onClick={() => {
        tip.innertext = 0.00;
        console.log("Reset", total.innertext)
        total.innertext = 0.00;
      }}>Reset</button>

    </div>
  )
}

export default ResultAreaComponent