import React from 'react'
import Nav_Bar from '../Nav_Bar/Nav'
import { IoArrowBackCircle } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
function Live() {
  let history = useNavigate();

  return (
    <div>
        <Nav_Bar/>
        <div className="all2">
        <IoArrowBackCircle className='ms-3 mt-3' size={40} style={{cursor:'pointer'}} onClick={()=>{history('/')}}/>

   <div className="d-flex justify-content-center mt-5 mx-3">
    <iframe style={{width: '800px',height: '500px',border:'none'}} className="embed-responsive embed-responsive-4by3 ml img-fluid"  src="http://www.elahmad.com/tv/watchtv.php?id=qoran_tv"  allowFullScreen allow="autoplay; fullscreen; picture-in-picture; xr-spatial-tracking; encrypted-media"></iframe>
    </div></div>
    </div>
  )
}

export default Live
