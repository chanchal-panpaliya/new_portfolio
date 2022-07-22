import './Blogs.css';
import { Component } from "react";

class Blogs extends Component{
   render(){
    return(
        <div>
            <div className="card-box padding-blog">
                  <h3> Blog 1 : 
                    <a className="Textlink margin-blog" href="https://medium.com/@chanchal.panpaliya/multiple-choice-quiz-app-using-material-ui-and-react-js-11a65a5cccc9" target="_blank" rel="noreferrer" alt="blog1" > 
                        Multiple Choice Quiz App Using Material-UI and React JS
                    </a>
                  </h3>
             </div>

             <div className="card-box padding-blog">
                  <h3> Blog 2 :
                    <a className="Textlink margin-blog" href="https://medium.com/@chanchal.panpaliya/costumes-of-our-cultured-classical-dances-of-india-871822697cb4" target="_blank" rel="noreferrer" alt="blog1" > 
                        Costumes of Our Cultured Classical Dances of India
                    </a>
                  </h3>
             </div>
             <div className="card-box padding-blog">
                  <h3> Blog 3 : 
                    <a className="Textlink margin-blog" href="https://chanchal.hashnode.dev/card-slider-component-how-to-build-an-card-slider-with-react-hooks" target="_blank" rel="noreferrer" alt="blog1" > 
                          Card Slider Component : How to Build an Card Slider With React Hooks
                    </a>
                  </h3>
             </div>
             <div className="card-box padding-blog">
             <h3> Blog 4 : 
                    <a className="Textlink margin-blog" href="https://chanchal.hashnode.dev/countdown-timer-using-react-hooks" target="_blank" rel="noreferrer" alt="blog1" > 
                       Countdown timer using React hooks
                    </a>
                  </h3>
             </div>
        </div>
    )
   }
}

export default Blogs