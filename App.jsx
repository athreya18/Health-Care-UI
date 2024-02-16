function App () {

  return (
    <>
    
      <div className="card-container">
        <div>
          <img src={logoImg} className="logoImg" />
          <div className="card1">Health Admin</div>
        </div>
        <div className="all">
          <div className="overview"> Overview</div>
          <img src={ovImg} className="ov" />
          <div className="pings"> Pings</div>
          <img src={msgImg} className="msgImg" />
          <div className="students"> Students</div> 
          <img src={pplImg} className="ppl" /> 
          
        </div>

        <div className="doctor">
          <img src={NotivImg} className="notif" />
          <div classname="doc">Dr. Alexander</div>
          <img src={AImg} className="avatar" />
        </div>
       </div>


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

    </>   
  )
}

export default App
