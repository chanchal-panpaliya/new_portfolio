import { Component } from "react";
import './About.css'
class About extends Component{
    render(){
        return(
          <div className="flex-center">
             <div className="card-box">
                  <h3> Achivement's </h3>
                  <ul>
                      <li> Consistent college topper during graduation and post-graduation. </li>
                      <li> Secured 1st rank in BCA  from DCPE HVPM College merit list 2014-2015. <a href="https://drive.google.com/file/d/1jiEFvoPpMmels5XmzWZrfK5I95gFRVn2/view?usp=sharing" target="_blank" className="Textlink"> link </a></li>
                      <li> Secured 10th rank in MCA from SP Pune University merit list 2017-2018.  <a href="https://iicmr.org/student/wall-fame" target="_blank" className="Textlink"> link </a></li>
                     <li> Represented HVPM College at Amravati university for dance competition (youth festival) in 2011 and 2012.</li>
                     <li> Represented as a cultural coordinator in IICMR College.</li>
                  </ul>
             </div>
             <div className="card-box">
                  <h3> Skill's </h3> 
                <div className="card-badge-container">
                    <div className="badge">
                        <i class="fa-brands fa-html5"></i>
                        <label> HTML5</label>
                    </div>

                    <div className="badge">
                        <i class="fa-brands fa-react"></i>
                        <label> ReactJs </label>
                    </div>

                    <div className="badge">
                        <i class="fa-brands fa-css3"></i>
                        <label> CSS </label>
                    </div>

                    <div className="badge">
                        <i class="fa-brands fa-js"></i>
                        <label> JavaScript </label>
                    </div>

                    <div className="badge">
                        <i class="fa-brands fa-js"></i>
                        <label> TypeSript </label>
                    </div>

                    <div className="badge">
                        <i class="fa-brands fa-js"></i>
                        <label> ReactRedux </label>
                    </div>

                </div>  
             </div>
             <div className="card-box">
                    <h3>Certification's</h3>
                    <ul>
                        <li> Salesforce Platform Developer I (SP17). <a href="https://drive.google.com/file/d/1ZtZTXUxWi7LS1CUYcvxBrnftqUxTljMB/view?usp=sharing" target="_blank" className="Textlink"> link </a> </li>
                        <li> Microsoft SQL Server 2012 Fundamental.  <a href="https://drive.google.com/file/d/1ih2qu8P62Udi3zeufKpr5MtT5Cs6rExu/view?usp=sharing" target="_blank" className="Textlink"> link </a> </li>
                    </ul>
                    <h3> Work Experience's </h3>
                    <ul>
                        <li> I worked with BuzzyBrains software (I) Pvt. Ltd. Pune as a Software trainee for 8 months on 'Reactjs' platform.  </li>
                        <li> I have completed  5 months Internship at Techknomatic Services Pvt. Ltd. Pune on ‘React.js’ platform. </li>
                    </ul>
             </div>
          </div>
        )
    }
}

export default About