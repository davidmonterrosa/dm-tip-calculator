import React, { useEffect, useState } from 'react'
import ResultAreaComponent from './ResultAreaComponent';

const FormAreaComponent = () => {
    const [billTotal, setBillTotal] = useState(142.55);
    const [people, setPeople] = useState(5);
    const [billAndTipTotal, setBillAndTipTotal] = useState(0);
    const [percentValue, setPercentValue] = useState(0);
    const [clickedBtnIdx, setClickedBtnIdx] = useState(-1)
    

    useEffect(() => {
        console.log("test", percentValue);
    }, [percentValue])

    let percent = 5;

  return (
    <div className='bg-white grid md:grid-cols-2 rounded-2xl px-10 py-10'>
        <div className='flex flex-col gap-9 pr-12 '>

            {/* Bill Input Area */}
            <section>
                <label htmlFor='bill' className='flex justify-self-start text-2xl font-["SpaceMono"] text-darkGrayishCyan'>
                    Bill
                </label>
                <div className='flex bg-veryLightGrayishCyan  relative'>
                    <img className='aspect-[11/17] absolute left-3 top-2' src="/assets/images/icon-dollar.svg" alt="Dollar sign" />
                    <input className='text-2xl bg-veryLightGrayishCyan focus:outline-strongCyan text-veryDarkCyan w-full font-["SpaceMono"] text-end' type="number" step={0.01} min={0} name="bill" id="bill" value={billTotal} onChange={(event) => {
                        setBillTotal(event.target.value);
                        if(event.target.value < 0) {
                            console.log("Oh no too low")
                        }
                        
                    }}/>
                </div>
            </section>

            {/* Select Tip Area */}
            <section>
                <h1 className='flex justify-start text-2xl font-bold font-["SpaceMono"] text-darkGrayishCyan'>Select Tip %</h1>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-4 font-["SpaceMono"]'>
                    {
                        [5, 10, 15, 25, 50].map((percentValue, index) => (
                                <button key={index} type='radio' className={index == clickedBtnIdx ? 'bg-grayishCyan hover:bg-strongCyan hover:text-veryDarkCyan text-white rounded-lg text-center text-2xl font-bold py-4 px-4' : 'bg-veryDarkCyan hover:bg-strongCyan hover:text-veryDarkCyan text-white rounded-lg text-center text-2xl font-bold py-4 px-4'} onClick={(event) => {
                                    if(clickedBtnIdx == index){
                                        setClickedBtnIdx(-1);
                                    } else {
                                        setClickedBtnIdx(index)
                                        console.log(parseInt(event.target.innerText));
                                    }

                                }}>
                                    {`${percentValue}%`}
                                </button>  
                        ))
                    }
                    <input className='bg-veryLightGrayishCyan text-darkGrayishCyan focus:text-veryDarkCyan focus:outline-2 focus:outline-strongCyan text-center font-bold font-["SpaceMono"] rounded-lg text-2xl' type="text" name="" id="" value={"Custom"} onChange={() => {
                        setClickedBtnIdx(-1)
                    }}/>
                </div>
            </section>

            {/* People Input Area */}
            <section>
                <label htmlFor="numberOfPeople" className='flex justify-start text-2xl font-["SpaceMono"] font-bold text-darkGrayishCyan'>
                    Number of People
                </label>
                <div className='flex bg-veryLightGrayishCyan relative'>
                    <img className='absolute left-3 top-2' src="/assets/images/icon-person.svg" alt="People icon" />
                    <input className='bg-veryLightGrayishCyan text-veryDarkCyan text-2xl w-full text-end font-bold font-["SpaceMono"] focus:outline-2 focus:outline-strongCyan' type="number" step={1} min={0} name="numberOfPeople" id="numberOfPeople" value={people} onChange={(event) => {
                        setPeople(event.target.value)
                    }}/>
                </div>
            </section>

        </div>
        {/* <ResultAreaComponent tipAmount={} totalAmount={} /> */}
    </div>
  )
}

export default FormAreaComponent