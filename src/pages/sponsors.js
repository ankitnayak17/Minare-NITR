import image0 from "../assets/img/spon/aditya.jpg";
import image1 from "../assets/img/spon/imfalogo.png";
import image2 from "../assets/img/spon/mcllogo.png";
import image3 from "../assets/img/spon/moil.png";
import image4 from "../assets/img/spon/omclogo.png";
import image5 from "../assets/img/spon/rc_rungta_group.png";
import image6 from "../assets/img/spon/handshake.jpg";
import GoToTop from "../GoToTop";


function Section1() {
  var companies = [
    {
      Name: "Aditya Birla",
      Image: image0,
      Link: "https://www.adityabirla.com/businesses/companies/essel-mining-and-industries-limited",
    },
    {
      Name: "mahanadicoal",
      Image: image2,
      Link: "https://www.mahanadicoal.in/Welcome.php",
    },
    { Name: "moil", Image: image3, Link: "https://www.moil.nic.in" },
    { Name: "omcltd", Image: image4, Link: "https://omcltd.in" },
    {
      Name: "therungtagroup",
      Image: image5,
      Link: "https://www.therungtagroup.com/",
    },
    { Name: "imfa", Image: image1, Link: "https://www.imfa.in" },
  ];

  
  function Companies() {
    var l = [];
    companies.forEach((element, i) => {
      l.push(
        <div className="spon-card" key={i}>
          <div className={`span-card${i}`}>
            <a href={element.Link}>
              {/* <img src="aditya.jpg" alt=""> */}
              <img
                className="team-card-face-img"
                src={element.Image}
                alt={`Img-${element.Name}`}
              ></img>
            </a>
          </div>
          <div className="card-body">{element["Name"]}</div>
        </div>
      );
    });
    return <>{l}</>;
  }

  return (
    <>
      <div className="bannerSponsor">
        <div className="spon-container sponsors banner">
          <div className="spon-heading">
            <h1>PAST SPONSORS</h1>
            <p className="banner p">
              Over the past years Minare has had the privilege to have hosted a
              number of sponsors which provided a very entertaining experience
              to our visitors as well as the brand.
            </p>
          </div>
          <div className="spon-row">
            <Companies></Companies>
          </div>
        </div>
      </div>
    </>
  );
}

window.scrollTo(0,0)
function Sponsors() {
  return (
     <div className="spon-n-container-main">
      <div className="spon-n-container">
        <div className="spon-n-heading">
          <h1 className="spon-n-title">PAST SPONSORS</h1>
          <div className="spon-n-content">
            <div className="spon-n-head">
              <p>
                We would like to sincerely thank our previous sponsors for their kind assistance and contribution to the achievement of our MINARE. We appreciate you for supporting us and believing in our mission.
                </p>
            </div>
           
          </div>
        </div>
       <div className="spon-grid">
       <div className="spon-pad">
        <div className="spon-n-slider">
          <div className="spon-n-slide-track">
            <div className="spon-n-slide">
              <img  className='spon-card-face-img' src={image0} alt="" />
            </div>
            </div>
            </div>
            </div>
            <div className="spon-pad">
            <div className="spon-n-slider">
          <div className="spon-n-slide-track">
            <div className="spon-n-slide">
              <img  className='spon-card-face-img' src={image1} alt="" />
            </div>
            </div>
            </div>
            </div>
            <div className="spon-pad">
            <div className="spon-n-slider">
          <div className="spon-n-slide-track">
            <div className="spon-n-slide">
              <img className='spon-card-face-img' src={image2} alt="" />
            </div>
            </div>
            </div>
           </div>
           <div className="spon-pad">
            <div className="spon-n-slider">
            <div className="spon-n-slide-track">
            <div className="spon-n-slide">
              <img className='spon-card-face-img' src={image3} alt="" />
            </div>
            </div>
            </div>
            </div>
            <div className="spon-pad">
            <div className="spon-n-slider">
          <div className="spon-n-slide-track">
            <div className="spon-n-slide">
              <img className='spon-card-face-img' src={image4} alt="" />
            </div>
            </div>
            </div>
            </div>
            <div className="spon-pad">
            <div className="spon-n-slider">
          <div className="spon-n-slide-track">
            <div className="spon-n-slide">
              <img className='spon-card-face-img' src={image5} alt="" />
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <GoToTop />
    </div>
    
  );
}

export default Sponsors;
