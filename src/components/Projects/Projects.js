import { Component } from "react";
import './projects.css';




class Projects extends Component{

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

    renderMark10 = () =>{
        return(

            <div className="Project_Mark7">
            <div className="Project_Mark1_heading"> Mark10 </div>
                <div className="Project_Mark1_heading_content"> Cash Register </div>
                <div className="Project_Mark1_heading_content-buttonChip"> 
                   Reactjs
                </div>
                <div className="Project_Mark1_heading_content-button-Live">
                     <button  className="button-Live">
                        <a className="alink" rel="noreferrer" target="_blank" href="https://creatorspace-cashregister.netlify.app/">
                             LIVE
                        </a>
                     </button>
                </div>
                <div className="Project_Mark1_heading_content-button-ViewSourceCode">
                    <button   className="button-SOURCE">
                       <a className="link1" rel="noreferrer" target="_blank" href="https://github.com/chanchal-panpaliya/cash_register_Mark10">
                          VIEW SOURCE 
                       </a>
                    </button>
                </div>
            </div>
        )
    }

    renderMark11=()=>{
        return(
            <div className="Project_Mark8">
            <div className="Project_Mark1_heading"> Mark11 </div>
                <div className="Project_Mark1_heading_content"> Birthdate - lucky or Not </div>
                <div className="Project_Mark1_heading_content-buttonChip"> 
                   Reactjs
                </div>
                <div className="Project_Mark1_heading_content-button-Live">
                     <button  className="button-Live">
                        <a className="alink" rel="noreferrer" target="_blank" href="https://creatorspace-birthdaylucky.netlify.app/">
                           LIVE
                        </a>
                    </button>
                </div>
                <div className="Project_Mark1_heading_content-button-ViewSourceCode">
                    <button   className="button-SOURCE"> 
                       <a className="link1" rel="noreferrer" target="_blank" href="https://github.com/chanchal-panpaliya/birthdates_lucky_Mark11">
                          VIEW SOURCE 
                       </a>
                    </button>
                </div>
            </div>
        )
    }

    renderMark12=()=>{
        return(
            <div className="Project_Mark9">
            <div className="Project_Mark1_heading"> Mark12 </div>
              <div className="Project_Mark1_heading_content"> Fun With Triangles </div>
              <div className="Project_Mark1_heading_content-buttonChip"> 
                 Reactjs
              </div>
              <div className="Project_Mark1_heading_content-button-Live">
                   <button  className="button-Live">
                      <a className="alink" rel="noreferrer" target="_blank" href="https://creatorspace-funwithtriangles.netlify.app/">
                         LIVE
                      </a>
                   </button>
              </div>
              <div className="Project_Mark1_heading_content-button-ViewSourceCode">
                  <button   className="button-SOURCE">
                     <a className="link1" rel="noreferrer" target="_blank" href="https://github.com/chanchal-panpaliya/fun_with_triangles_Mark12">
                        VIEW SOURCE 
                     </a>
                  </button>
              </div>
            </div>
        )
    }

    renderMark13=()=>{
        return(
            <div className="Project_Mark10">
            <div className="Project_Mark1_heading"> Mark13 </div>
              <div className="Project_Mark1_heading_content"> DOB are palindrome </div>
              <div className="Project_Mark1_heading_content-buttonChip"> 
                  Reactjs
              </div>
              <div className="Project_Mark1_heading_content-button-Live">
                   <button  className="button-Live">
                      <a className="alink" rel="noreferrer" target="_blank" href="https://creatorspace-birthdaypalindrome.netlify.app/">
                          LIVE
                      </a>
                  </button>
              </div>
              <div className="Project_Mark1_heading_content-button-ViewSourceCode">
                  <button   className="button-SOURCE">
                     <a className="link1" rel="noreferrer" target="_blank" href="https://github.com/chanchal-panpaliya/birthdates_palindrome_Mark13">
                        VIEW SOURCE 
                     </a>
                  </button>
              </div>
            </div>
        )
    }

    renderMark14=()=>{
        return(
            <div className="Project_Mark11">
            <div className="Project_Mark1_heading"> Mark14 </div>
                 <div className="Project_Mark1_heading_content"> Profit or Loss </div>
                 <div className="Project_Mark1_heading_content-buttonChip"> 
                    Reactjs
                 </div>
                 <div className="Project_Mark1_heading_content-button-Live">
                      <button  className="button-Live">
                        <a className="alink" rel="noreferrer" target="_blank" href="https://creatorspace-stockprofitandloss.netlify.app/">
                            LIVE
                        </a>
                      </button>
                 </div>
                 <div className="Project_Mark1_heading_content-button-ViewSourceCode">
                     <button   className="button-SOURCE">
                        <a className="link1" rel="noreferrer" target="_blank" href="https://github.com/chanchal-panpaliya/stock_profit_loss_Mark14">
                           VIEW SOURCE 
                        </a>
                     </button>
                 </div>
            </div>
        )
    }

    renderMark15=()=>{
        return(
            <div className="Project_Mark12">
            <div className="Project_Mark1_heading"> Mark15 </div>
                <div className="Project_Mark1_heading_content"> Blogs </div>
                <div className="Project_Mark1_heading_content-buttonChip"> 
                  
                </div>
                <div className="Project_Mark1_heading_content-button-Live">
                </div>
                <div className="Project_Mark1_heading_content-button-ViewSourceCode">
                    <button  className="button-SOURCE">
                       <a className="link1" href="#blogs">
                          BLOG 
                        </a>
                   
                    </button>
                </div>
            </div>
        )
    }

    render(){
        return(
          <div>
               <table>
                   <tbody>
                       <tr>

                           <td>
                               {this.renderMark1()}
                           </td>

                           <td>
                             {this.renderMark2()}
                           </td>
                           <td>
                               {this.renderMark6()}
                           </td>

                           <td>
                             {this.renderMark7()}
                           </td>
                           <td>
                               {this.renderMark8()}
                           </td>

                           <td>
                             {this.renderMark9()}
                           </td>


                       </tr>
                       <tr>
                       <td>
                               {this.renderMark10()}
                           </td>

                           <td>
                             {this.renderMark11()}
                           </td>
                           <td>
                               {this.renderMark12()}
                           </td>

                           <td>
                             {this.renderMark13()}
                           </td>
                           <td>
                               {this.renderMark14()}
                           </td>

                           <td>
                             {this.renderMark15()}
                           </td>

                       </tr>
                   </tbody>
               </table>
          </div>
        )
    }
}

export default Projects