import { Component } from "react";
import './home.css';
//icon img
import ArrowDown from '../../img/icons/ArrowDown.png';
import ArrowUp from '../../img/icons/ArrowUp.png';
//icon so media
import Insta from '../../img/icons/insta.png';
import Youtube from '../../img/icons/youtube.png';
import facebook from '../../img/icons/facebook.png';
import twitter from '../../img/icons/twitter.png';
import linkedIn from '../../img/icons/linkedin.png';
import github from '../../img/icons/github.png';
//img
import medium from '../../img/img/medium.jpeg';
//video
import BackgroundVideo from '../../img/video/about.mp4';
//other component
import Projects from '../Projects/Projects.js';


class Home extends Component{

renderArrowHome=()=>{
        return(
                <div className="arrow-container animated fadeInDown">
                     <a href="#about" className="home-main-nav-a"> 
                       <div className="arrow-2"> <img className="arrowDownIcon" src={ArrowDown} alt="ArrowDown"/> </div> 
                     </a>
                     <div className="arrow-1 animated hinge infinite zoomIn"></div> 
                </div>
        )
}

renderArrowAbout=()=>{
        return(
                <div className="arrow-container animated fadeInDown" style={{bottom: '-100%'}}>
                   <a href="#projects" className="home-main-nav-a"> 
                     <div className="arrow-2" style={{background:'#c5dc00'}}> <img className="arrowDownIcon" src={ArrowDown} alt="ArrowDown"/> </div>
                   </a>  
                     <div className="arrow-1 animated hinge infinite zoomIn" style={{background:'#c5dc00'}}></div>
                </div>
        )
}

renderArrowProject=()=>{
        return(
                <div className="arrow-container animated fadeInDown" style={{bottom: '-200%'}}>
                   <a href="#blogs" className="home-main-nav-a"> 
                     <div className="arrow-2" style={{background:'#c5325a'}}> <img className="arrowDownIcon" src={ArrowDown} alt="ArrowDown"/> </div>
                   </a>
                     <div className="arrow-1 animated hinge infinite zoomIn" style={{background:'#c5325a'}}></div>
                </div>
        )
}

renderArrowBlog=()=>{
        return(
                <div className="arrow-container animated fadeInDown" style={{bottom: '-300%'}}>
                   <a href="#contactme" className="home-main-nav-a"> 
                     <div className="arrow-2" style={{background:'#f2004a'}}> <img className="arrowDownIcon" src={ArrowDown} alt="ArrowDown"/> </div>
                    </a>
                     <div className="arrow-1 animated hinge infinite zoomIn" style={{background:'#f2004a'}}></div>
                </div>
        )
}

renderArrowContactme=()=>{
        return(
                <div className="arrow-container animated fadeInDown" style={{bottom: '-356%',left:'30%',zIndex:'2'}}>
                   <a href="#home" className="home-main-nav-a"> 
                     <div className="arrow-2" style={{background:'#00c0cc'}}> <img className="arrowDownIconDown" src={ArrowUp} alt="ArrowUp"/> </div>
                     <div className="arrow-1 animated hinge infinite zoomIn" style={{background:'#00c0cc'}}></div>
                   </a>
                </div>
        )
}

/* ------------------------------------------------- */

renderHome = () =>{
        return(
                <section className="home-banner" id="home">
                  <div className="container-banner-home">
                        <div className="animated-title">
                                <div className="text-top">
                                        <div>
                                                <span style={{color:'white'}}>I'm</span>
                                                <span>CHANCHAL PANPALIYA</span>
                                        </div>
                                </div>
                                <div className="text-bottom">
                                        <div>A Frontend Web Developer</div>
                                </div>
                        </div>
                   </div>
                 
                           {this.renderArrowHome()}
                </section>
        )
}

renderAbout = () =>{
      return(
        <section className="about-banner" id="about">
         <div className="container-banner">
           <div className="container-banner-body"> 
               <h1 className="Content-heading">About Me</h1>
                  <p style={{paddingLeft:'3%',opacity:'1'}}>
                      <table>
                              <tbody>
                                      <tr>
                                              <td style={{width:'55%',paddingRight:'1%'}}>
                                                   <p>
                                                  &nbsp;&nbsp; I  have completed Master’s degree (MCA) from the University of Pune(2018).
                                                  <br/><br/><br/>
                                                   <h5> Profile Summary : </h5>
                                                    <ul>
                                                            <li>  I worked with BuzzyBrains software (I) Pvt. Ltd. Pune as a Software trainee for 8 months on 'Reactjs' platform. </li>
                                                            <li>  I have completed  5 months Internship at Techknomatic Services Pvt. Ltd. Pune on ‘React.js’ platform. </li>
                                                            <li> Consistent college topper during graduation and post-graduation. <br/>
                                                                        Secured 1st rank in BCA  from DCPE HVPM College merit list 2014-2015. <a href="https://drive.google.com/file/d/1jiEFvoPpMmels5XmzWZrfK5I95gFRVn2/view?usp=sharing" target="_blank" className="Textlink"> link </a>
                                                                        <br/>
                                                                        Secured 10th rank in MCA from SP Pune University merit list 2017-2018.  <a href="https://iicmr.org/student/wall-fame" target="_blank" className="Textlink"> link </a>
                                                            </li>
                                                            <li> Represented HVPM College at Amravati university for dance competition (youth festival) in 2011 and 2012.</li>
                                                            <li> Represented as a cultural coordinator in IICMR College. </li>
                                                           
                                                    </ul>
                                                   </p>
                                              </td>
                                              <td style={{position:'relative',right:'-5%'}}>
                                                      <table style={{width:'80%'}}>
                                                              <tbody>
                                                                      <tr>
                                                                              <td>  
                                                                                      <h3> Skills </h3>
                                                                                
                                                                                      <p>HTML</p>
                                                                                        <div className="container">
                                                                                             <div className="skills html">90%</div>
                                                                                        </div>

                                                                                        <p>CSS</p>
                                                                                        <div className="container">
                                                                                            <div className="skills css">60%</div>
                                                                                        </div>

                                                                                        <p>JavaScript</p>
                                                                                        <div className="container">
                                                                                            <div className="skills js">50%</div>
                                                                                        </div>

                                                                                        <p>Reactjs</p>
                                                                                        <div className="container">
                                                                                             <div className="skills php">50%</div>
                                                                                        </div>
                                                                              </td>
                                                                        </tr>
                                                                        <tr>
                                                                              <td>  
                                                                                      <h3> Certification </h3>
                                                                                      <p> Salesforce Platform Developer I (SP17). <a href="https://drive.google.com/file/d/1ZtZTXUxWi7LS1CUYcvxBrnftqUxTljMB/view?usp=sharing" target="_blank" className="Textlink"> link </a> </p>
                                                                                      <p> Microsoft SQL Server 2012 Fundamental.  <a href="https://drive.google.com/file/d/1ih2qu8P62Udi3zeufKpr5MtT5Cs6rExu/view?usp=sharing" target="_blank" className="Textlink"> link </a></p>
                                                                              </td>
                                                                      </tr>
                                                              </tbody>
                                                      </table>
                                              </td>
                                      </tr>
                              </tbody>
                      </table>
                  </p>
     
           </div>
        </div>
                     {this.renderArrowAbout()}
   </section>
      )
}

renderProjects = () =>{
        return(
                
        <section className="projects-banner" id="projects">
         <div className="container-banner">
           <div className="container-banner-body"> 
                 <h1 className="Content-heading">Projects</h1>
                <p style={{opacity:'1'}}>
                     <Projects/>   
                </p>
          </div>
         </div>
                  {this.renderArrowProject()}
    </section>
        )
}

renderBlogs = () =>{
        return(
                <section className="blogs-banner" id="blogs">
                  <div className="container-banner">
                     <div className="container-banner-body"> 
                        <h1 className="Content-heading">Blogs</h1>
                        <p style={{paddingLeft:'10%',opacity:'1'}}>
                                <table>
                                        <tbody>
                                                <tr>
                                                        <td style={{width:'20%'}}> 
                                                            <table>
                                                                    <tbody>
                                                                            <tr> <td> 
                                                                                    <img className="blog-medium-img" src={medium} alt="medium" />
                                                                                 </td> 
                                                                            </tr>
                                                                            <tr> 
                                                                                 <td>  
                                                                                    <h3> Multiple Choice Quiz App Using Material-UI and React JS  </h3>
                                                                                     <p> Installation :- Create your React app Open a terminal (Windows Command Prompt or PowerShell) Create a new project folder and change directory 
                                                                                         <a href="https://medium.com/@chanchal.panpaliya/multiple-choice-quiz-app-using-material-ui-and-react-js-11a65a5cccc9" target="_blank" rel="noreferrer" alt="blog1" className="Textlink"> more... </a>
                                                                                        
                                                                                     </p>
                                                                                     <span> 30 september 2021 </span>
                                                                                 </td> 
                                                                            </tr>     
                                                                    </tbody>
                                                            </table>
                                                        </td>

                                                        <td style={{width:'50%',paddingTop:'1.5%'}}> 
                                                            <table>
                                                                    <tbody>
                                                                            <tr> <td> 
                                                                                    <img className="blog-medium-img" src={medium} alt="medium"/>
                                                                                </td> 
                                                                            </tr>
                                                                            <tr> 
                                                                               <td>
                                                                                       <h3> Costumes of Our Cultured Classical Dances of India </h3> 
                                                                                       <p> Dance is a physical expression and feelings of emotive content of music.Gestures coupled with rhythmical movement to expressions can be defined as Dance We may also say as Expression of mind through body movements
                                                                                               <a href="https://medium.com/@chanchal.panpaliya/costumes-of-our-cultured-classical-dances-of-india-871822697cb4" target="_blank" rel="noreferrer" alt="blog1" className="Textlink"> more... </a>
                                                                                       </p>
                                                                                       <span> 30 september 2021 </span>
                                                                               </td> 
                                                                            </tr>  
                                                                    </tbody>
                                                            </table>
                                                        </td>
                                                </tr>
                                        </tbody>
                                </table>
                        </p>
                 </div>
                 </div>
                 {this.renderArrowBlog()}
            </section>
        )
}

// renderContactMe = () =>{
//         return(
//                 <section className="contactme-banner" id="contactme">
//                    <div className="container-banner">
//                      <div className="container-banner-body"> 
//                         <h1>Contact Me</h1>
//                         <p>
//                                 pkpkpkpkp
//                         </p>
//                  </div>
//                 </div>
//                   {this.renderArrowContactme()}
//             </section>
//         )
// }

renderContactMe = () =>{
        return(
           <section className="contactme-banner" id="contactme">
                        <div className="innerFooter__men">

                          </div> 
                <div className="innerFooter__mainBox">
                       <div className="innerFooter__mainBox_body">
                           
                               <h1>Contact Me</h1>
                               <table style={{position:'absolute',top:'12%'}}>
                                       <tbody>
                                               <tr>
                                                       <td>
                                                             
                                                                <h3 style={{paddingTop:'2%'}}> Creator Space </h3> 
                                                                <div> 
                                                                        <img className="innerFooter__mainBox_Instagram" src={Insta} alt="instagram"/>
                                                                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/creatorspace01/" alt="instagramlink" style={{textDecoration:'none',color:'white'}}> creatorspace01 </a>
                                                                </div>
                                                                <div> 
                                                                        <img className="innerFooter__mainBox_Instagram" src={Youtube} alt="youtube"/>
                                                                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCNBEZbgBoLLpopG7vKmDGnw" alt="youtubelink" style={{textDecoration:'none',color:'white'}}> creator space </a>
                                                                </div>

                                                        </td>

                                                        <td style={{paddingTop:'8%',width:'55%'}}> 
                                                                <h3> Personal </h3>
                                                                <div> 
                                                                        <img className="innerFooter__mainBox_facebook" src={facebook} alt="instagram"/>
                                                                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/chanchal.panpaliya" alt="instagramlink" style={{textDecoration:'none',color:'white'}}> chanchal.panpaliya </a>
                                                                </div>
                                                                <div> 
                                                                        <img className="innerFooter__mainBox_facebook" src={twitter} alt="twitter"/>
                                                                        <a target="_blank" rel="noreferrer" href="https://twitter.com/CPanpaliya" alt="twitterlink" style={{textDecoration:'none',color:'white'}}> CPanpaliya </a>
                                                                </div>
                                                                <div> 
                                                                        <img className="innerFooter__mainBox_facebook" src={linkedIn} alt="linkedin"/>
                                                                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/chanchal-panpaliya/" alt="linkedinlink" style={{textDecoration:'none',color:'white'}}> chanchal-panpaliya </a>
                                                                </div>
                                                                <div> 
                                                                        <img className="innerFooter__mainBox_facebook" src={github} alt="github"/>
                                                                        <a target="_blank" rel="noreferrer" href="https://github.com/chanchal-panpaliya" alt="githublink" style={{textDecoration:'none',color:'white'}}> chanchal-panpaliya </a>
                                                                </div>
                                                        </td>
                                               </tr>
                                       </tbody>
                               </table>
                              
                             

                       </div>
                </div>
                <div className="innerFooter__sideOuter">
                        <div className="innerFooter__sideBg">
                                
                        </div>

                </div>
           
               {this.renderArrowContactme()}
               <div style={{width:'65%',height:'5vh',position:'absolute',backgroundColor:'#C0C0C0',opacity:'0.7'}}> </div>
           </section>
        )
}

render(){
    return(
    <div>
     <header className="home-header"> 
       <div className="home-container">
           <div className="home-container-logoname"> 
                 <a href="#home" className="home-main-nav-a">
                        Creator Space
                </a>
           </div> 
         <nav className="home-main-nav">
           <ul className="home-main-nav-ul">
             <li className="home-main-nav-li"> <a href="#home" className="home-main-nav-a"> Home </a> </li>
             <li className="home-main-nav-li"> <a href="#about" className="home-main-nav-a"> About </a> </li>
             <li className="home-main-nav-li"> <a href="#projects" className="home-main-nav-a"> Projects </a> </li>
             <li className="home-main-nav-li"> <a href="#blogs" className="home-main-nav-a"> Blogs </a> </li>
             <li className="home-main-nav-li"> <a href="#contactme" className="home-main-nav-a"> Contact Me</a> </li>
           </ul>
         </nav>
       </div>
    </header>
    <video loop autoPlay muted style={{width:'100vw',height:'100vh',objectFit:'cover',top:'0',left:'0',position:'fixed'}}>
                  <source type="video/mp4" src={BackgroundVideo} />
     </video>
     {this.renderHome()}
     {this.renderAbout()}
     {this.renderProjects()}
     {this.renderBlogs()}
     {this.renderContactMe()}
     
       
     </div>
  )
 }
}

export default Home;