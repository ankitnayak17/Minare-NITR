import image1 from '../images/gorai sir.jpg'
import image2 from '../images/Anwesh~2.png'
import image3 from '../images/karthik.jpg'
import image4 from '../images/kustav bhaiya.jpg'
import image5 from '../images/nigam bhaiya.png'
import image6 from '../images/saho sir.jpg'
import image7 from '../images/satwik bhai.jpg'
import image8 from '../images/prabhat.png'




function Section1(){
    
    var PersonData = [{'Name':'Himanshu Bhushan Sahu', 'Designation': 'President', 'Image': image6},{'Name':'Amit Kumar Gorai', 'Designation': 'Advisor', 'Image': image1, 'links': {'mail':'xyz', }}, {'Name':'Kaustuv Ray', 'Designation': 'Vice President', 'Image': image4}, {'Name':'Nigam Mohanty', 'Designation': 'Secretary', 'Image': image5}, {'Name':'Anwesh Kumar Panigrahi', 'Designation': 'Joint Secretary', 'Image': image2}, {'Name':'Satwik Kumar Sahoo', 'Designation': 'Cultural Secretary', 'Image': image7}, {'Name':'Kartik Kant Raman', 'Designation': 'Literary Secretary', 'Image': image3}, {'Name':'Prabhat Kumar Sahoo', 'Designation': 'Sports  Secretary', 'Image': image8}]


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
        <div className="team-section">
            <div className='head'>
                Organising Team
            </div>
            <div className='body'>
                <Person></Person>
            </div>
        </div>
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
        </div>
    )
}

export default Team