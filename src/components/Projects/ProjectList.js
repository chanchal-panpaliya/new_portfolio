import { Component } from "react";
import './ProjectList.css';
import ComponentLib from '../../img/neogproject/port_solution_ground.png';
import Cheapkart from '../../img/neogproject/cheapkart.png';
import Note from '../../img/neogproject/note.png';
import Disney from '../../img/neogproject/disney-bluestar.png';
import cleaverGround from '../../img/neogproject/cleaverGround.png';
import Hello from '../../img/neogproject/hello.png';

const data = [
    {
        id:1,
        img:ComponentLib,
        name:"SolutionGround",
        desc:"The SolutionGround UI components library and responsive UI components in a single package.",
        liveLink:"https://solutionground.netlify.app/",
        GitLink:"https://github.com/chanchal-panpaliya/component-libraray"
    },
    {
        id:2,
        img:Cheapkart,
        name:"CheapKart",
        desc:"Cheapkart is an e-commerce shopping app for all categories.",
        liveLink:"https://cheapkart-plus.netlify.app/",
        GitLink:"https://github.com/chanchal-panpaliya/cheapKart"
    },
    {
        id:3,
        img:Note,
        name:"Dailyshort",
        desc:"DailyShort - A Note Taking App",
        liveLink:"https://dailyshort.netlify.app/",
        GitLink:"https://github.com/chanchal-panpaliya/Dailyshort"
    },
    {
        id:4,
        img:Disney,
        name:"Disney+BlueStar",
        desc:"Disney+BlueStar is a video library that contains movies, shows, songs, etc.",
        liveLink:"https://disney-bluestar.netlify.app/",
        GitLink:"https://github.com/chanchal-panpaliya/Disney-bluestar"
    },
    {
        id:5,
        img:cleaverGround,
        name:"CleverGround Quiz",
        desc:"CleverGround Quiz is a basic web development objective-type question for students to test their understanding.",
        liveLink:"https://cleverground.netlify.app/",
        GitLink:"https://github.com/chanchal-panpaliya/CleverGroundQuiz"
    },
    {
        id:6,
        img:Hello,
        name:"helloबोला",
        desc:"helloबोला is a social media platform for sharing and exploring new people around.",
        liveLink:"https://hello-bolla.netlify.app/",
        GitLink:"https://github.com/chanchal-panpaliya/hello-bolla"
    },
]

class ProjectList extends Component{
  render(){
    return(
        <div className="macro-project-container">
            
            {
                data.map((item,index)=>{
                    return(
                        <div className="macro-project-box" key={index}>
                        <div className="macro-project-image">
                            <img src={item.img} className="img-macro"/>
                        </div>
                        <div className="macro-project-content">
                            <h3> {item.name} </h3>
                            <div> {item.desc} </div>
                            <div className="button-flex">
                               <a target="_blank" rel="noreferrer" href={item.liveLink} >
                                   <button style={{color:"blueviolet"}}> Live </button>
                               </a>
                               <a target="_blank" rel="noreferrer" href={item.GitLink}>
                                   <button style={{color:"red"}}> Git </button>
                               </a>
                            </div>
                        </div>
                   </div>
                    )
                })
            }
        
        </div>
    )
  }
}

export default ProjectList