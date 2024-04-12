import './Properties.css'

export default function Properties ()  {
  return ( 
    <section className="p-wrapper">
    <div className="paddings innerWidth p-container">
        <div className="flexColStart p-head">
          <span className="text-yellow-600 font-semibold text-3xl ml-4">EXPERIENCE THE SPLENDOUR OF OWNING A LUXURY HOME IN...</span>
        </div>

        <div className="p-bottom">
        <div className="left-p">
          <h1>LAGOS</h1>
          <div className="left-image">
          <img src="./Lagos.jpg" alt="" />
          <div className="left-pHover">
            <p>Lagos, the vibrant economic heartbeat of Nigeria, beckons discerning investors with a myriad of compelling reasons to invest in its real estate landscape.</p>
          </div>
          </div>
        </div>

        <div className="center-p">
          <h1>HOUSTON</h1>
          <div className="center-image">
          <img src="./Houston .jpg" alt="" />
          <div className="center-pHover">
            <p>Living in Houston offers an opulent lifestyle characterized by prestigious neighborhoods, world-class amenities, and a vibrant cultural scene, making it an enticing investment opportunity.</p>
          </div>
          </div>
        </div>

        <div className="right-p">
          <h1>ABU DHABI</h1>
          <div className="right-image">
          <img src="./Dubai.jpg" alt="" />
          <div className="right-pHover">
            <p>Abu Dhabi epitomizes luxury living with its exquisite waterfront properties, extravagant shopping districts, and unparalleled leisure options, making it an irresistible investment destination for high-net-worth individuals.</p>
          </div>
          </div>
        </div>
          
          
        </div>
    </div>
  </section>
   );
}
 
