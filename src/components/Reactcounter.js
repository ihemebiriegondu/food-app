import React, { useState } from 'react';

function Counter() {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }

    function decrement() {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    return <div>
        <span onClick={decrement} className='value-buttons'>-</span>
        <span id='value-itself'>{counter}</span>
        <span onClick={increment} className='value-buttons'>+</span>
    </div>;
}

export default Counter