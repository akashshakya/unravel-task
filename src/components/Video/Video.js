import React, { useRef, useState, useEffect } from "react";
import useElementOnScreen from "../hooks/useElementOnScreen";
import "./Video.css";
import mute from '../../img/volume-mute.png'
import unmute from '../../img/volume.png'

export default function Video({ url, isMuted, setisMuted, index}) {
  const [isVideoPlaying, setisVideoPlaying] = useState(false);
  const videoRef = useRef();
  let isMobile = false;
  
  
  
    if (window.innerWidth < 720) {
        isMobile = true;
    } else {
        isMobile = false;
    }
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  };
  const isVisibile = useElementOnScreen(options, videoRef);

  useEffect(() => {
    // window.addEventListener("resize", handleResize)

    if (isVisibile) {
      if (!isVideoPlaying) {
        const promise = videoRef.current.play();
        // console.log(videoRef)
        promise
          .then(() => {
            setisVideoPlaying(true);
          })
          .catch((error) => {
            setisVideoPlaying(false);
          });
      }
    } else {
      if (isVideoPlaying) {
        // videoRef.current.pause();
        videoRef.current.pause();
        if(isMobile) {
          videoRef.current.currentTime = 0
        }
        setisVideoPlaying(false);
      }
    }


  }, [isVisibile]);

  const onVideoClick = () => {
    console.log(isVideoPlaying);
    if (isVideoPlaying) {
      videoRef.current.pause();
      setisVideoPlaying(!isVideoPlaying);
    } else {
      videoRef.current.play();
      setisVideoPlaying(!isVideoPlaying);
    }
  };

  const muteHandle = () => {
    if (isMuted) {
      setisMuted(false);
    } else {
      setisMuted(true);
    }
  };

  return (
    <div className="video-cards">
      <video
        onClick={onVideoClick}
        className="video-player"
        ref={videoRef}
        src={url}
        muted={isMuted}
        loop
      />
      <button
        onClick={muteHandle}
        style={{ position: "absolute", top: 0, right: 0, borderRadius:"50%", opacity: "50%", margin:"5px"}}
      >
        {isMuted ? <img style={{width: "20px", height: "20px" }} alt="mute" src={mute}/> : <img style={{width: "20px", height: "20px" }} alt="unmute" src={unmute}/>}
      </button>
    </div>
  );
}
