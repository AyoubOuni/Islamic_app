
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IoArrowBackCircle } from 'react-icons/io5';
import { AiOutlineSearch } from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import TextField from '@mui/material/TextField';
// import AudioPlayer from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';
import './Search.css';
import AudioPlayer from 'react-modern-audio-player';
import getMP3Duration from 'get-mp3-duration'
import { useNavigate } from 'react-router-dom';
 //how to get duration of mp3 javascript
import Nav_Bar from '../Nav_Bar/Nav';
  import img from './arabian2.png'

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [tracks, setTracks] = useState([]);
  const [song, setsong] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  let history = useNavigate();
  
useEffect(()=>{


  fetch('https://mp3quran.net/api/_arabic.json')
  .then(response => response.json())
  .then(response =>setTracks(response.reciters))
  .catch(err => console.error(err));

},[])
  const handleSearch = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await axios.get(
    //     `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchTerm}`,
    //     {
    //       headers: {
    //         'x-rapidapi-key': '262abdf8d6msh2294c7f7772d497p160e8ejsn897de44ecfee',
    //         'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
    //       },
    //     }
    //   );
    //   await setTracks(response.data.data);
    //   console.log(response.data.data);
    // } catch (error) {
    //   console.error(error);
    // }
  };
// const playing=(music)=>{

// setsong(music);
// document.querySelector('.rhap_play-pause-button').click();


// }
  const handlePlay = (track) => {
    if (currentTrack) {
      currentTrack.pause();
    }
    const audio = new Audio(track.preview);
    audio.play();
    setCurrentTrack(audio);
    setIsPlaying(true);
  };

  const handleStop = () => {
    if (currentTrack) {
      currentTrack.pause();
      setIsPlaying(false);
    }
  };
  const searching = (event)=>{
    if(event.keyCode === 13){
      handleSearch(event);    }}
      const playList = [
        {
          name: 'name',
          writer: 'writer',
          img: 'image.jpg',
          src: 'audio.mp3',
          id: 1,
        },
      ]

      const [nom,setnom]=useState('');
      const [artist,setartist]=useState('');
      const [cover,setcover]=useState('');
      const [musi,setmusi]=useState('');
      const [iid,setid]=useState('');
      const [state,setstate]=useState(false);
        const setting=(a)=>{
          setmusi(a);
          // setnom(b);
          // setartist(c);
          // setcover(d);
          // if((state===true)&&(iid === e)){
          //   setstate(false);
          // }
          // else if(state===false){
          //   setstate(true);
          // }
 

          
          // setid(e);

        }
     
        console.log(tracks)
  return (
    <>      <Nav_Bar/>
    
    <div className='All '>

    <div className=' '>
    <IoArrowBackCircle className='ms-3 mt-3' size={40} style={{cursor:'pointer'}} onClick={()=>{history('/')}}/>
{(tracks.length !=0)? <>  <div className="d-flex justify-content-center pt-5 ms-4 ps-1">
      <input type='text'  style={{width:'320px',height:'47px',background:'rgba(7, 5, 5, 1)'}} 
          value={nom}    className=" rounded-5 ps-3 text-white " onChange={(e)=>{setnom(e.target.value)}} 
          />
          <AiOutlineSearch size={31} style={{right:'45px',top:'7px'}} className='text-white position-relative'/>
</div>

      <br/> 
      <br/> 
      <div>      <div className="d-flex justify-content-center">
     {/* {tracks.length !=0 && <img src={tracks[0].artist.picture_xl} alt="" style={{borderRadius:'100px'}}   width={200} height={200} />} */}
     </div>
     <br/>
  
     
     
     <div className="d-flex justify-content-center r ">
   

     <span className="row w-100  g-3  " style={{flexDirection:'row-reverse'}}>

       {(nom=='')&&tracks.map((track) => { return(
<span  className=" col-6 col-lg-3 col-md-3 col-sm-4  " onClick={()=>{     history(`/qurain/${track.id}`);}}style={{cursor:'pointer'}} >
<div className=' mt-3 d-flex justify-content-center text-white' >  <span className='card p-3 bg-all4 text-nowrap text-white h5 mt-2 cr' style={{cursor:'pointer',minWidth:'210px'}}><span className="d-flex justify-content-center h3"> {track.name}</span><span className="d-flex justify-content-center mt-3"><img src={img} width="80" height="80"alt="" /></span></span> </div> 

  {/* <div className=" hre"  onClick={()=>{setting(track.audio_url_bit_rate_128+'/002227.mp3+002228.mp3')}}>


  <div className=' mt-3 d-flex justify-content-center text-white' >  <span className='text-nowrap text-white h5 mt-2 '>{track.name}</span> </div> */}
          {/* <div className=" card p-4 bg-all" onClick={()=>{setting(track.preview,track.title,track.artist.name,track.album.cover_xl,track.id,track.duration)}} style={{width:'384px'}}>
           <div className="d-flex justify-content-center">
            <img src={track.album.cover_xl} alt=""  className="rounded-3" width={400} height={280}/> </div>        <div className=' mt-3 d-flex justify-content-center text-white' >  <span className='text-nowrap text-white h5 mt-2 '>{track.artist.name}</span> </div><div className='d-flex justify-content-center text-nowrap h6 text-white'>{track.title}</div>
                        </div> */}
          </span>


                
        )})}  </span>  
         </div>  
     <div className="d-flex justify-content-center r ">
     <span className="row w-100  g-3   " style={{flexDirection:'row-reverse'}}>
   
       {tracks.map((track) => { if(track.name.includes(nom)){return(
<span  className=" col-6 col-lg-3 col-md-3 col-sm-4 " onClick={()=>{     history(`/qurain/${track.id}`);}}style={{cursor:'pointer'}} >
<div className=' mt-3 d-flex justify-content-center text-white' >  <span className='card p-3 bg-all4 text-nowrap text-white h5 mt-2 cr' style={{cursor:'pointer',minWidth:'250px'}}><span className="d-flex justify-content-center h3"> {track.name}</span><span className="d-flex justify-content-center mt-3"><img src={img} width="80" height="80"alt="" /></span></span> </div> 

  {/* <div className=" hre"  onClick={()=>{setting(track.audio_url_bit_rate_128+'/002227.mp3+002228.mp3')}}>


  <div className=' mt-3 d-flex justify-content-center text-white' >  <span className='text-nowrap text-white h5 mt-2 '>{track.name}</span> </div> */}
          {/* <div className=" card p-4 bg-all" onClick={()=>{setting(track.preview,track.title,track.artist.name,track.album.cover_xl,track.id,track.duration)}} style={{width:'384px'}}>
           <div className="d-flex justify-content-center">
            <img src={track.album.cover_xl} alt=""  className="rounded-3" width={400} height={280}/> </div>        <div className=' mt-3 d-flex justify-content-center text-white' >  <span className='text-nowrap text-white h5 mt-2 '>{track.artist.name}</span> </div><div className='d-flex justify-content-center text-nowrap h6 text-white'>{track.title}</div>
                        </div> */}
          </span>


                
        )}})}  </span>  
         </div>  
      </div></>:    <>
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
    </div>
    

    </div>
    </>
  );
}

export default Search;