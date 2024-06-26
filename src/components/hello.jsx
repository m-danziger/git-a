import './hello.css'
import { useState } from 'react';
import IncreaseBtn from './IncreaseBtn';
import LowerBtn from './lowerBtn';

export default function Hello(props) {


    let [age1, setAge1] = useState(props.age);




    let yearsToWeit = 20 - age1;
    let ac = <p>{props.name} {age1} you Wallcome{" Age begins " + props.age}</p>
    let bc = <p>
        {props.name} {age1} your under age, you have to wait {yearsToWeit} years.
        to use my app until you will be {yearsToWeit + age1 + " Age begins " + props.age}
    </p>

    function increaseAgeByOne() {
        setAge1(age1 + 1)
    }

    function lowerAgeByOne() {
        setAge1(age1 - 1)
    }


    return <div className='hell01'>
        { // ternary condition
            (age1 >= 20) ? ac : bc}

        <IncreaseBtn setAge2={increaseAgeByOne} />
        <LowerBtn setAge3={lowerAgeByOne} />

    </div>
}


