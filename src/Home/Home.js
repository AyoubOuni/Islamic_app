import React from 'react'
import Nav_Bar from '../Nav_Bar/Nav'
import pic1 from './img.jpg'
import pic2 from './img2.jpg'
import pic3 from './img3.jpg'
import hello from './hello.png'
import  './Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';







function Home() {
    var year = new Date().getFullYear();
    const elements = [
        'الله', 'الرحمن', 'الرحيم', 'الملك', 'القدوس', 'السلام', 'المؤمن',
        'المهيمن', 'العزيز', 'الجبار', 'المتكبر', 'الخالق', 'البارئ',
        'المصور', 'الغفار', 'القهار', 'الوهاب', 'الرزاق', 'الفتاح', 'العليم',
        'القابض', 'الباسط', 'الخافض', 'الرافع', 'المعز', 'المذل', 'السميع',
        'البصير', 'الحكم', 'العدل', 'اللطيف', 'الخبير', 'الحليم', 'العظيم',
        'الغفور', 'الشكور', 'العلي', 'الكبير', 'الحفيظ', 'المقيت', 'الحسيب',
        'الجليل', 'الكريم', 'الرقيب', 'المجيب', 'الواسع', 'الحكيم', 'الودود',
        'المجيد', 'الباعث', 'الشهيد', 'الحق', 'الوكيل', 'القوي', 'المتين',
        'الولي', 'الحميد', 'المحصي', 'المبدئ', 'المعيد', 'المحيي', 'المميت',
        'الحي', 'القيوم', 'الواجد', 'الماجد', 'الواحد', 'الأحد', 'الصمد',
        'القادر', 'المقتدر', 'المقدم', 'المؤخر', 'الأول', 'الآخر', 'الظاهر',
        'الباطن', 'الوالي', 'المتعالي', 'البر', 'التواب', 'المنتقم', 'العفو',
        'الرءوف', 'مالك الملك', 'ذو الجلال والإكرام', 'المقسط', 'الجامع',
        'الغني', 'المغني', 'المانع', 'الضار', 'النافع', 'النور', 'الهادي',
        'البديع', 'الباقي', 'الوارث', 'الرشيد', 'الصبور'
      ];
  return (
    <div>
      <Nav_Bar />
      <div className="all2">
      <br/>
      <br/>
      <br/>
   

      <div class="line-1 anim-typewriter h1 pe-3">مرحبا بك في الموقع الإسلامي<img src={hello} width={36} height={36} className='me-2 mb-1' alt="" /></div>
     
      <br/>
      <br/>
      <div className='d-flex justify-content-center slide-in-top mx-4'>
      <Carousel>
                <div>
                    <img src={pic1} className='ww' />
                </div>
                <div>
                    <img src={pic2} height={750} />
                </div>
                <div>
                    <img src={pic3} />
                </div>
            </Carousel>
</div>
<br/>
      <br/>
      <br/>
      <br/>

      <div className="skil_cont  active12     g-5 " >
        
      <div className="scrl"><h2 className='text-white d-flex justify-content-center my-4 pb-3'>أسماء الله الحسنى</h2>
        <div className="marquee-container mb-3 " >
          <div className="marquee2 trt" style={{flexDirection:'row-reverse'}}>
          {elements.map((element, index) => (
        
    <span key={index} className="  skil2"> <div className="text-white h3 mt-4 text-center trt" >{element}</div></span>
    
          ))}

    <br/>
    <br/>
    <br/>
    <br/>

    </div>
         
    
    <br/>
    <br/>

    </div>
    </div>
    </div>
    
    <br/>
    <br/>
    <br/>
    
<br/>
      <br/>
    <br/>
    <div className="d-flex justify-content-center h4 text-center text-dark fw-bold" ><div>© Copyright {year} Ouni Ayoub. All rights reserved.</div> </div>
      
    <br/>
    <br/>
</div>
    </div>
  )
}

export default Home
