
import * as React from 'react'
import { useParams } from 'react-router-dom';
import './Qurain.css'
import Nav_Bar from '../Nav_Bar/Nav'

import ReactAudioPlayer  from 'react-modern-audio-player';
import picture from './../images/picture.jpg';
import picture2 from './../images/picture3.png';
  import {IoPauseCircle,IoArrowBackCircle} from 'react-icons/io5'
  import {HiPlay} from 'react-icons/hi'
  import {AiOutlineSearch} from 'react-icons/ai'

  import { useNavigate } from 'react-router-dom';



  
function Qurain() {
    let { id } = useParams();
  let history = useNavigate();

    const [surah, setsurah] = React.useState([]);
    const [nom, setnom] = React.useState('');
    const [tracks, setTracks] = React.useState('');
         var url = 'http://api.alquran.cloud/v1/quran/ar.asad';

         React.useEffect(()=>{


            fetch('http://api.alquran.cloud/v1/surah/114')
            .then(response => response.json())
            .then(response =>setTracks(response))
            .catch(err => console.error(err));
          
          },[])
const show=async()=>{


       await fetch(url)
          .then(async response => await response.json())
          .then(async data =>await setsurah(data.data.surahs))
          .catch(error => console.error(error));
      
   
}
React.useEffect(()=>{
 show();
      console.log(surah);


},[])

       
        console.log(tracks);

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


  return (
<><Nav_Bar />

    <div className='all2'>
        <IoArrowBackCircle className='ms-3 mt-3' size={40} style={{cursor:'pointer'}} onClick={()=>{history('/')}}/>


   

<div className="d-flex justify-content-center ms-4 ps-2 pt-5">
      <input type='text'  style={{width:'320px',height:'47px',background:'rgba(7, 5, 5, 1)'}} 
          value={nom} className=" rounded-5 ps-3 text-white " onChange={(e)=>{setnom(e.target.value)}} 
          />  <AiOutlineSearch size={31} style={{right:'45px',top:'7px'}} className='text-white position-relative'/>

</div> 

<div className=" d-flex justify-content-center ms-3 me-2 r" >

<span className="  row w-100 mt-3 g-4    xr" style={{flexDirection:'row-reverse'}}>

{(nom=='') && surahs.map((f,i)=>{return(
<div key={i} className="col-6 col-lg-2 col-md-3 col-sm-4 d-flex justify-content-center">



<div className="  music-box card p-3 bg-all" id={i+1} onClick={()=>{     history(`/readqurain/${f.number}`);}}  style={{width:'144px',cursor:'pointer'}}>

        <div className="d-flex justify-content-center"><img src={picture2} width={100} height={100} /> 
         </div>        <div className=' mt-1 d-flex justify-content-center text-white' ><span className='text-nowrap text-white h5 '>سورة {f.arabicName}</span> </div>
                   
         
                     </div>
                     </div>)})}                     
{surahs.map((f,i)=>{if((f.arabicName.includes(nom))||(`سورة ${f.arabicName}`.includes(nom))){return(
<div key={i} className="col-6 col-lg-3 col-md-4 col-sm-3 d-flex justify-content-center">



<div className=" music-box  card p-3 bg-all" id={i+1} onClick={()=>{     history(`/readqurain/${f.number}`);}} style={{width:'144px',cursor:'pointer'}}>

        <div className="d-flex justify-content-center"><img src={picture2} width={100} height={100} /> 
         </div>        <div className=' mt-1 d-flex justify-content-center text-white' ><span className='text-nowrap text-white h5 '>سورة  {f.arabicName}</span> </div>
                   
         
                     </div>
                     </div>)}})}                     

    </span>
 </div>
          

 </div> 

     
     </> 
  )
}

export default Qurain
