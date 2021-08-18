import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const formCount = () => count === 0 ? 'Zero' : count
    const getBageClasses = () => {
        let classes = 'badge m-2 bg-'
        classes += count === 0 ? 'danger' : 'primary'
        return classes
    }

    const changeCount = step => {
        const diff = count + step < 0 ? 0 : count + step
        setCount(diff)
    }

    return (
        <React.Fragment>
            <button onClick={() => changeCount(-1)} className='btn btn-secondary btn-sm'
                    disabled={count === 0}>Decrement
            </button>
            <span className={getBageClasses()}>{formCount()}</span>
            <button onClick={() => changeCount(1)} className='btn btn-secondary btn-sm'>Increment</button>
        </React.Fragment>
    )
}

export default Counter
