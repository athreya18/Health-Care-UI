import React from "react";
import './App.css';
import logoImg from './assets/Logo.svg';
import msgImg from './assets/message-notif.svg';
import pplImg from './assets/people.svg';
import ovImg from './assets/Overview.svg';
import NotivImg from './assets/notification.svg';
import AImg from './assets/Avatar.svg';
import A1 from './assets/arrow1.svg';
import A2 from './assets/arrow2.svg';
import b1 from './assets/b1.svg';
import b2 from './assets/b2.svg';
import b3 from './assets/b3.svg';
import b4 from './assets/b4.svg';
import arrow from './assets/arrow.svg';
import chat from './assets/chat.svg';
import video from './assets/video.svg';
import hands from './assets/hands.svg';
import hakeem from './assets/hakeem.svg';
import omo from './assets/omo.svg';
import { Header } from "./components/header/index";

function App() {
  return (
    <div>
      <div className="card-container">
        <div className="first">
          <img src={logoImg} className="logoImg" />
          <div className="card1">Health Admin</div>
        </div>

        <div className="all">
          <div className="overviewbox">
            <img src={ovImg} className="ov" />
            <div className="overview">Overview</div>
          </div>

          <div className="pings"> Pings
            <img src={msgImg} className="msgImg" />
          </div>
          <div className="students"> Students
            <img src={pplImg} className="ppl" />
          </div>
        </div>
        <div className="doctor">
          <img src={NotivImg} className="notif" />
          <div classname="doc">Dr. Alexander</div>
          <img src={AImg} className="avatar" />
        </div>
      </div>
      <div className="middle">
        <div className="doctor2">
          <div className="dr"> Hi Dr. Alexander 👨🏽‍⚕️</div>
        </div>

        <div className="arrow">
          <div className="arrow1">
            <img src={A1} className="a1" />
          </div>
          <div className="arrow2">
            <img src={A2} className="a2" />
          </div>
        </div>

        <div className="statistics">
          <div className="stats"> STATISTICS</div>
        </div>
      </div>
      <div className="boxes">
        <div className="box1">
          <img src={b1} className="b1" />
          <div className="bb1">
            <div className="text">2394</div>
            <div className="subtext">Ping</div>
          </div>
        </div>
        <div className="box2">
          <img src={b2} className="b2" />
          <div className="bb2">
            <div className="text">950</div>
            <div className="subtext">Replied pings</div>
          </div>
        </div>
        <div className="box3">
          <img src={b3} className="b3" />
          <div className="bb3">
            <div className="text">800</div>
            <div className="subtext">Video calls</div>
          </div>
        </div>
        <div className="box4">
          <img src={b4} className="b4" />
          <div className="bb4">
            <div className="text">22,402</div>
            <div className="subtext">Students</div>
          </div>
        </div>
      </div>
      <div className="bbox">
        <div className="leftbox">
          <div className="firstpart">
            <div className="text">Send broadcast</div>
            <div className="bluebox">
              <img src={arrow} className="arrow" />
              <div className="bluetext">Send broadcast</div>
            </div>
          </div>
          <div className="secondpart">
            <div className="blue1">
              <div className="bluetitle"> Broadcast title</div>
              <div className="bluesubtitle">Wash your habds</div>
            </div>
            <div className="blue2">
              <div className="bluetitle"> Type your message</div>
              <div className="bluesubtitle">I have a problem lying down</div>
            </div>
            <div className="yellow">
              <div className="ytext">All registered users get notified when you send this broadcast.</div>
            </div>
          </div>
          <div className="recent">Recent Broadcasts</div>
          <div className="final">
              <img src={hands} className="hands" />
              <div className="final1">
                <div className="ftext">Wash your hands well</div>
                <div className="fsubtext">There's a new bacteria around. It's expected for you to wash...</div>
              </div>
          </div>
        </div>
        <div className="rightbox">
          <div className="text">Pending pings</div>
          <div className="box1">
            <div className="fix">
              <img src={hakeem} className="hakeem" />
              <div className="column">
                <div className="code">
                  <div className="text1">Hakeem Abdulhabeeb</div>
                  <div className="code1">STO53108</div>
                 </div> 
                <div className="subtext1">Hello there, I have a problem sleeping at night. Last night, I had problem with my stomach ...</div>
                <div className="time1">1:25 AM</div>
               
              </div>
            </div>
            <div className="set">
              <div className="chatbox">
                <img src={chat} className="chatimg" />
                <div className="ctext">Chat</div>
              </div>
              <div className="videocall">
                <img src={video} className="video" />
                <div className="vtext">Video call</div>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="box2">
            <div className="fix2">
              <img src={omo} className="omo" />
              <div className="column2">
                <div className="code">
                  <div className="text1">Omoyeni Timilehin</div>
                  <div className="code1">STO54738</div>
                </div>
                <div className="subtext1">I woke up this morning with a lot of pain at my lower waist. I’m not sure what it is.</div>
                <div className="time1">Friday, October 10, 2022 4:24PM</div>
                
              </div>
            </div>
            <div classname="integrate">
              <div className="chatbox">
                <img src={chat} className="chatimg" />
                <div className="ctext">Chat</div>
              </div>
              <div className="videocall">
                <img src={video} className="video" />
                <div className="vtext">Video call</div>
              </div>
            </div>

          </div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  )
}

export default App
