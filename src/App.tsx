import {useEffect, useRef, useState} from 'react';
import './App.css'

function App() {

    const [count, setCount] = useState(0);
    const [result, setResult] = useState(0);

    const prevCountRef = useRef(0);
    const [value, setValue] = useState("");

    const [operator, setOperator] = useState('null');
    const [operatorClicked, setOperatorClicked] = useState(false);

    const valueUpdate = (value: number) => {
        if (!operatorClicked) {
            setValue(prev => prev + value)
        } else {
            setValue(value.toString())
        }
        setOperatorClicked(false)
    }

    const add = () => {
        setCount(Number(value))
        setOperator('+')
        setOperatorClicked(true)
    }

    const subs = () => {
        setOperator('-')
        setCount(Number(value))
        setOperatorClicked(true)
    }

    const multi = () => {
        setOperator('*')
        setCount(Number(value))
        setOperatorClicked(true)
    }

    const divide = () => {
        setCount(Number(value))
        setOperator('/')
        setOperatorClicked(true)
    }
    const equal = () => {
        let res = 0
        console.log(operator)
        switch (operator) {
            case '+':
                res = count + Number(value);
                break;
            case '*':
                res = count * Number(value);
                console.log(`multi ${res}`)
                break;
            case '-':
                res = count - Number(value);
                break;
            case '/':
                res = count / Number(value);
                break;
            case '%':
                res = count % Number(value);
                break;

        }
        setResult(Number(res))
        setOperatorClicked(true)
        setValue("")
    }

    const erase = () => {
        setCount(0)
        setResult(0)
        setValue('')
        setOperator('')
    }

    const clear = () => {
        setValue('')
        setOperator('')
    }


    return (
        <div className="App">
            <h1>Calculator</h1>
            <div className="card">

                <div className={'display'}>
                    <div className={'display__inner'}>
                        <div className={'display__outer'}>
                            <div className={'display__value'}>
                                <span>{(Number(value) > 0 || result == 0) && Number(value)}</span>
                                <span>{result > 0 && result}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <section>

                    <button onClick={erase}>AC</button>
                    <button onClick={clear}>C</button>
                    <button onClick={divide}>%</button>
                    <button onClick={divide}>/</button>

                    <button onClick={() => valueUpdate(7)}>7</button>
                    <button onClick={() => valueUpdate(8)}>8</button>
                    <button onClick={() => valueUpdate(9)}>9</button>
                    <button onClick={multi}>*</button>

                    <button onClick={() => valueUpdate(4)}>4</button>
                    <button onClick={() => valueUpdate(5)}>5</button>
                    <button onClick={() => valueUpdate(6)}>6</button>
                    <button onClick={subs}>-</button>

                    <button onClick={() => valueUpdate(1)}>1</button>
                    <button onClick={() => valueUpdate(2)}>2</button>
                    <button onClick={() => valueUpdate(3)}>3</button>
                    <button onClick={add}>+</button>


                    <button onClick={() => valueUpdate(0)}>0</button>
                    <button>.</button>
                    <button onClick={equal}>=</button>


                </section>

            </div>
        </div>
    )
}

export default App
