import React from 'react';
import './Footer.scss';

import songImage from '../../icons/test.jpg'
import heart from '../../icons/heart.png';
import play from '../../icons/play.png';
// import pause from '../../icons/pause.png';
import shuffle from '../../icons/shuffle.png';
import back from '../../icons/back.png';
import next from '../../icons/next.png';
import repeat from '../../icons/repeat.png';
import queque from '../../icons/queque.png';
import speaker from '../../icons/speaker.png';
import volume from '../../icons/volume.png';
import expand from '../../icons/expand.png';
const Footer = () => {
  return (
    <div className="footer flex-row-center">

     <div className="footer__song-container flex-row">
       <img className="footer__song-image" src={songImage} alt="song"/>
       <div className="flex-column footer__song-name-container">
         <div className="flex-row-center">
          <span className="footer__song-name">Mies yli laidan</span>
          <img className="footer__song-like-icon" src={heart} alt="heart"/>
         </div>
         
         <span className="footer__artist-name">Ruoska</span>
       </div>
     </div>

     <div className="footer__play-container flex-column-center">
       <div className="flex-row-center footer__play-button-container">
         <img src={shuffle} alt="shuffle"/>
         <img src={back} alt="back"/>
         <img className="footer__play-button" src={play} alt="play"/>
         <img src={next} alt="next"/>
         <img src={repeat} alt="repeat"/>

       </div>

       <div className="flex-row-center">
         <span className="footer__play-time">0.00</span>
         <div className="footer__play-time-bar"></div>
         <span className="footer__play-time">3.23</span>
       </div>
     </div>

     <div className="flex-row-center footer__right-container">
       <img className="footer__icon" src={queque} alt="queque"/>
       <img className="footer__icon" src={speaker} alt="devices"/>
       <img className="footer__icon" src={volume} alt="volume"/>
       <span className="footer__volume-bar"></span>
       <img  className="footer__icon" src={expand} alt="expand"/>

     </div>

    </div>
  );
}

export default Footer;