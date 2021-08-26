import React from 'react'

const Counter = ({id, value, name, onChangeCount, onDelete }) => {

    const formCount = () => value === 0 ? 'Zero' : value

    const getBadgeClasses = () => {
        let classes = 'badge m-2 bg-'
        classes += value === 0 ? 'danger' : 'primary'
        return classes
    }

    return (
        <React.Fragment>
            <h4>{name}</h4>
            <button onClick={() => onChangeCount(id, -1)} className='btn btn-secondary btn-sm'
                    disabled={value === 0}>Decrement
            </button>
            <span className={getBadgeClasses()} >{formCount()}</span>
            <button onClick={() => onChangeCount(id, 1)} className='btn btn-secondary btn-sm'>Increment
            </button>
            <button onClick={() => onDelete(id)} className='btn btn-danger btn-sm m-2'>Delete</button>
        </React.Fragment>
    )
}

export default Counter
