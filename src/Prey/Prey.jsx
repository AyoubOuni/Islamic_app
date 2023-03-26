
import React, { useEffect, useState } from 'react';
import { IoArrowBackCircle } from 'react-icons/io5';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiAlertTriangle } from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';


import Clock from './Clock';
import './Prey.css';

import { useNavigate } from 'react-router-dom';
 //how to get duration of mp3 javascript
import Nav_Bar from '../Nav_Bar/Nav';




function Prey() {
  const [nom,setnom]=useState('');
  const [country,setcountry]=useState('');
  const [timestamp,settimestamp]=useState('');
  const [alti,setalti]=useState('');
  const [lon,setlon]=useState('');
  const [data,setdata]=useState([]);
  const [stat,setstat]=useState(false);


  let history = useNavigate();
   const apiKey = '043149d8fb264075be45b8134aca31c9'; // replace with your API key
    const apiUrl = 'https://api.opencagedata.com/geocode/v1/json';
    
    function getCountry(city) {
      const url = `${apiUrl}?q=${encodeURIComponent(city)}&key=${apiKey}&pretty=1&no_annotations=1&limit=1&countrycode=1`;
      
      return fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data.results && data.results.length > 0) {
            return data.results[0].components.country;
          } else {
            throw new Error('No results found');
          }
        });
    }
    var Country='';
    var v=[];

    const [time, setTime] = useState(null);
    const [adhan, setadhan] = useState();
    const [code, setcode] = useState(200);

    function convertTimestampToHMS(timestamp) {
      const date = new Date(timestamp * 1000); // multiply the timestamp by 1000 to convert it to milliseconds
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      return  `${hours}:${minutes}:${seconds}`;
    }

const search=()=>{
  setstat(true);
   getCountry(nom) .then(country => {Country=country;
    setcountry(country)
  })
   .catch(error => console.error(error));
    
fetch(`http://api.aladhan.com/v1/timingsByCity?city=${nom}&country=${Country}&method=8`)
.then(response => response.json())
.then(async response => {setadhan(response.data.timings);setcode(response.code);
setTime(timestamp);await setdata(response);settimestamp(response.data.date.timestamp);gett(response.data.meta.latitude,response.data.meta.longitude);setalti(response.data.meta.latitude);setlon(response.data.meta.longitude);})
.catch(err => console.error(err));

  // console.log()
    
}  

