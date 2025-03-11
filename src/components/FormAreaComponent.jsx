import React, { useState } from 'react'

const FormAreaComponent = () => {
    const [billTotal, setBillTotal] = useState(0);

  return (
    <div>
        <label htmlFor='bill' className='justify-self-start text-2xl'>
            Bill
        </label>
        <div className='flex '>
            <img className='aspect-[11 / 17]' src="/assets/images/icon-dollar.svg" alt="Dollar sign" />
            <input className='text-2xl' type="number" step="0.01" name="bill" id="bill" value={billTotal} onChange={() => {
                
            }}/>
        </div>

    </div>
  )
}

export default FormAreaComponent