import image1 from '../images/president.jpeg'
import image2 from '../images/advisor.jpeg'
import image3 from '../images/H B sahu.jpeg'
import image4 from '../images/general sec.jpeg'
import image5 from '../images/general sec2.jpeg'
import image6 from '../images/technical head.jpeg'
import image7 from '../images/AGAM JESWANI.jpg'
import image8 from '../images/sport sec.jpeg'
import image9 from '../images/Anurag Minare.jpg'
import image10 from '../images/Aporanta minare.jpg'
import image11 from '../images/vice president.jpg'
import image13 from '../images/ritik sharma.jpg'
import image14 from '../images/Rajhans Kumar.jpg'
import image15 from '../images/Anand Kumar.jpg'
import image16 from '../images/Biswajit Sahoo.jpg'
import image17 from '../images/ASHESH KUMAR PRADHAN.png'
import image18 from '../images/Tarash Academy.jpg'
import image12 from '../images/Reshab.JPG'
import image19 from '../images/Sabyasachi Naik.jpg'
import image20 from '../images/Angidi Srujan.jpg'
import image21 from '../images/Aryaman Biswal.jpg'
import image22 from '../images/Count menses.jpg'
import image23 from '../images/Pranav kumar Mishra.png'
import image24 from '../images/Shubham Bhargav.jpg'
import image25 from '../images/Abhay Khatavakar.jpg'
import image26 from '../images/Sekh Faizan.jpg'
import image27 from '../images/saksham raj.jpg'
import image28 from '../images/Aman.JPG'
import image29 from '../images/PRATEEK.jpg'
import image30 from '../images/Anushray.jpg'
import image31 from '../images/Ankit.jpeg'

import GoToTop from '../GoToTop'




function Section1(){
    var PersonData = [{'Name':'Amit Kumar Gorai', 'Designation': 'President', 'Image': image1},{'Name':'Himanshu Bhushan Sahu', 'Designation': 'Advisor', 'Image': image3}, {'Name':'R.M. Biswal', 'Designation': 'Treasurer', 'Image': image2}]
    var PersonData2 = [ {'Name':'Rajesh Mishra', 'Designation': 'Vice President', 'Image': image11}, {'Name':'Deepak Anand', 'Designation': 'General Secretary', 'Image': image4}, {'Name':'Binayak Sahu', 'Designation': 'General Secretary', 'Image': image5},  {'Name':'Aporanta Mukhopadhyay', 'Designation': 'Cultural Secretary', 'Image': image10}, {'Name':'Agam Jeswani', 'Designation': 'Literary Secretary', 'Image': image7}, {'Name':'A.K. Rawat', 'Designation': 'Sports  Secretary', 'Image': image8}, {'Name':'Anurag Roy', 'Designation': 'Joint Secretary', 'Image': image9}]
    var PersonData3 = [ {'Name':'Deepak Vaishay', 'Designation': 'Technical Head', 'Image': image6}, {'Name':'Reshab Kumar Sharma', 'Designation': 'Technical Head', 'Image': image12}, {'Name':'Ritik Sharma', 'Designation': 'Event Management', 'Image': image13},  {'Name':'Rajhans Kumar', 'Designation': 'Event Management', 'Image': image14}, {'Name':'Anand Kumar', 'Designation': 'Event Management', 'Image': image15}, {'Name':'Biswajit Sahoo', 'Designation': 'Event Management', 'Image': image16}, {'Name':'Ashesh Kumar Pradhan', 'Designation': 'Design & Decoration', 'Image': image17}, {'Name':'Dhanu Murmu', 'Designation': 'Design & Decoration', 'Image': image18},{'Name':'Sabyasachi Naik', 'Designation': 'Accomodation', 'Image': image19}, {'Name':'Angidi Srujan', 'Designation': 'Accomodation', 'Image': image20}, {'Name':'Aryaman Biswal', 'Designation': 'Sponsorship', 'Image': image21}, {'Name':'Biswojeet Behera', 'Designation': 'Sponsorship', 'Image': image22}, {'Name':'Pranav Kumar Mishra', 'Designation': 'Sponsorship', 'Image': image23}, {'Name':'Shubham Bhargav', 'Designation': 'Content', 'Image': image24}, {'Name':'Abhay Khatavakar', 'Designation': 'Database', 'Image': image25}, {'Name':'Sekh Faizanul Haq', 'Designation': 'Publicity', 'Image': image26}, {'Name':'Saksham Raj', 'Designation': 'Requirement', 'Image': image27}]
    var PersonData4 = [{'Name':'Aman Raj', 'Designation': 'Co-ordinator', 'Image': image28},{'Name':'Prateek Gupta', 'Designation': 'Co-ordinator', 'Image': image29}, {'Name':'Anushray Jain', 'Designation': 'Co-ordinator', 'Image': image30}, {'Name':'Ankit Kumar Naik', 'Designation': 'Co-ordinator', 'Image': image31}]

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
    
    function Person2(){
        var list = []
        PersonData2.forEach((element, i)=>{
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

    function Person3(){
        var list = []
        PersonData3.forEach((element, i)=>{
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

    function Person4(){
        var list = []
        PersonData4.forEach((element, i)=>{
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
        <div className="team-section">
            <div className='head'>
                <h2>
                   M.E.S OFFICIAL
                </h2>
            </div>
            <div className='body'>
                <Person></Person>

            </div>
            <div className='head'>
                <h2>
                   EXECUTIVE BODY
                </h2>
            </div>
            <div className='body'>
                <Person2></Person2>
                
            </div>
            <div className='head'>
                <h2>
                   CORE TEAM
                </h2>
            </div>
            <div className='body'>
                <Person3></Person3>
                
            </div>
            <div className='head'>
                <h2>
                   TECHNICAL CO-ORDINATOR
                </h2>
            </div>
            <div className='body'>
                <Person4></Person4>
                
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