console.log(adhan);

     console.log(data)
     let options = {
      useCustomTime: true,    // set this to true
      width: "300px",
      border: true,
      borderColor: "#2e2e2e",
      baseColor: "#17a2b8",
      centerColor: "#459cff",
      centerBorderColor: "#ffffff",
      handColors: {
        second: "#d81c7a",
        minute: "#ffffff",
        hour: "#ffffff"
      }
      
  };
  const add = (event)=>{
    if(event.keyCode === 13){
      search();
    }}
  




    const gett=async(a,b)=>{
      const TIMEZONEDB_API_KEY = "ZOL8W43ZQDAB";

      // Set the latitude and longitude for which you want to retrieve the current time
      const latitude = 40.7128; // Example latitude for New York, NY
      const longitude = -74.0060; // Example longitude for New York, NY
      
      // Make a request to the Timezone API to get the current time based on the latitude and longitude
      const timezoneApiUrl = await `http://api.timezonedb.com/v2.1/get-time-zone?key=${TIMEZONEDB_API_KEY}&format=json&by=position&lat=${a}&lng=${b}`;
      
      await fetch(timezoneApiUrl)
        .then(response => response.json())
        .then(data => {

          const hour = data.formatted.slice(11, 13);
const minute = data.formatted.slice(14, 16);
const second = data.formatted.slice(17, 19);

          // Get the current time from the Timezone API response
          setTime(`${hour}:${minute}:${second}`);
          
          
        })
        .catch(error => console.error(error));
      

    }
  return (
    <>      <Nav_Bar/>
    
    <div className='All '>

  
  

    <div className=' '>
    <IoArrowBackCircle className='ms-3 mt-3' size={40} style={{cursor:'pointer'}} onClick={()=>{history('/')}}/>
   <div className="d-flex justify-content-center pt-5 ms-4">
      <input type='text' placeholder='الرجاء إدخال إسم المدينة'  style={{width:'320px',height:'47px',background:'rgba(7, 5, 5, 1)'}} 
          value={nom}  onKeyDown={add} className=" rounded-5 ps-3 text-white h5 " onChange={(e)=>{setnom(e.target.value)}} 
          />
          <AiOutlineSearch size={31} style={{right:'45px',top:'7px'}} className='text-white position-relative'/>
</div>
<div className="d-flex justify-content-center ms-4 mt-4 me-4"><button className='btnv text-white h5' onClick={search}>Search</button>
</div>
</div>
<br/>
<br/>


{(code!==200)?<div className="d-flex justify-content-center h3 text-danger">Please Put a valide name <FiAlertTriangle size={30} className='position-relative tyyy' style={{top:'3px',left:'8px'}} /></div>:(data.length !=0)?
<>
<div className="none">
<div className=' g-3 d-flex justify-content-center mt-5 mb-3 ' >  
  <div className='  bt  d-flex justify-content-center mb-5   text-white row' style={{flexDirection:'row-reverse',width:'1275px'}}>
    <div className='col-3 py-4 h4 '>تاريخ هجري  : {data.data.date.hijri.date}</div>
<div className=' py-4 col-3 h4 text-nowrap'>تاريخ ميلادي  : {data.data.date.gregorian.date}</div>

<div className=' col-2  py-4 h4'>   اليوم : {data.data.date.hijri.weekday.ar}</div>
<div className=' col-2 py-4 h4'>الشهر   : {data.data.date.hijri.month.ar}</div></div>

</div>
</div>
<div className="show_littlescreen">
<div className='  g-3 d-flex justify-content-center mt-2 ' >  
  <div className='  bt  d-flex justify-content-center mb-5   text-white row' style={{flexDirection:'row-reverse'}}>
    <div className='d-flex justify-content-center col-12 py-2 h4 '>تاريخ هجري  : {data.data.date.hijri.date}</div>
<div className=' d-flex justify-content-center py-2 col-12 h4 text-nowrap'>تاريخ ميلادي  : {data.data.date.gregorian.date}</div>

<div className='d-flex justify-content-center col-12  py-2 h4'>   اليوم : {data.data.date.hijri.weekday.ar}</div>
<div className=' d-flex justify-content-center col-12 py-2 h4'>الشهر   : {data.data.date.hijri.month.ar}</div></div>

</div>
</div>
{(adhan)?
<div className="d-flex justify-content-center  w-100">
<div className='d-flex justify-content-center row g-4  me-3' style={{flexDirection:'row-reverse'}}>
<div className=' col-4 card bt pb-3 ms-4'>
<div className='d-flex justify-content-center row mt-3'><span  className='  d-flex justify-content-center col-1 h3 text-white'>  الإمساك</span></div>
<div className='d-flex justify-content-center row mt-3'><span  className='  d-flex justify-content-center col-1 h3 text-white'> {adhan.Imsak} </span></div><br/>
<div className='d-flex justify-content-center row '><span  className='  d-flex justify-content-center col-2'><Clock hour={`${adhan.Imsak[0]}${adhan.Imsak[1]}`} minute={`${adhan.Imsak[3]}${adhan.Imsak[4]}`}  second={20} /></span></div>
</div>
<div className='col-4 card bt pb-3 ms-4 '>
<div className='d-flex justify-content-center row mt-3'><span  className='  d-flex justify-content-center col-1 h3 text-white'> الفجر</span></div>
<div className='d-flex justify-content-center row mt-3'><span  className='  d-flex justify-content-center col-1 h3 text-white'> {adhan.Fajr} </span></div><br/>
<div className='d-flex justify-content-center row '><span  className='  d-flex justify-content-center col-2'><Clock size={20} hour={`${adhan.Fajr[0]}${adhan.Fajr[1]}`} minute={`${adhan.Fajr[3]}${adhan.Fajr[4]}`}  second={20} /></span></div>
</div>
<div className='col-4 card bt pb-3 ms-4'>
<div className='d-flex justify-content-center row mt-3'><span  className='  d-flex justify-content-center col-1 h3 text-white'> الظهر</span></div>
<div className='d-flex justify-content-center row mt-3'><span  className='  d-flex justify-content-center col-1 h3 text-white'> {adhan.Dhuhr} </span></div><br/>

<div className='d-flex justify-content-center row '><span  className='  d-flex justify-content-center col-2'><Clock size={20} hour={`${adhan.Dhuhr[0]}${adhan.Dhuhr[1]}`} minute={`${adhan.Dhuhr[3]}${adhan.Dhuhr[4]}`}  second={20} /></span></div>
</div>
<div className='col-4 card bt pb-3 ms-4'>
<div className='d-flex justify-content-center row mt-3'><span  className='  d-flex justify-content-center col-1 h3 text-white'>  العصر</span></div>
<div className='d-flex justify-content-center row mt-3'><span  className='  d-flex justify-content-center col-1 h3 text-white'> {adhan.Asr} </span></div><br/>

<div className='d-flex justify-content-center row '><span  className='  d-flex justify-content-center col-2'><Clock size={20} hour={`${adhan.Asr[0]}${adhan.Asr[1]}`} minute={`${adhan.Asr[3]}${adhan.Asr[4]}`}  second={20} /></span></div>
</div>
<div className='col-3 card bt pb-3 ms-4'>
<div className='d-flex justify-content-center row mt-3'><span  className='  d-flex justify-content-center col-1 h3 text-white'>  المغرب</span></div>
<div className='d-flex justify-content-center row mt-3'><span  className='  d-flex justify-content-center col-1 h3 text-white'> {adhan.Maghrib} </span></div><br/>

<div className='d-flex justify-content-center row '><span  className='  d-flex justify-content-center col-2'><Clock size={20} hour={`${adhan.Maghrib[0]}${adhan.Maghrib[1]}`} minute={`${adhan.Maghrib[3]}${adhan.Maghrib[4]}`}  second={20} /></span></div>
</div>
<div className='col-3 card bt pb-3 ms-4 '>
<div className='d-flex justify-content-center row mt-3'><span  className='  d-flex justify-content-center col-1 h3 text-white'>  العشاء</span></div>
<div className='d-flex justify-content-center row mt-3'><span  className='  d-flex justify-content-center col-1 h3 text-white'> {adhan.Isha} </span></div><br/>

<div className='d-flex justify-content-center row '><span  className='  d-flex justify-content-center col-2'><Clock size={20} hour={`${adhan.Isha[0]}${adhan.Isha[1]}`} minute={`${adhan.Isha[3]}${adhan.Isha[4]}`}  second={20} /></span></div>
</div>
<div className=' col-3 card bt pb-3 ms-4'>
<div className='d-flex justify-content-center row mt-3'><span  className='  d-flex justify-content-center col-1 h3 text-white'>  الشروق</span></div>
<div className='d-flex justify-content-center row mt-3'><span  className='  d-flex justify-content-center col-1 h3 text-white'> {adhan.Sunrise} </span></div><br/>

<div className='d-flex justify-content-center row '><span  className='  d-flex justify-content-center col-2'><Clock size={20} hour={`${adhan.Sunrise[0]}${adhan.Sunrise[1]}`} minute={`${adhan.Sunrise[3]}${adhan.Sunrise[4]}`}  second={20} /></span></div>
</div>
<div className='col-3 card bt pb-3 ms-4 '>
<div className='d-flex justify-content-center row mt-3'><span  className='  d-flex justify-content-center col-1 h3 text-white'>  الغروب</span></div>
<div className='d-flex justify-content-center row mt-3'><span  className='  d-flex justify-content-center col-1 h3 text-white'> {adhan.Sunset} </span></div><br/>

<div className='d-flex justify-content-center row '><span  className='  d-flex justify-content-center col-2'><Clock size={20} hour={`${adhan.Sunset[0]}${adhan.Sunset[1]}`} minute={`${adhan.Sunset[3]}${adhan.Sunset[4]}`}  second={20} /></span></div>
</div>
</div>
</div>
:""}

</>
   

:(stat==false)?"":<>
<div className="d-flex justify-content-center position-relative" style={{top:'200px'}}>
<div class="spinner-border" role="status">
 
</div> </div>
<div className="d-flex justify-content-center position-relative" style={{top:'220px'}}>

<div className='h3'>Loading</div>
</div>
</>}




      <br/> 
      <br/> 
      <br/> 
      <br/> 
      <br/> 
    </div>
    </>
  );
}

export default Prey;