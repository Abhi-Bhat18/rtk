import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset, incrementByCount, decrementByCount } from './counterSlice'

const Counter = () => {

    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState("");

    const resetAll = () => {
        dispatch(reset())
        setIncrementAmount("")
    }

    const addAmount = () => {
        const amount = Number(incrementAmount) || 0;
        console.log(amount);
        dispatch(incrementByCount(amount));
        setIncrementAmount("")
    }

    const minusAmount  = () => {
        const amount = Number(incrementAmount) || 0;
        dispatch(decrementByCount(amount));
        setIncrementAmount("")
    }

    return (
        <section className='space-y-5 flex flex-col justify-center'>
            <div className='flex space-x-5 w-full  justify-between'>
                <button  className='bg-blue-900 text-white w-20 rounded-md font-bold' onClick={() => dispatch(increment())}>+</button>
                <p>{count}</p>
                <button  className='bg-blue-900 text-white w-20 rounded-md font-bold' onClick={() => dispatch(decrement())}>-</button>
            </div>
            <div className='space-x-2'>
                <button onClick={addAmount} className='bg-blue-900 text-white px-2 py-1 rounded-md'>Add</button>
                <input value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} type="text" className='border-blue-900 border-[1px] rounded-md px-2' />
                <button onClick={minusAmount} className='bg-blue-900 text-white px-2 py-1 rounded-md' >Minus</button>
            </div>

            <button onClick={resetAll} className='w-full bg-black text-white rounded-md'>Reset</button>

        </section>
    )
}

export default Counter