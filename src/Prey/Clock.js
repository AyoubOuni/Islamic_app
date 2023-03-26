import React,{useState,useEffect} from 'react';
import './Prey.css';

function Clock(props) {
    const { hour, minute, second } = props;
    const [hrAngle, setHrAngle] = useState(hour * 30 + (minute * 6) / 12);
    const [minAngle, setMinAngle] = useState(minute * 6 + (second * 6) / 60);
    const [secAngle, setSecAngle] = useState(second * 6);
  
   
  
  
    useEffect(() => {
        setHrAngle(hour * 30 + (minute * 6) / 12);
        setMinAngle(minute * 6 + (second * 6) / 60);
        setSecAngle(second * 6);
      }, [hour, minute, second]);
  return (
    <div className="">
    <div id="clock">
      <ul className="hours">
        <li>
          <span>1</span>
        </li>
        <li>
          <span>2</span>
        </li>
        <li>
          <span>3</span>
        </li>
        <li>
          <span>4</span>
        </li>
        <li>
          <span>5</span>
        </li>
        <li>
          <span>6</span>
        </li>
        <li>
          <span>7</span>
        </li>
        <li>
          <span>8</span>
        </li>
        <li>
          <span>9</span>
        </li>
        <li>
          <span>10</span>
        </li>
        <li>
          <span>11</span>
        </li>
        <li>
          <span>12</span>
        </li>
      </ul>
<div className='brez'></div>
      <div className="hr-wrapper">
        <div className="hand hr" style={{ transform: `rotate(${hrAngle}deg)` }}></div>
      </div>
      <div className="min-wrapper">
        <div className="hand min" style={{ transform: `rotate(${minAngle}deg)` }}></div>
      </div>
      <div className="sec-wrapper">
        <div className="hand sec" style={{ transform: `rotate(${secAngle}deg)` }}></div>
      </div>
    </div>
  </div>
  );
}

export default Clock;
