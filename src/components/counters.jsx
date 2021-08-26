import React from "react"
import Counter from "./counter"


const Counters = ({onReset, counters, ...rest}) => {
    return (
        <React.Fragment>
            <button onClick={onReset} className="btn-primary btn-sm m-2">Reset</button>
            {counters.map(c => <div><Counter key={c.id} {...rest} {...c}/></div>)}
        </React.Fragment>
    )
}

export default Counters
