import React, { useEffect, useState } from 'react'

const FormAreaComponent = () => {
    const [billTotal, setBillTotal] = useState(0);
    const [people, setPeople] = useState(0);
    const [tipPercentEntry, setTipPercentEntry] = useState("")
    const [billAndTipTotal, setBillAndTipTotal] = useState(0);
    const [percentValue, setPercentValue] = useState(0);
    const [clickedBtnIdx, setClickedBtnIdx] = useState(-1)
    const [totalSplit, setTotalSplit] = useState("0.00")
    const [tipSplit, setTipSplit] = useState("0.00")
    let percentMultiplier = 0;
    let tipValue = 0;
    let combinedTotal = 0;
    const calculateTips = (percentValue) => {
        percentMultiplier = percentValue / 100;
        let tipNumber = (Math.round((billTotal * percentMultiplier) * 100)) / 100;
        console.log(tipNumber);
        return `${tipNumber}`;
    }
    const calculateTotals = (percentValue) => {
        tipValue = calculateTips(percentValue);
        tipValue = parseFloat(tipValue)
        console.log(tipValue);
        console.log(billTotal);
        setTipSplit(tipValue / people);
        combinedTotal = billTotal + tipValue;
        console.log(combinedTotal)
        return `${combinedTotal}`;
    }


    useEffect(() => {
        if(people != 0) {
            setTotalSplit(billAndTipTotal / people)
        }
    }, [percentValue])


    return (
        <div className='bg-white grid md:grid-cols-2 rounded-2xl px-10 py-10'>
            <div className='flex flex-col gap-9 pr-12 '>

                {/* Bill Input Area */}
                <section>
                    <label htmlFor='bill' className='flex justify-between text-2xl font-["SpaceMono"] text-darkGrayishCyan'>
                        <p>
                            Bill
                        </p>
                        <p id='warningMessage' className='hidden text-red-500'>
                            Can't be zero
                        </p>
                    </label>
                    <div className='flex bg-veryLightGrayishCyan  relative'>
                        <img className='aspect-[11/17] absolute left-3 top-2' src="/assets/images/icon-dollar.svg" alt="Dollar sign" />
                        <input className='text-2xl bg-veryLightGrayishCyan focus:outline-strongCyan hover:cursor-pointer hover:border-2 hover:max-h-8 hover:border-strongCyan text-veryDarkCyan w-full font-["SpaceMono"] text-end rounded-md' type="number" step={0.01} min={0} name="bill" id="bill" value={billTotal} onChange={(event) => {
                            setBillTotal(event.target.value);
                            if (event.target.value <= 0) {
                                bill.className = "text-2xl bg-veryLightGrayishCyan focus:outline-red-500 border-2 border-red-500 rounded-md text-veryDarkCyan w-full font-['SpaceMono'] text-end";
                                setBillTotal(0);
                                warningMessage.className = "text-red-500";
                            } else {
                                bill.className = "text-2xl bg-veryLightGrayishCyan focus:outline-strongCyan text-veryDarkCyan w-full font-['SpaceMono'] text-end"
                                warningMessage.className = "hidden text-red-500"
                                setBillTotal((Math.round(Number(event.target.value) * 100)) / 100)
                            }

                        }} />
                    </div>
                </section>

                {/* Select Tip Area */}
                <section>
                    <h1 className='flex justify-start text-2xl font-bold font-["SpaceMono"] text-darkGrayishCyan'>Select Tip %</h1>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-4 font-["SpaceMono"]'>
                        {
                            [5, 10, 15, 25, 50].map((percentValue, index) => (
                                <button key={index} type='radio' className={index == clickedBtnIdx ? 'bg-grayishCyan hover:bg-strongCyan hover:text-veryDarkCyan text-white rounded-lg text-center text-2xl font-bold py-4 px-4' : 'bg-veryDarkCyan hover:bg-strongCyan hover:text-veryDarkCyan text-white rounded-lg text-center text-2xl font-bold py-4 px-4'} onClick={(event) => {
                                    if (clickedBtnIdx == index) {
                                        setClickedBtnIdx(-1);
                                        setPercentValue(0);
                                    } else {
                                        setClickedBtnIdx(index)
                                        setPercentValue(parseInt(event.target.innerText));
                                        setTipPercentEntry("");
                                        setBillAndTipTotal(calculateTotals(percentValue))
                                        if (bill.value == 0) {
                                            bill.className = "text-2xl bg-veryLightGrayishCyan focus:outline-red-500 border-2 border-red-500 rounded-md text-veryDarkCyan w-full font-['SpaceMono'] text-end";
                                            warningMessage.className = "text-red-500";
                                        }
                                        if (numberOfPeople.value == 0) {
                                            numberOfPeople.className = "text-2xl bg-veryLightGrayishCyan focus:outline-red-500 border-2 border-red-500 rounded-md text-veryDarkCyan w-full font-['SpaceMono'] text-end";
                                            warningMessagePpl.className = "text-red-500";
                                        }
                                    }

                                }}>
                                    {`${percentValue}%`}
                                </button>
                            ))
                        }
                        <input className='bg-veryLightGrayishCyan text-darkGrayishCyan focus:text-veryDarkCyan focus:outline-2 focus:outline-strongCyan text-center font-bold font-["SpaceMono"] rounded-lg text-2xl' type="text" name="customTip" id="customTip" placeholder='Custom' value={tipPercentEntry} onChange={(event) => {
                            setClickedBtnIdx(-1);
                            console.log("Current value inside input:", event.target.value)
                            setTipPercentEntry(event.target.value);
                            setPercentValue(event.target.value);
                            setBillAndTipTotal(calculateTotals(event.target.value));
                            if (bill.value == 0) {
                                bill.className = "text-2xl bg-veryLightGrayishCyan focus:outline-red-500 border-2 border-red-500 rounded-md text-veryDarkCyan w-full font-['SpaceMono'] text-end";
                                warningMessage.className = "text-red-500";
                            }
                            if (numberOfPeople.value == 0) {
                                numberOfPeople.className = "text-2xl bg-veryLightGrayishCyan focus:outline-red-500 border-2 border-red-500 rounded-md text-veryDarkCyan w-full font-['SpaceMono'] text-end";
                                warningMessagePpl.className = "text-red-500";
                            }
                        }} />
                    </div>
                </section>

                {/* People Input Area */}
                <section>
                    <label htmlFor="numberOfPeople" className='flex justify-between text-2xl font-["SpaceMono"] font-bold text-darkGrayishCyan'>
                        <p>
                            Number of People
                        </p>
                        <p id='warningMessagePpl' className='hidden text-red-100'>
                            Can't be zero
                        </p>
                    </label>
                    <div className='flex bg-veryLightGrayishCyan relative'>
                        <img className='absolute left-3 top-2' src="/assets/images/icon-person.svg" alt="People icon" />
                        <input className='bg-veryLightGrayishCyan text-veryDarkCyan text-2xl w-full text-end font-bold font-["SpaceMono"] focus:outline-2 focus:outline-strongCyan rounded-md' type="number" step={1} min={0} name="numberOfPeople" id="numberOfPeople" value={people} onChange={(event) => {
                            setPeople(event.target.value)
                            if (event.target.value <= 0) {
                                numberOfPeople.className = "text-2xl bg-veryLightGrayishCyan focus:outline-red-500 border-2 border-red-500 rounded-md text-veryDarkCyan w-full font-['SpaceMono'] text-end";
                                setPeople(0);
                                warningMessagePpl.className = "text-red-500";
                            } else {
                                numberOfPeople.className = "text-2xl bg-veryLightGrayishCyan focus:outline-strongCyan text-veryDarkCyan w-full font-['SpaceMono'] text-end"
                                warningMessagePpl.className = "hidden text-red-500"
                                setPeople((Math.round(Number(event.target.value) * 100)) / 100)
                            }
                        }} />
                    </div>
                </section>

            </div>
            <div className='flex flex-col justify-between bg-veryDarkCyan rounded-2xl font-["SpaceMono"] p-12 '>
                <section className='flex flex-col gap-12 mt-3'>
                    <article className='flex justify-between'>
                        <div className='text-start'>
                            <h1 className='text-white '>Tip Amount</h1>
                            <p className='text-grayishCyan'>/ person</p>
                        </div>
                        <p id='tip' className='text-strongCyan text-6xl font-bold overflow-x-scroll'>{`$${tipSplit}`}</p>
                    </article>

                    <article className='flex justify-between'>
                        <div className='text-start'>
                            <h1 className='text-white '>Total</h1>
                            <p className='text-grayishCyan'>/ person</p>
                        </div>
                        <p id='total' className='text-strongCyan text-6xl font-bold overflow-x-scroll'>{`$${totalSplit}`}</p>
                    </article>
                </section>

                <button className='bg-strongCyan hover:bg-lightGrayishCyan font-bold font-["SpaceMono"] text-2xl uppercase text-veryDarkCyan rounded-lg w-full' onClick={() => {
                    setTipSplit(0.00);
                    console.log("Reset", total.innertext)
                    setTotalSplit(0.00);
                }}>Reset</button>

            </div>
        </div>
    )
}

export default FormAreaComponent