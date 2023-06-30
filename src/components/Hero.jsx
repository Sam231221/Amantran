import React, { useRef } from 'react'

const Hero = () => {
  const btns = document.querySelectorAll(".nav-btn");
  const slides = document.querySelectorAll(".video-slide");
  
  function handleNavBtnClick(e){
    e.target.classList.remove('active')

  }
  function handleVideoSlideClick(e){
    e.target.classList.remove('active')

  }
  let index  = 0;
  const AutoSlide  =()=>{
      slides[index].classList.remove('active')
      btns[index].classList.remove('active')

      index= (index+1) %slides.length
      slides[index].classList.add('active')
      btns[index].classList.add('active')
  }
  setInterval(AutoSlide, 5000)
  return (
    <div className='w-full h-full relative sm:-top-[56px]'>
      
      <section className="home">

          <video onClick={(e)=>handleVideoSlideClick(e)}   className="video-slide active" 
          
          src="https://res.cloudinary.com/dcgrv6shk/video/upload/v1688153198/video1_ngv1wo.mp4" autoPlay muted loop></video>

          <video onClick={(e)=>handleVideoSlideClick(e)}  className="video-slide" 
          src="https://res.cloudinary.com/dcgrv6shk/video/upload/v1688153176/video3_paxjvf.mp4" autoPlay muted loop></video>

          <video onClick={(e)=>handleVideoSlideClick(e)}  className="video-slide" 
          src="https://res.cloudinary.com/dcgrv6shk/video/upload/v1688153163/video2_rsromi.mp4" autoPlay muted loop></video>



        <div className="media-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
        </div>
        <div className="slider-navigation">
            <div onClick={(e)=>handleNavBtnClick(e)} className="nav-btn active"></div>
            <div onClick={(e)=>handleNavBtnClick(e)}  className="nav-btn"></div>
            <div onClick={(e)=>handleNavBtnClick(e)}  className="nav-btn"></div>
           
        </div>
    </section>

    </div>
  )
}

export default Hero
