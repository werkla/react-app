import './button.scss';
import {useEffect, useState, useRef} from "react";

const Button = (props) => {
    const [count, setCount] = useState(0);
    const [btnClass, setBtnClass] = useState('btn-orange');
    const refInput = useRef();

    function click(){
        setCount((prev) => prev + 1);
        props.run('Klaus Werner');

        refInput.current.classList.toggle('inp')
        console.log(refInput.current.classList.contains('inp'))

        const name = 'SMMrd'
        const age = 34
        console.log({name, age})
    }

    useEffect(()=>{
        switch (count % 3) {
            case 0:
                setBtnClass('btn-orange');
                break;
            case 1:
                setBtnClass('btn-red');
                break;
            case 2:
                setBtnClass('btn-blue');
                break;
        }
    }, [count])

    return <div>
        <button
            onClick={click}
            className={btnClass}>
            Click me
        </button>
        <input className={'st'}  ref={refInput} onChange={({target}) => props.run(target.value)}/>
    </div>

}

export default Button;