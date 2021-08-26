import React, {useState} from "react"
import Counters from "./components/counters";
import NavBar from "./components/navBar";

const App = () => {

    const defaultValue = [
        {value: 0, id: 1, name: 'One'},
        {value: 4, id: 2, name: 'Two'},
        {value: 0, id: 3, name: 'Three'}
    ]
    const [counters, setCounters] = useState(defaultValue)

    const handleDelete = (id) => {
        setCounters(counters.filter(c => c.id !== id))
    }

    const handleReset = () => {
        setCounters(defaultValue)
    }

    const handleChangeCount = (id, step) => {
        const temp = [...counters]
        const counter = temp.find(c => c.id === id)
        counter.value = counter.value + step < 0 ? 0 : counter.value + step
        setCounters(temp)
    }

    return (
        <div className="col-lg-8 mx-auto p-3 py-md-5">
            <main>
                <NavBar count={counters.length || 0}/>
                <Counters onChangeCount={handleChangeCount} onDelete={handleDelete} onReset={handleReset}
                          counters={counters}/>
            </main>
        </div>
    )
}

export default App
