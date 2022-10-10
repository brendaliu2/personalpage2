import React, { useState, useRef, useEffect } from "react";
import JoblyDemo from '../videos/JoblyDemo.mp4';
import WarblerDemo from '../videos/WarblerDemo.mp4';
import PersonalSiteDemo from '../videos/PersonalSiteDemo.mp4';
import PixlyDemo from '../videos/PixlyDemo.mp4';
import BlueberryTimerDemo from '../videos/BlueberryTimerDemo.mp4';

function VideoPixly() {
  const videoRef = useRef();

  return (
    <div>
      <video muted autoPlay loop ref={videoRef} className='demo-video'>
      <source src={PixlyDemo} />
    </video>
    </div >
  );
}

function VideoJobly() {
  const videoRef = useRef();

  return (
    <div>
      <video muted autoPlay loop ref={videoRef} className='demo-video'>
      <source src={JoblyDemo} />
    </video>
    </div >
  );
}

function VideoWarbler() {
  const videoRef = useRef();

  return (
    <div>
      <video muted autoPlay loop ref={videoRef} className='demo-video'>
      <source src={WarblerDemo} />
    </video>
    </div >
  );
}

function VideoSite() {
  const videoRef = useRef();

  return (
    <div>
      <video muted autoPlay loop ref={videoRef} className='demo-video'>
      <source src={PersonalSiteDemo} />
    </video>
    </div >
  );
}

function VideoBlueberry() {
  const videoRef = useRef();

  return (
    <div>
      <video muted autoPlay loop ref={videoRef} className='demo-video'>
      <source src={BlueberryTimerDemo} />
    </video>
    </div >
  );
}

export { VideoPixly, VideoJobly, VideoWarbler, VideoSite, VideoBlueberry };