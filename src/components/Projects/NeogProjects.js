import { Component } from "react";
import './projects.css';


class NeogProjects extends Component{

    renderMark1=()=>{
        return(
            <div className="Project_Mark1">
            <div className="Project_Mark1_heading" style={{color:'white'}}> Mark1 </div>
            <div className="Project_Mark1_heading_content" style={{color:'white'}}> A CLI App - React Quiz</div>
            <div className="Project_Mark1_heading_content-buttonChip"> 
                <div style={{color:'white'}}> Nodejs </div> 
            </div>
            <div className="Project_Mark1_heading_content-button-Live">
                
                <button className="button-Live">
                    <a style={{color:'white'}} className="alink" target="_blank" rel="noreferrer" href='https://replit.com/@creatorspace/QuizMark1?embed=1&output=1#index.js'>
                    LIVE
                    </a>
                </button>
            
            </div>
            <div className="Project_Mark1_heading_content-button-ViewSourceCode">
              <button  className="button-SOURCE">
                <a className="link1" target="_blank" rel="noreferrer" href='https://github.com/chanchal-panpaliya/Quiz_Mark1'>
                    VIEW SOURCE
                </a>
              </button>
            </div>
        </div>
        )
    }

    renderMark2=()=>{
             return(
                <div className="Project_Mark2">
                <div className="Project_Mark1_heading" style={{color:'white'}}> Mark2 </div>
                    <div className="Project_Mark1_heading_content" style={{color:'white'}}> A Quiz - Country Quiz</div>
                    <div className="Project_Mark1_heading_content-buttonChip"> 
                        <div style={{color:'white'}}> Nodejs </div> 
                    </div>
                    <div className="Project_Mark1_heading_content-button-Live">
                        <button  className="button-Live">
                            <a style={{color:'white'}} className="alink" rel="noreferrer" target="_blank" href='https://replit.com/@creatorspace/QuizMark2?embed=1&output=1#index.js'>
                            LIVE
                            </a>
                            </button>
                    </div>
                    <div className="Project_Mark1_heading_content-button-ViewSourceCode">
                        <button   className="button-SOURCE">
                        <a className="link1" rel="noreferrer" target="_blank" href='https://github.com/chanchal-panpaliya/Quiz_Mark2'>
                            VIEW SOURCE 
                        </a>
                        </button>
                    </div>
                </div>
             )
    }

    renderMark6=()=>{
        return(
            <div className="Project_Mark3">
            <div className="Project_Mark1_heading"> Mark6 </div>
                 <div className="Project_Mark1_heading_content"> Minion Speak </div>
                 <div className="Project_Mark1_heading_content-buttonChip"> 
                  Vanilla-js
                 </div>
                 <div className="Project_Mark1_heading_content-button-Live">
                      <button  className="button-Live">
                        <a className="alink" rel="noreferrer" target="_blank" href="https://creatorspace-bananatalk.netlify.app/">
                            LIVE
                        </a>
                     </button>
                 </div>
                 <div className="Project_Mark1_heading_content-button-ViewSourceCode">
                     <button  className="button-SOURCE">
                        <a className="link1" rel="noreferrer" target="_blank" href="https://github.com/chanchal-panpaliya/Minion-Speak_Mark6">
                           VIEW SOURCE 
                        </a>
                     </button>
                 </div>
            </div>
        )
    }


    renderMark7=()=>{
        return(
            <div className="Project_Mark4">
            <div className="Project_Mark1_heading"> Mark7 </div>
                <div className="Project_Mark1_heading_content"> Fun Translation App </div>
                <div className="Project_Mark1_heading_content-buttonChip"> 
                  Vanilla-js
                </div>
                <div className="Project_Mark1_heading_content-button-Live">
                     <button  className="button-Live">
                        <a className="alink" rel="noreferrer" target="_blank" href="https://creatorspace-swedishchefspeak.netlify.app/">
                            LIVE
                        </a>
                     </button>
                </div>
                <div className="Project_Mark1_heading_content-button-ViewSourceCode">
                    <button   className="button-SOURCE">
                       <a className="link1" rel="noreferrer" target="_blank" href="https://github.com/chanchal-panpaliya/Fun_translation_app_Mark7">
                          VIEW SOURCE 
                       </a>
                    </button>
                </div>
            </div>
        )
    }

    renderMark8=()=>{
        return(
            <div className="Project_Mark5">
                  <div className="Project_Mark1_heading"> Mark8 </div>
                      <div className="Project_Mark1_heading_content"> Know Your Emotions </div>
                      <div className="Project_Mark1_heading_content-buttonChip"> 
                         Reactjs
                      </div>
                      <div className="Project_Mark1_heading_content-button-Live">
                           <button  className="button-Live">
                              <a className="alink" rel="noreferrer" target="_blank" href="https://creatorspace-knowyouremotions.netlify.app/">
                                 LIVE
                              </a>
                           </button>
                      </div>
                      <div className="Project_Mark1_heading_content-button-ViewSourceCode">
                          <button   className="button-SOURCE">
                            <a className="link1" rel="noreferrer" target="_blank" href="https://github.com/chanchal-panpaliya/Know_your_emotions_Mark08">
                                VIEW SOURCE 
                            </a>
                          </button>
                      </div>
                  </div>
        )
    }

    renderMark9=()=>{
        return(
            <div className="Project_Mark6">
            <div className="Project_Mark1_heading"> Mark9 </div>
                <div className="Project_Mark1_heading_content"> Bookmyticket</div>
                <div className="Project_Mark1_heading_content-buttonChip"> 
                   Reactjs
                </div>
                <div className="Project_Mark1_heading_content-button-Live">
                     <button  className="button-Live">
                        <a className="alink" rel="noreferrer" target="_blank" href="https://creatorspace-bookmyticket.netlify.app/">
                            LIVE
                        </a>
                      </button>
                </div>
                <div className="Project_Mark1_heading_content-button-ViewSourceCode">
                    <button   className="button-SOURCE"> 
                       <a className="link1" rel="noreferrer" target="_blank" href="https://github.com/chanchal-panpaliya/bookmyticket_Mark09">
                          VIEW SOURCE 
                       </a> 
                    </button>
                </div>
            </div>
        )
    }

    render(){
        return(
          <div className="flex-col">
              <section className="flex-row">
                   {this.renderMark1()}
                   {this.renderMark2()}
                   {this.renderMark6()}
                   {this.renderMark7()}
                   {this.renderMark8()}
                   {this.renderMark9()}
              </section>
          </div>
        )
    }
}

export default NeogProjects