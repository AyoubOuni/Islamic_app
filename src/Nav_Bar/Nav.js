import React,{useState,useEffect} from 'react'
import { NavLink } from "react-router-dom";
import './Nav.css';
import photo from './icon.png';
import 'bootstrap/dist/css/bootstrap.css';
import {AiOutlineMenu,AiOutlineClose}  from 'react-icons/ai';
import {TbDeviceAirpods}  from 'react-icons/tb';
import {CgReadme}  from 'react-icons/cg';
import {BiTime}  from 'react-icons/bi';
import {HiHome}  from 'react-icons/hi';
import {MdOutlineLiveTv}  from 'react-icons/md';
import { useNavigate } from 'react-router-dom';



  

   
export default function Nav_Bar() {
  let history = useNavigate();

    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
 


        
    
          
    
          
 




	



          


        function hide(){
          document.getElementById("drop").checked = false;document.getElementById('bar').classList.remove("d-none");document.getElementById('bar2').classList.add("d-none");
        }
  
        useEffect(()=>{
          window.addEventListener('scroll', () => {
              if (window.scrollY > 160) {
               hide();
              } 
             
          });
          
      }, []);
    
    return(
        <>
    <React.Fragment >
      
        <span className="sticky  " >
        <span id="progress" class="progress d-none">
	<span class="fill"></span></span>
        <div className="blue "  ><span className="head d-flex justify-content-end petito " id="head"  ><span className='err' onClick={()=>{history('/')}} style={{cursor:'pointer'}}><span className="ff"   >الموقع الإسلامي</span><img className='mb-2 ms-1 uyti  ' src={photo} width="60" height="60"alt="" /></span></span>
    <div className="d-flex justify-content-start ">
       <div className="marg">
       <div className="marg2 " >

        <NavLink to="/live"    className={({ isActive }) => (isActive ? 'active2' : 'notactive')}   style={{cursor:'pointer'}}> <span className="hov space"> <span className="position-relative " style={{cursor:'pointer'}}></span>بث مباشر<MdOutlineLiveTv className="position-relative ms-1" size={20} style={{bottom:'3px'}}/></span></NavLink>
                            <NavLink to="/prayer"    className={({ isActive }) => (isActive ? 'active2' : 'notactive')}   style={{cursor:'pointer'}}> <span className="hov space"> <span className="position-relative " style={{cursor:'pointer'}}></span>أوقات الصلاة<BiTime className="position-relative ms-1" size={20} style={{bottom:'3px'}}/></span></NavLink>
 <NavLink to="/readqurain"    className={({ isActive }) => (isActive ? 'active2' : 'notactive')}   style={{cursor:'pointer'}}> <span className="hov space"> <span className="position-relative " style={{cursor:'pointer'}}></span>قرأة القرأن<CgReadme className="position-relative ms-1" size={20} style={{bottom:'3px'}}/></span></NavLink>
  <NavLink to="/qurain"    className={({ isActive }) => (isActive ? 'active2' : 'notactive')}  style={{cursor:'pointer'}}> <span className="hov space"> <span className="position-relative " style={{cursor:'pointer'}}></span>إستماع القرأن<TbDeviceAirpods className="position-relative ms-1" size={20} style={{bottom:'3px'}}/></span></NavLink>
 <NavLink to="/"    className={({ isActive }) => (isActive ? 'active2' : 'notactive')}   ><span style={{cursor:'pointer'}}> الرئيسية<HiHome className="position-relative ms-1" size={20} style={{bottom:'3px'}}/></span></NavLink>

       </div>
      
        </div>
        
    </div>



     <div className='show_littlescreen'>
    <span className="  d-flex justify-content-start position-absolute bhy   " style={{top: '3.8px'}}>
    
    <nav >
   

        <label htmlFor="drop" className="toggle" ><AiOutlineMenu id="bar" onClick={()=>{document.getElementById('bar2').classList.remove("d-none");document.getElementById('bar').classList.add("d-none");}} /><AiOutlineClose onClick={()=>{document.getElementById('bar').classList.remove("d-none");document.getElementById('bar2').classList.add("d-none");}} className='d-none' id='bar2'/></label>
        <input  type="checkbox" id="drop" />
           <ul className="menu text-center w-100" style={{textTransform:'uppercase',backgroundColor:'#1e1e1e'}} >
                 <hr />
                 <div className="d-flex justify-content-center">
           <li className=' ' style={{height:'50px'}} > <NavLink to='/' className={({ isActive }) => (isActive ? 'active9' : 'notactive')}> <span className="position-relative me-1 ms-2" style={{bottom: "2.5px"}}><span className="me-1">الرئيسية</span><HiHome className="position-relative " style={{bottom: "2.5px"}}/></span></NavLink><hr /></li></div>
          
           <li className='mt-3 mb-1 pt-2 text-center '  style={{height:'50px'}} > <NavLink to='/qurain' className={({ isActive }) => (isActive ? 'active9' : 'notactive')}> <span className="position-relative me-1 me-2" style={{bottom: "2.5px"}}><span className="me-1">إستماع القرأن</span><TbDeviceAirpods className="position-relative " style={{bottom: "2.5px"}}/></span></NavLink><hr /></li>
        
           <li className='pt-2 mt-3 mb-1 text-center'  style={{height:'50px'}} > <NavLink to='/readqurain' className={({ isActive }) => (isActive ? 'active9' : 'notactive')} > <span className="position-relative me-1 ms-2 d-flex justify-content-center" style={{bottom: "2.5px"}}><span className="me-2 " >قرأة القرأن</span><CgReadme className="position-relative " style={{top:'4px'}}/></span></NavLink><hr /></li>
           <li className='pt-2 mt-3 mb-1  ' style={{height:'50px'}}  > <NavLink to='/prayer' className={({ isActive }) => (isActive ? 'active9' : 'notactive')}> <span className="position-relative me-1 d-flex justify-content-center ms-3" style={{bottom: "2.5px"}}><span className="me-1">أوقات الصلاة</span><BiTime className="position-relative " style={{top: "3px"}}/></span></NavLink><hr/></li>
           <li className='pt-2 mt-3 mb-2 pb-1 ' style={{height:'50px'}}  > <NavLink to='/live' className={({ isActive }) => (isActive ? 'active9' : 'notactive')}> <span className="position-relative me-1 ms-3 ps-1" style={{bottom: "2.5px"}}><span className="me-2"> بث مباشر</span><MdOutlineLiveTv className="position-relative " style={{bottom: "2.5px"}}/></span></NavLink></li>
         
       
           
            </ul>
          
        </nav>
        </span>
        </div> 




   

       
    
    </div>
    </span>
    </React.Fragment>
    </>
   )
}