import { useState} from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import tarang2 from '../assets/teamimages/tarang2.webp';
import dax from '../assets/teamimages/dax.webp';
import jaineel from '../assets/teamimages/jaineel.webp';
import kashyap from '../assets/teamimages/kashyap.webp';
import nisarg from '../assets/teamimages/nisarg.webp';
import aryaa from '../assets/teamimages/arya2.webp';
import jenish from '../assets/teamimages/jenish.webp';
import krutagna from '../assets/teamimages/krutagna.webp';
import piyush from '../assets/teamimages/piyush.webp';
import vinit from '../assets/teamimages/viniit.webp';
import srujal from '../assets/teamimages/srujal.webp';
import manan from '../assets/teamimages/manan.webp';
import harshil from '../assets/teamimages/harshil.webp';
import darshan from '../assets/teamimages/darshan.webp';
import samipya from '../assets/teamimages/samipya.webp';
import masoom from '../assets/teamimages/masoom.jpg';
import pruth from '../assets/teamimages/pruth.webp';
import dhruva from '../assets/teamimages/DHRUVA.webp';
import kairavi from '../assets/teamimages/kairavi.webp';
import sonu from '../assets/teamimages/sonu.webp';
import vaishnavi from '../assets/teamimages/vaishnavi.webp';
import nishita from '../assets/teamimages/nishita.webp';
import nachiket from '../assets/teamimages/nachiket.webp';
import dhyey from '../assets/teamimages/Dhyey.webp';
import mitul from '../assets/teamimages/mitul.webp';
import purvesha from '../assets/teamimages/purvesha.webp';
import shivang from '../assets/teamimages/shivang.webp';
import riddhi from '../assets/teamimages/riddhi.webp';
import yashh from '../assets/teamimages/yashh.webp';
import DevTeam from './DevTeam';


