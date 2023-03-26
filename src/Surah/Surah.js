import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Surah.css'
import {IoArrowBackCircle} from "react-icons/io5"
import txt from './txt.png'
import Nav_Bar from '../Nav_Bar/Nav';
import { useNavigate } from 'react-router-dom';
import picture from './../images/picture.jpg';
import ReactAudioPlayer  from 'react-modern-audio-player';


  
  

function Surah() {  
  let { id } = useParams();
  let history = useNavigate();

  const [surah, setsurah] = React.useState([]);
  const [tracks, setTracks] = React.useState([]);
  const [duration, setduration] = React.useState('00:00:00');
  var a='https://server12.mp3quran.net/maher/Almusshaf-Al-Mojawwad';
var e;
  React.useEffect(()=>{
    if(id<10){
      setTracks(`${a}/00${id}.mp3`);
    e=`${a}/00${id}.mp3`;
  }
      else if((id>=10)&&(id<=99)){
        setTracks(`${a}/0${id}.mp3`)
        e=`${a}/0${id}.mp3`;
        }
  
  else{
    setTracks(`${a}/${id}.mp3`)
    e=`${a}/${id}.mp3`;
    }
  
    var audio = new Audio(e);

    // Set the source of the audio element to the MP3 file
   
    
    audio.addEventListener('loadedmetadata',async function() {
     const duration = await audio.duration;
     await setduration(formatDuration(duration));
   });
    
    
    },[])
    console.log(tracks)

       React.useEffect(()=>{


          fetch(`http://api.alquran.cloud/v1/surah/${id}`)
          .then(response => response.json())
          .then(response =>setsurah(response.data.ayahs))
          .catch(err => console.error(err));
        
        },[])
        console.log(surah)

        const surahs = [
          { number: 1, arabicName: "الفاتحة", englishName: "Al-Fatiha" },
          { number: 2, arabicName: "البقرة", englishName: "Al-Baqarah" },
          { number: 3, arabicName: "آل عمران", englishName: "Aal-e-Imran" },
          { number: 4, arabicName: "النساء", englishName: "An-Nisa" },
          { number: 5, arabicName: "المائدة", englishName: "Al-Maeda" },
          { number: 6, arabicName: "الأنعام", englishName: "Al-Anaam" },
          { number: 7, arabicName: "الأعراف", englishName: "Al-Araf" },
          { number: 8, arabicName: "الأنفال", englishName: "Al-Anfal" },
          { number: 9, arabicName: "التوبة", englishName: "At-Tawba" },
          { number: 10, arabicName: "يونس", englishName: "Yunus" },
          { number: 11, arabicName: "هود", englishName: "Hud" },
          { number: 12, arabicName: "يوسف", englishName: "Yusuf" },
          { number: 13, arabicName: "الرعد", englishName: "Ar-Raad" },
          { number: 14, arabicName: "إبراهيم", englishName: "Ibrahim" },
          { number: 15, arabicName: "الحجر", englishName: "Al-Hijr" },
          { number: 16, arabicName: "النحل", englishName: "An-Nahl" },
          { number: 17, arabicName: "الإسراء", englishName: "Al-Isra" },
          { number: 18, arabicName: "الكهف", englishName: "Al-Kahf" },
          { number: 19, arabicName: "مريم", englishName: "Maryam" },
          { number: 20, arabicName: "طه", englishName: "Taha" },
          { number: 21, arabicName: "الأنبياء", englishName: "Al-Anbiya" },
          { number: 22, arabicName: "الحج", englishName: "Al-Hajj" },
          { number: 23, arabicName: "المؤمنون", englishName: "Al-Mumenoon" },
          { number: 24, arabicName: "النور", englishName: "An-Noor" },
          { number: 25, arabicName: "الفرقان", englishName: "Al-Furqan" },
          { number: 26, arabicName: "الشعراء", englishName: "Ash-Shuara" },
          { number: 27, arabicName: "النمل", englishName: "An-Naml" },
          { number: 28, arabicName: "القصص", englishName: "Al-Qasas" },
          { number: 29, arabicName: "العنكبوت", englishName: "Al-Ankabut" },
          { number: 30, arabicName: "الروم", englishName: "Ar-Rum" },  
          { number: 31, arabicName: "لقمان", englishName: "Luqman" },
          { number: 32, arabicName: "السجدة", englishName: "As-Sajdah" },
          { number: 33, arabicName: "الأحزاب", englishName: "Al-Ahzab" },
          { number: 34, arabicName: "سبأ", englishName: "Saba" },
          { number: 35, arabicName: "فاطر", englishName: "Fatir" },
          { number: 36, arabicName: "يس", englishName: "Ya-Sin" },
          { number: 37, arabicName: "الصافات", englishName: "As-Saffat" },
          { number: 38, arabicName: "ص", englishName: "Sad" },
          { number: 39, arabicName: "الزمر", englishName: "Az-Zumar" },
          { number: 40, arabicName: "غافر", englishName: "Ghafir" },
          { number: 41, arabicName: "فصلت", englishName: "Fussilat" },
          { number: 42, arabicName: "الشورى", englishName: "Ash-Shura" },
          { number: 43, arabicName: "الزخرف", englishName: "Az-Zukhruf" },
          { number: 44, arabicName: "الدخان", englishName: "Ad-Dukhan" },
          { number: 45, arabicName: "الجاثية", englishName: "Al-Jathiya" },
          { number: 46, arabicName: "الأحقاف", englishName: "Al-Ahqaf" },
          { number: 47, arabicName: "محمد", englishName: "Muhammad" },
          { number: 48, arabicName: "الفتح", englishName: "Al-Fath" },
          { number: 49, arabicName: "الحجرات", englishName: "Al-Hujurat" },
          { number: 50, arabicName: "ق", englishName: "Qaf" },
          { number: 51, arabicName: "الذاريات", englishName: "Adh-Dhariyat" },
          { number: 52, arabicName: "الطور", englishName: "At-Tur" },
          { number: 53, arabicName: "النجم", englishName: "An-Najm" },
          { number: 54, arabicName: "القمر", englishName: "Al-Qamar" },
          { number: 55, arabicName: "الرحمن", englishName: "Ar-Rahman" },
          { number: 56, arabicName: "الواقعة", englishName: "Al-Waqi'a" },
          { number: 57, arabicName: "الحديد", englishName: "Al-Hadid" },
          { number: 58, arabicName: "المجادلة", englishName: "Al-Mujad"},
          { number: 59, arabicName: "الحشر", englishName: "Al-Hashr" },
          { number: 60, arabicName: "الممتحنة", englishName: "Al-Mumtahanah" },
          { number: 61, arabicName: "الصف", englishName: "As-Saff" },
          { number: 62, arabicName: "الجمعة", englishName: "Al-Jumu'ah" },
          { number: 63, arabicName: "المنافقون", englishName: "Al-Munafiqun" },
          { number: 64, arabicName: "التغابن", englishName: "At-Taghabun" },
          { number: 65, arabicName: "الطلاق", englishName: "At-Talaq" },
          { number: 66, arabicName: "التحريم", englishName: "At-Tahrim" },
          { number: 67, arabicName: "الملك", englishName: "Al-Mulk" },
          { number: 68, arabicName: "القلم", englishName: "Al-Qalam" },
          { number: 69, arabicName: "الحاقة", englishName: "Al-Haqqah" },
          { number: 70, arabicName: "المعارج", englishName: "Al-Ma'arij" },
          { number: 71, arabicName: "نوح", englishName: "Nuh" },
          { number: 72, arabicName: "الجن", englishName: "Al-Jinn" },
          { number: 73, arabicName: "المزمل", englishName: "Al-Muzzammil" },
          { number: 74, arabicName: "المدثر", englishName: "Al-Muddaththir" },
          { number: 75, arabicName: "القيامة", englishName: "Al-Qiyamah" },
          { number: 76, arabicName: "الانسان", englishName: "Al-Insan" },
          { number: 77, arabicName: "المرسلات", englishName: "Al-Mursalat" },
          { number: 78, arabicName: "النبإ", englishName: "An-Naba" },
          { number: 79, arabicName: "النازعات", englishName: "An-Nazi'at" },
          { number: 80, arabicName: "عبس", englishName: "Abasa" },
          { number: 81, arabicName: "التكوير", englishName: "At-Takwir" },
          { number: 82, arabicName: "الإنفطار", englishName: "Al-Infitar" },
          { number: 83, arabicName: "المطففين", englishName: "Al-Mutaffifin" },
          { number: 84, arabicName: "الإنشقاق", englishName: "Al-Inshiqaq" },
          { number: 85, arabicName: "البروج", englishName: "Al-Buruj" },
          { number: 86, arabicName: "الطارق", englishName: "At-Tariq" },
          { number: 87, arabicName: "الأعلى", englishName: "Al-A'la" },
          { number: 88, arabicName: "الغاشية", englishName: "Al-Ghashiyah" },
          { number: 89, arabicName: "الفجر", englishName: "Al-Fajr" },
          { number: 90, arabicName: "البلد", englishName: "Al-Balad" },
          { number: 91, arabicName: "الشمس", englishName: "Ash-Shams" },
          { number: 92, arabicName: "الليل", englishName: "Al-Layl" },
          { number: 93, arabicName: "الضحى", englishName: "Ad-Duha" },
          { number: 94, arabicName: "الشرح", englishName: "Ash-Sharh" },
          { number: 95, arabicName: "التين", englishName: "At-Tin" },
          { number: 96, arabicName: "العلق", englishName: "Al-Alaq" },
          { number: 97, arabicName: "القدر", englishName: "Al-Qadr" },
          { number: 98, arabicName: "البينة", englishName: "Al-Bayyinah" },
          { number: 99, arabicName: "الزلزلة", englishName: "Az-Zalzalah" },
          { number: 100, arabicName: "العاديات", englishName: "Al-Adiyat" },
          { number: 101, arabicName: "القارعة", englishName: "Al-Qari'ah" },
          { number: 102, arabicName: "التكاثر", englishName: "At-Takathur" },
          { number: 103, arabicName: "العصر", englishName: "Al-Asr" },
          { number: 104, arabicName: "الهمزة", englishName: "Al-Humazah" },
          { number: 105, arabicName: "الفيل", englishName: "Al-Fil" },
          { number: 106, arabicName: "قريش", englishName: "Quraysh" },
          { number: 107, arabicName: "الماعون", englishName: "Al-Ma'un" },
          { number: 108, arabicName: "الكوثر", englishName: "Al-Kauthar" },
          { number: 109, arabicName: "الكافرون", englishName: "Al-Kafirun" },
          { number: 110, arabicName: "النصر", englishName: "An-Nasr" },
          { number: 111, arabicName: "المسد", englishName: "Al-Masad" },
          { number: 112, arabicName: "الإخلاص", englishName: "Al-Ikhlas" },
          { number: 113, arabicName: "الفلق", englishName: "Al-Falaq" },
          { number: 114, arabicName: "الناس", englishName: "An-Nas" },
      ]

      const formatDuration = (duration) => {
        var hours = Math.floor(duration / 3600);
        var minutes = Math.floor(duration % 3600 / 60);
        var seconds = Math.floor(duration % 60);
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        return `${hours}:${minutes}:${seconds}`;
      }
      const [details,setdetails]=useState([]) 
      React.useEffect(()=>{


        fetch(`http://api.alquran.cloud/v1/surah/${id}`)
        .then(response => response.json())
        .then(response =>setdetails(response.data))
        .catch(err => console.error(err));
      
      },[])
    
     
  return (
    <div className="">
<Nav_Bar />
<div className="mt-5">
<IoArrowBackCircle className='ms-3  mb-5' size={40} style={{cursor:'pointer'}} onClick={()=>{history('/readqurain')}}/>
{(details.length !=0)?<div className='d-flex justify-content-center h2  mb-5 pb-5'><span className='bt'> <span className='d-flex justify-content-center text-white'>{details.name}</span></span></div>:""}
      {(surah.length !=0)?<>  <div className='all5 mx-2 my-3'>
      <div className="br2  ">
        <div className="w-100 mt-3 mb-2 ms-4">
        <img src={txt} alt="" className='pe-5 lit'  width="1250" height="300"/></div>
      {surah.map((e,i) =>{if((e.numberInSurah ==1)&&(id !=1)){
        return(
          <span className='r' >
          <span className='spac h2 g'  >{e.text.replace('بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ',"")}</span>     <span className='position-relative mx' style={{bottom:'3px',left:'3px'}}>
   <span className="circle-ayat"><span className='ayat-text'>{i+1}</span></span></span>

          
          
        </span>)
     
      }else{
      if ((id==1)){
        if(i !=0){
return(
  <span className='r my-3 ' >
    <span className='spac h2 g '  >{e.text}</span>
    <span className='position-relative mx' style={{bottom:'3px',left:'3px'}}>
    <span className="circle-ayat"><span className='ayat-text'>{i}</span></span></span>
  </span>
)
}
}
      else {
return(
  <span className='r my-3 ' >
    <span className='spac h2 g '  >{e.text}</span>
    <span className='position-relative mx' style={{bottom:'3px',left:'3px'}}>
    <span className="circle-ayat"><span className='ayat-text'>{i+1}</span></span></span>

    
  </span>
)

}

}
})}
    {/* {surah.name}
    {surah.englishNameTranslation} */}
    {/* {surah.ayahs[3].number} */}

    </div></div>
       {<div className="d-flex justify-content-center ms-3" >
       <div className="fixed" >
   
    <ReactAudioPlayer 
   
           playList={[{  
             duration:duration,
           src: tracks,
           name: details.name,
    img: picture,
           id: 1,}]}
           audioInitialState={{duration:duration,
             muted: false,
             volume: 0.6,
             curPlayId: 1,
             autoPlay:false,
                
   
           }}
           placement={{
             interface: {
               templateArea: {
                 trackTimeDuration: "row1-5",
                 progress: "row1-4",
                 playButton: "row1-6",
                 repeatType: "row1-7",
                 volume: "row1-8",
               },
             },
             player: "bottom-right",
           }}
           activeUI={{duration:duration,
             playButton: 'true',
             all: true,
             progress: "bar",
           }}
   
           duration={duration}
         />
       </div>
       </div>}</>
    
    :
    <>
    <div className="d-flex justify-content-center position-relative" style={{top:'200px'}}>
    <div class="spinner-border" role="status">
     
</div> </div>
    <div className="d-flex justify-content-center position-relative" style={{top:'220px'}}>

<div className='h3'>Loading</div>
</div>
</>
}
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
</div>
    </div>
  )
}

export default Surah
