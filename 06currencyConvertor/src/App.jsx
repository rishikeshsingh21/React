import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {

  const [amount, setAmount] = useState("")
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2))
  }
  return (
    <>
      <div
        className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-center bg-no-repeat bg-[url("https://images.pexels.com/photos/5921122/pexels-photo-5921122.jpeg")]'>
          <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
            <form 

              onSubmit={(e)=>{
              e.preventDefault()
              convert()
              }}>

                <div className='w-full mb-1'>
                    <InputBox
                      label="From"
                      amount={amount}
                      currencyOptions = {options}
                      onCurrencyChange={(currency)=>setFrom(currency)}
                      selectCurrency={from}
                      onAmountChange={(amount)=>{
                        //console.log("amount",amount)
                        if(amount === ""){
                          setConvertedAmount(0);
                        }
                        setAmount(amount)
                      }}
                    />
                </div>
                <div className="relative w-full">
                  <button
                    type='button'
                    className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border hover:bg-blue-700 roudned-md bg-blue-900 text-white px-2 py-1 rounded-sm cursor-pointer '
                    onClick={swap}
                  >
                    swap
                  </button>
                </div>

                <div className='w-full mb-1'>
                    <InputBox
                      label="To"
                      amount={convertedAmount}
                      currencyOptions = {options}
                      onCurrencyChange={(currency)=>setTo(currency)}
                      selectCurrency={to}
                      amountDisable
                    />
                </div>
                <button
                className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
                >
                  Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
              </form>
          </div>
      </div>
    </>
  )
}

export default App
