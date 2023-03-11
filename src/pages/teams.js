import image1 from '../images/president.jpeg'
import image2 from '../images/advisor.jpeg'
import image3 from '../images/vice president.jpg'
import image4 from '../images/general sec.jpeg'
import image5 from '../images/general sec2.jpeg'
import image6 from '../images/technical head.jpeg'
import image7 from '../images/literature sec.jpeg'
import image8 from '../images/sport sec.jpeg'
import image9 from '../images/Anurag Minare.jpg'
import image10 from '../images/Aporanta minare.jpg'
import GoToTop from '../GoToTop'




function Section1(){
    
    var PersonData = [{'Name':'Amit Kumar Gorai', 'Designation': 'President', 'Image': image1},{'Name':'R.M. Biswal', 'Designation': 'Advisor', 'Image': image2}, {'Name':'Rajesh Mishra', 'Designation': 'Vice President', 'Image': image3}, {'Name':'Deepak Anand', 'Designation': 'Secretary', 'Image': image4}, {'Name':'Binayak Sahu', 'Designation': 'Secretary', 'Image': image5}, {'Name':'Deepak Vaishay', 'Designation': 'Technical Head', 'Image': image6}, {'Name':'Aporanta Mukhopadhyay', 'Designation': 'Cultural Secretary', 'Image': image10}, {'Name':'Agam Jeswani', 'Designation': 'Literary Secretary', 'Image': image7}, {'Name':'A.K. Rawat', 'Designation': 'Sports  Secretary', 'Image': image8}, {'Name':'Anurag Roy', 'Designation': 'General Secretary', 'Image': image9}]


    function Person(){
        var list = []
        PersonData.forEach((element, i)=>{
            if(element.links){
                list.push(
                    <div className="team-card" key={i}>
                        <div className="team-card-face">
                            <img className='team-card-face-img' src={element.Image} alt={`Img-${element.Name}`}></img>
                            <div className="team-card-face-text">
                                {element['Name']}
                            </div>
                        </div>
                        <div className="team-card-body">
                            <div className='team-card-body-text'>
                                {element['Name']}
                            </div>
                            <div className='team-card-body-text'>
                                {element['Designation']}
                            </div>
                            <div className='team-card-body-text'>
                                <a href={element.links.mail}>
                                    <i className='fa fa-envelope '></i>
                                </a>
                            </div>
                        </div>
                    </div>
                )
            }
            else{
                list.push(
                    <div className="team-card" key={i}>
                        <div className="team-card-face">
                            <img className='team-card-face-img' src={element.Image} alt={`Img-${element.Name}`}></img>
                            <div className="team-card-face-text">
                                {element['Name']}
                            </div>
                        </div>
                        <div className="team-card-body">
                            <div className='team-card-body-text'>
                                {element['Name']}
                            </div>
                            <div className='team-card-body-text'>
                                {element['Designation']}
                            </div>
                        </div>
                    </div>
                )
            }
        })
        return (<>{list}</>)
    }
    
    return (
        <>
        <div className="bannerSponsor">

        <div className="team-section">
            <div className='head'>
                <h2>
                    Organising Team
                </h2>
            </div>
            <div className='body'>
                <Person></Person>
            </div>
        </div>
        </div>
        </>
    )
} 






function Team(){
    return(
        <div className='team-container-main'>
            <div className="team-container">
                <Section1></Section1>
                {/* <Section1></Section1>
                <Section1></Section1>
                <Section1></Section1> */}
            </div>
            <GoToTop />
        </div>
    )
}

export default Team
