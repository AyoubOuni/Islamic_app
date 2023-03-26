import React from 'react'
import { NavLink } from 'react-router-dom'
import './Notfound.css'
function Notfound() {
    const styles = {
        notFound: {
          position: 'relative',
          width: '100%',
          height: '100%'
        },
        errorCodeWrapper: {
          position: 'relative',
          textAlign: 'center',
          width: '800px',
          height: '300px',
          borderBottom: '1px solid black',
          transform: 'translate(-50%)',
          marginLeft: '50%',
          top: 'calc(50vh - 100px)'
        },
        notFoundMessage: {
          width: '100%',
          height: '50px',
          fontSize: '48px',
          marginTop: '20px',
          marginBottom: '20px',
          fontWeight: 'bold'
        },
        homeLink: {
          color: 'gray',
          fontSize: '21px',
          cursor: 'pointer',
          textDecoration:'none'
        },
        svgWrapper: {
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden'
        },
        svg: {
          position: 'relative',
          width: '100%',
          height: '100%',
          transform: 'skewX(-15deg)'
        },
        errorText: {
          position: 'absolute',
          color: 'black',
          fontSize: '24px',
          top: '10px',
          left: '20px'
        }
      }
      return (
        <>
        <div className="position-relative" style={{bottom:'160px'}}> 

        <div style={styles.notFound} className="noningg">
          <div style={styles.errorCodeWrapper}>
            <div style={styles.svgWrapper} className='noningg'>
              <svg id="svg" style={styles.svg} className="error404">
              <defs id="defs4"/>
              <g id="layer6" style={{"display":"inline"}}>
                <rect height="28.396225" id="rect4241" style={{"fill":"#ff0000","fillOpacity":"1","stroke":"#000000","strokeWidth":"3.5","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="31.037735" x="125.71386" y="127.62041"/>
                <rect height="43.584908" id="rect4243" style={{"fill":"#ff0000","fillOpacity":"1","stroke":"#000000","strokeWidth":"3.5","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} width="46.886791" x="582.03467" y="122.33739"/>
              </g>
              <g id="layer2" style={{"display":"inline"}}>
                <path id="path3348" style={{"fill":"#000000","fillOpacity":"1","fillRule":"evenodd","stroke":"#ff0000","strokeWidth":"3.5","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 266.7516,58.318525 53,-50.4999979 103.5,0 48,46.0000079 0,163.499995 -53.5,52 -99.5,0.5 -50.5,-49 z"/>
                <path id="path3350" style={{"fill":"#ff0000","fillOpacity":"1","fillRule":"evenodd","stroke":"#000000","strokeWidth":"3.5","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 326.7516,22.318531 -39,39.499994 -0.5,149.500005 39.59538,39.02312 88.90462,-0.52312 39,-37 0,-151.500005 -38.5,-37.999995 z"/>
                <path id="path3352" style={{"fill":"none","fillRule":"evenodd","stroke":"#ff0000","strokeWidth":"3.5","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 359.2516,66.318525 -17.5,20.5 0,118.500005 43.5,0 16,-18.5 -0.5,-120.500005 z"/>
                <path id="path3354" style={{"fill":"#000000","fillOpacity":"1","fillRule":"evenodd","stroke":"#ff0000","strokeWidth":"3.5","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 361.6938,82.035285 -10.52024,9.71099 0,101.965315 25.49133,0 10.52023,-11.32948 0.40463,-100.751445 z"/>
              </g>
              <g id="layer3">
                <path id="path3357" style={{"fill":"#000000","fillOpacity":"1","fillRule":"evenodd","stroke":"#ff0000","strokeWidth":"3.5","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 694.27205,45.683999 -103.17919,98.728331 14.16185,-0.80925 0,-12.13873 31.56069,-26.30057 57.45665,0 0,42.48555 26.30058,-0.40463 -2.83237,73.23699 -23.46821,7.28324 0.80925,46.12717 -70.40463,0 -22.25433,-16.58959 0,-29.53758 -50.98266,-0.40462 -72.42774,-59.47977 0.40462,-48.15029 95.0867,-110.4624349 118.95954,-2.023119 z"/>
                <path id="path3359" style={{"fill":"#ff0000","fillOpacity":"1","fillRule":"evenodd","stroke":"#000000","strokeWidth":"3.5","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 591.90211,24.238911 87.39885,-0.809249 1.21387,14.971103 -131.50289,125.838155 75.26011,0 0.80925,-27.91907 18.61271,-14.56648 34.39307,0 0.80925,41.6763 25.49133,0 -2.42775,41.67631 -22.65895,1.21387 0,46.93641 -46.5318,-0.40462 -8.09249,-5.26012 -1.21387,-41.67629 -61.50289,0.40462 -60.69364,-49.36416 0.40462,-27.10983 z"/>
              </g>
              <g id="layer4">
                <path id="path3357-3" style={{"fill":"#000000","fillOpacity":"1","fillRule":"evenodd","stroke":"#ff0000","strokeWidth":"3.5","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 235.86145,45.236251 -103.1792,98.728319 14.16186,-0.80924 0,-12.13873 31.56069,-26.30058 57.45665,0 0,42.48555 26.30058,-0.40462 -2.83237,73.23699 -23.46821,7.28324 0.80925,46.12716 -70.40463,0 -22.25433,-16.58959 0,-29.53757 L 93.02909,226.91255 20.601337,167.43279 21.005958,119.2825 116.09266,8.8200661 235.0522,6.7969471 Z"/>
                <path id="path3359-6" style={{"fill":"#ff0000","fillOpacity":"1","fillRule":"evenodd","stroke":"#000000","strokeWidth":"3.5","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 133.4915,23.791163 87.39885,-0.809249 1.21387,14.971103 -131.50288,125.838143 75.26011,0 0.80925,-27.91907 18.61271,-14.56647 34.39307,0 0.80924,41.6763 25.49134,0 -2.42774,41.6763 -22.65897,1.21387 0,46.93642 -46.53179,-0.40463 -8.09249,-5.26011 -1.21387,-41.6763 -61.50289,0.40462 -60.693636,-49.36416 0.404621,-27.10982 z"/>
              </g>
            </svg>
            </div>
            <div style={styles.notFoundMessage}>Page not found</div>
            <NavLink style={styles.homeLink} className='h5' to="/" >Go to the home page</NavLink>
          </div>
          
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
         
       
        </div>


      
       
        </div>
        <>  <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        <div className="d-flex justify-content-center nini ">
      
          <div  className='ms-2 h1 fw-bold'>Page not found</div></div>
          <div className="d-flex justify-content-center nini ">   <NavLink style={styles.homeLink} className='h5 ms-2' to="/" >Go to the home page</NavLink></div>
        </>  </>
        )


}

export default Notfound