const TeamSection = () => {
  const [activeTeam, setActiveTeam] = useState('core');
  const [currentSlide, setCurrentSlide] = useState(0);

  
  const coreTeam = [
      { 'name': "SamipyaSinh Rajput", image: samipya, 'designation': "ISTE Chief Coordinator", 'linkedin': "https://www.linkedin.com/in/samipyasinh-rajput-28b742242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { 'name': "Jenish Patel", image: jenish, 'designation': "Joint ISTE Chief Coordinator", 'linkedin': "https://www.linkedin.com/in/jenishxp?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
      { 'name': "Krutagna Patel", image: krutagna, 'designation': "Joint ISTE Chief Coordinator", 'linkedin': "https://www.linkedin.com/in/krutagna-patel-2a6a14260/" },
      { 'name': "Piyush Sharma", image: piyush, 'designation': "ISTE Finance Coordinator", 'linkedin': "https://linkedin.com" },
      { 'name': "Yash Shah", image: yashh, 'designation': "Joint ISTE Finance Coordinator", 'linkedin': "https://www.linkedin.com/in/yash-shah-195a88283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { 'name': "Vinit Shah", image: vinit, 'designation': "Joint ISTE Finance Coordinator", 'linkedin': "https://www.linkedin.com/in/vinit-shah-aab33321b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { 'name': "Tarang Motiyani", image: tarang2, 'designation': "ISTE Website Coordinator", 'linkedin': "https://www.linkedin.com/in/tarang-motiyani-a05756255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { 'name': "Arya Panchal", image: aryaa, 'designation': "Joint ISTE Website Coordinator", 'linkedin': "https://www.linkedin.com/in/arya-panchal-ab8212268/" },
      { 'name': "Nisarg Patel", image: nisarg, 'designation': "Joint ISTE Website Coordinator", 'linkedin': "https://www.linkedin.com/in/nisarg-patel-7b799a277/" },
      { 'name': "Manan Shah", image: manan, 'designation': "ISTE Social Media Marketing", 'linkedin': "https://www.linkedin.com/in/manan-shah-bb481b24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
      { 'name': "Srujal Shah", image: srujal, 'designation': "Joint ISTE Social Media Marketing", 'linkedin': "https://www.linkedin.com/in/techking007/" },
      { 'name': "Harshilsinh Rana", image: harshil, 'designation': "Joint ISTE Social Media Marketing", 'linkedin': "https://www.linkedin.com/in/harshilsinh-rana-2b8b6b263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { 'name': "Kashyap Contractor", image: kashyap, 'designation': "ISTE Administrative Coordinator", 'linkedin': "https://linkedin.com" },
      { 'name': "Darshan Panchal", image: darshan, 'designation': "Joint ISTE Administrative Coordinator", 'linkedin': "https://www.linkedin.com/in/darshan-panchal-335947298/" },
      { 'name': "Masoom Patel", image: masoom, 'designation': "Joint ISTE Administrative Coordinator", 'linkedin': "https://www.linkedin.com/in/masoom-patel-21b5a0326/" },
      { 'name': "Yash Shah", image: yashh, 'designation': "ISTE Sponsorship Coordinator", 'linkedin': "https://www.linkedin.com/in/yash-shah-195a88283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { 'name': "Pruth Shah", image: pruth, 'designation': "Joint ISTE Sponsorship Coordinator", 'linkedin': "https://linkedin.com" },
      { 'name': "Sonu Chaudhary", image: sonu, 'designation': "ISTE Promotion Coordinator", 'linkedin': "https://in.linkedin.com/in/sonu-choudhary-646265263" },
      { 'name': "Vaishnavi Parmar", image: vaishnavi, 'designation': "Joint ISTE Promotion Coordinator", 'linkedin': "https://www.linkedin.com/in/vaishnavi-parmar-3a7280344" },
      { 'name': "Dax Patel", image: dax, 'designation': "Joint ISTE Promotion Coordinator", 'linkedin': "https://linkedin.com" },
      { 'name': "Nishita Shahani", image: nishita, 'designation': "ISTE Technical Coordinator", 'linkedin': "https://www.linkedin.com/in/nishita-shahani-53b6b2277/" },
      { 'name': "Jaineel Dalwadi", image: jaineel, 'designation': "Joint ISTE Technical Coordinator", 'linkedin': "https://www.linkedin.com/in/jaineel-dalwadi-7914671a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { 'name': "Arya Panchal", image: aryaa, 'designation': "Joint ISTE Technical Coordinator", 'linkedin': "https://www.linkedin.com/in/arya-panchal-ab8212268/" },
      { 'name': "Nachiket Brahmbhatt", image: nachiket, 'designation': "ISTE Non-Technical Coordinator", 'linkedin': "https://www.linkedin.com/in/nachiket-brahmbhatt-779677227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { 'name': "Dhyey Patel", image: dhyey, 'designation': "Joint ISTE Non-Technical Coordinator", 'linkedin': "https://www.linkedin.com/in/dhyey3074" },
      { 'name': "Mitul Shimpi", image: mitul, 'designation': "Joint ISTE Non-Technical Coordinator", 'linkedin': "https://linkedin.com" },
      { 'name': "Purvesha Prajapati", image: purvesha, 'designation': "ISTE Graphics Coordinator", 'linkedin': "https://www.linkedin.com/in/purvesha-prajapati-169815255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { 'name': "Shivang Parmar", image: shivang, 'designation': "Joint ISTE Graphics Coordinator", 'linkedin': "https://www.linkedin.com/in/shivang-parmar" },
      { 'name': "Riddhi Trevadiya", image: riddhi, 'designation': "Joint ISTE Graphics Coordinator", 'linkedin': "https://www.linkedin.com/in/riddhi-trevadiya" },
      { 'name': "Dhruva Desai", image: dhruva, 'designation': "ISTE Decoration Coordinator", 'linkedin': "https://www.linkedin.com/in/dhruva-desai-2314b4344/" },
      { 'name': "Kairavi Parikh", image: kairavi, 'designation': "Joint ISTE Decoration Coordinator", 'linkedin': "https://www.linkedin.com/in/kairavi-parikh-45704622b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  ]

  const handleSocialClick = (url) => {
 // Prevent event from bubbling up
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  

  const getDisplayedTeamMembers = () => {
    const startIndex = currentSlide * 5;
    return coreTeam.slice(startIndex, startIndex + 5);
  };

  const goLeft = () => {
    setCurrentSlide(prev => (prev === 0 ? Math.ceil(coreTeam.length / 5) - 1 : prev - 1));
  };

  const goRight = () => {
    setCurrentSlide(prev => (prev + 1) % Math.ceil(coreTeam.length / 5));
  };

  return (
    <StyledWrapper>
      <div className="button-group">
        <button
          className={`team-button ${activeTeam === 'core' ? 'active' : ''}`}
          onClick={() => setActiveTeam('core')} // Set active team to 'core'
        >
          Core Team
        </button>
       
        <button
          className={`team-button ${activeTeam === 'developer' ? 'active' : ''}`}
          onClick={() => setActiveTeam('developer')} // Set active team to 'developer'
        >
          Developer Team
        </button>
      </div>

      {/* Conditionally render core team cards */}
      {activeTeam === 'core' && (
        <div className="card-container2">
          <button className="left-arrow" onClick={goLeft}>{"<"}</button>
          {coreTeam.map((person, index) => (
            <div className="container2 noselect" key={index}>
              <div className="canvas" onClick={(e) => {e.stopPropagation();handleSocialClick(person.linkedin)}}>
                <div className="tracker tr-1" />
                <div className="tracker tr-2" />
                <div className="tracker tr-3" />
                <div className="tracker tr-4" />
                <div className="tracker tr-5" />
                <div className="tracker tr-6" />
                <div className="tracker tr-7" />
                <div className="tracker tr-8" />
                <div className="tracker tr-9" />
                <div id="card">
                  <div className="card-content">
                    <div className="card-glare" />
                    <div className="cyber-lines">
                      <span /><span /><span /><span />
                    </div>
                    <div className="social-button" >
                      <FaLinkedin />
                    </div>
                    <div className='PersonDetail'>
                      <img src={person.image} alt={person.name} width={80} />
                      <p id="prompt">{person.name}</p>
                    </div>
                    <div className="glowing-elements">
                      <div className="glow-1" />
                      <div className="glow-2" />
                      <div className="glow-3" />
                    </div>
                    <div className="subtitle">
                      <span>{person.designation}</span>
                    </div>
                    <div className="card-particles">
                      <span /><span /><span /><span /><span /><span />
                    </div>
                    <div className="corner-elements">
                      <span /><span /><span /><span />
                    </div>
                    {/* <div className="scan-line" /> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button className="right-arrow" onClick={goRight}>{">"}</button>
        </div>
      )}

      {/* Conditionally render developer team cards */}
      {activeTeam === 'developer' && (
        <DevTeam/>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button-group {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
    position:relative;
    z-index:10;
  }

  .team-button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #333;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #555;
    }

    &.active {
      background-color: #00ffaa;
      color: #000;
    }
  }

  .social-button {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 100;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 8px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    color: #fff;

    svg {
      width: 20px;
      height: 20px;
      color: #fff;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateX(-50%) scale(1.1);
    }
  }

  .container2:hover .social-button {
    opacity: 1;
  }

  .subtitle {
    position: absolute;
    bottom: 40px;
    width: 100%;
    text-align: center;
    font-size: 14px;
    letter-spacing: 1px;
    color: rgba(4, 234, 255, 0.9);
    text-transform: uppercase;
    font-weight: 500;
  }

  .card-container2 {
    display: flex;
    flex-wrap: nowrap;
    gap: 20px;
    overflow-x: auto;
    padding: 10px;
    position: relative;
  }
.card-container2::-webkit-scrollbar {
    height: 8px;
  }
    .card-container2::-webkit-scrollbar-thumb {
    background-color: rgba(0, 255, 170, 0.3);
    border-radius: 10px;
  }


  .card-container2::-webkit-scrollbar-track {
    background-color: transparent;
  }

  .card-container2 .container2 {
    min-width: 250px;
    max-width: 300px;
  }

  .left-arrow, .right-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 10px;
    border: none;
    cursor: pointer;
    z-index: 10;
    font-size: 24px;
  }

  .left-arrow {
    left: 10px;
  }

  .right-arrow {
    right: 10px;
  }

  /* Mobile responsive */
  @media (max-width: 768px) {
    .card-container2 .container2 {
      min-width: 100%;
      max-width: 100%;
    }
      .card-container2::-webkit-scrollbar {
    height :0;
}
  }
  .card {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    width: 150px;
  }

  .card img {
    width: 100%;
    border-radius: 50%;
  }

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  min-height: 10vh;

  .PersonDetail {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    z-index: 10;
    text-align: center;
  }

  .PersonDetail img {
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 10px rgba(0, 255, 170, 0.3);
    width: 145px;
    height: 145px;
    // margin-bottom: -50px;
    object-fit: cover;
    // top: 50%;
  }

  #prompt {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    // margin: 0;
    margin-bottom: 50px;

  }

  .container2 {
    position: relative;
    width: 190px;
    height: 254px;
    transition: 200ms;
  }

  .container:active {
    width: 180px;
    height: 245px;
  }

  #card {
    position: absolute;
    inset: 0;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    transition: 700ms;
    background: linear-gradient(45deg, #1a1a1a, #262626);
    border: 2px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
    box-shadow:
      0 0 20px rgba(0, 0, 0, 0.3),
      inset 0 0 20px rgba(0, 0, 0, 0.2);
  }

  .card-content {
    position: relative;
    width: 100%;
    height: 100%;
  }

  #prompt {
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 2px;
    transition: 300ms ease-in-out;
    position: absolute;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  }

  .title {
    opacity: 0;
    transition: 300ms ease-in-out;
    position: absolute;
    font-size: 28px;
    font-weight: 800;
    letter-spacing: 4px;
    text-align: center;
    width: 100%;
    padding-top: 20px;
    background: linear-gradient(45deg, #00ffaa, #00a2ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 15px rgba(0, 255, 170, 0.3));
    text-shadow:
      0 0 10px rgba(92, 103, 255, 0.5),
      0 0 20px rgba(92, 103, 255, 0.3);
  }

  .subtitle {
    position: absolute;
    bottom: 40px;
    width: 100%;
    text-align: center;
    font-size: 12px;
    letter-spacing: 2px;
    transform: translateY(30px);
     background: linear-gradient(45deg, #00ffaa, #00a2ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 15px rgba(0, 255, 170, 0.3));
    text-shadow:
      0 0 10px rgba(92, 103, 255, 0.5),
      0 0 20px rgba(92, 103, 255, 0.3);
     font-weight: 800;
  }

  .highlight {
    color: #00ffaa;
    margin-left: 5px;
    background: linear-gradient(90deg, #5c67ff, #ad51ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
  }

  .glowing-elements {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .glow-1,
  .glow-2,
  .glow-3 {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: radial-gradient(
      circle at center,
      rgba(0, 255, 170, 0.3) 0%,
      rgba(0, 255, 170, 0) 70%
    );
    filter: blur(15px);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .glow-1 {
    top: -20px;
    left: -20px;
  }
  .glow-2 {
    top: 50%;
    right: -30px;
    transform: translateY(-50%);
  }
  .glow-3 {
    bottom: -20px;
    left: 30%;
  }

  .card-particles span {
    position: absolute;
    width: 3px;
    height: 3px;
    background: #00ffaa;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  /* Hover effects */
  .tracker:hover ~ #card .title {
    opacity: 1;
    transform: translateY(-10px);
  }

  .tracker:hover ~ #card .glowing-elements div {
    opacity: 1;
  }

  .tracker:hover ~ #card .card-particles span {
    animation: particleFloat 2s infinite;
  }

  @keyframes particleFloat {
    0% {
      transform: translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translate(calc(var(--x, 0) * 30px), calc(var(--y, 0) * 30px));
      opacity: 0;
    }
  }

  /* Particle positions */
  .card-particles span:nth-child(1) {
    --x: 1;
    --y: -1;
    top: 40%;
    left: 20%;
  }
  .card-particles span:nth-child(2) {
    --x: -1;
    --y: -1;
    top: 60%;
    right: 20%;
  }
  .card-particles span:nth-child(3) {
    --x: 0.5;
    --y: 1;
    top: 20%;
    left: 40%;
  }
  .card-particles span:nth-child(4) {
    --x: -0.5;
    --y: 1;
    top: 80%;
    right: 40%;
  }
  .card-particles span:nth-child(5) {
    --x: 1;
    --y: 0.5;
    top: 30%;
    left: 60%;
  }
  .card-particles span:nth-child(6) {
    --x: -1;
    --y: 0.5;
    top: 70%;
    right: 60%;
  }

  #card::before {
    content: "";

  }

  .tracker:hover ~ #card::before {
    opacity: 1;
  }

  .tracker {
    position: absolute;
    z-index: 200;
    width: 100%;
    height: 100%;
  }

  .tracker:hover {
    cursor: pointer;
  }

  .tracker:hover ~ #card #prompt {
    opacity: 0;
  }

  .tracker:hover ~ #card {
    transition: 300ms;
    filter: brightness(1.1);
  }

  .container:hover #card::before {
    transition: 200ms;
    content: "";
    opacity: 80%;
  }

  .canvas {
    perspective: 800px;
    inset: 0;
    z-index: 200;
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "tr-1 tr-2 tr-3 tr-4 tr-5"
      "tr-6 tr-7 tr-8 tr-9 tr-10"
      "tr-11 tr-12 tr-13 tr-14 tr-15"
      "tr-16 tr-17 tr-18 tr-19 tr-20"
      "tr-21 tr-22 tr-23 tr-24 tr-25";
  }

  .tr-1 {
    grid-area: tr-1;
  }

  .tr-2 {
    grid-area: tr-2;
  }

  .tr-3 {
    grid-area: tr-3;
  }

  .tr-4 {
    grid-area: tr-4;
  }

  .tr-5 {
    grid-area: tr-5;
  }

  .tr-6 {
    grid-area: tr-6;
  }

  .tr-7 {
    grid-area: tr-7;
  }

  .tr-8 {
    grid-area: tr-8;
  }

  .tr-9 {
    grid-area: tr-9;
  }

  .tr-10 {
    grid-area: tr-10;
  }

  .tr-11 {
    grid-area: tr-11;
  }

  .tr-12 {
    grid-area: tr-12;
  }

  .tr-13 {
    grid-area: tr-13;
  }

  .tr-14 {
    grid-area: tr-14;
  }

  .tr-15 {
    grid-area: tr-15;
  }

  .tr-16 {
    grid-area: tr-16;
  }

  .tr-17 {
    grid-area: tr-17;
  }

  .tr-18 {
    grid-area: tr-18;
  }

  .tr-19 {
    grid-area: tr-19;
  }

  .tr-20 {
    grid-area: tr-20;
  }

  .tr-21 {
    grid-area: tr-21;
  }

  .tr-22 {
    grid-area: tr-22;
  }

  .tr-23 {
    grid-area: tr-23;
  }

  .tr-24 {
    grid-area: tr-24;
  }

  .tr-25 {
    grid-area: tr-25;
  }

  .tr-1:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-2:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-3:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-4:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-5:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(10deg) rotateZ(0deg);
  }

  .tr-6:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-7:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-8:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-9:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-10:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(10deg) rotateZ(0deg);
  }

  .tr-11:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-12:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-13:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-14:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-15:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(10deg) rotateZ(0deg);
  }

  .tr-16:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-17:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-18:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-19:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-20:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(10deg) rotateZ(0deg);
  }

  .tr-21:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-22:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-23:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-24:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-25:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(10deg) rotateZ(0deg);
  }

  .noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  `;

export default TeamSection;
