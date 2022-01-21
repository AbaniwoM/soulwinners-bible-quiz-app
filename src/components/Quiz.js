import {useContext} from "react";
import {QuizContext} from "../contexts/quiz";
import Question from "./Question";
import { GiDove } from "react-icons/gi";
import { ImTwitter, ImFacebook, ImWhatsapp } from "react-icons/im";
import { BsInstagram, BsYoutube } from "react-icons/bs";

const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    console.log("quizState", quizState);
    return (
    <div className="quiz">
            
        {quizState.showResults && (
                <div className="results">
                    <div>
                    <div class="box">
                        <div class="tree tree1"></div>
                        <div class="tree tree2"></div>
                        <div class="tree tree3"></div>
                        <div class="snow"></div>
                    </div>
                    </div>
                <div className="congratulations">Congratulations!</div>
                <div className="results-info">
                    <div>You have completed the quiz.</div>
                    <div className="got">You've got {quizState.correctAnswerCount} of {quizState.questions.length} right.</div>
                    <div className="restart-button" onClick={() => dispatch({ type: "RESTART" })}>Restart</div>
                </div>
            </div>
        )}
        {!quizState.showResults && (
            <div className="container">
            <div className="cover">
            <div className="overlay"></div>
            <div className="header">
                <div className="dove">
                    <GiDove />
                </div>
                <h1>THE SOUL WINNERS BIBLE QUIZ APP</h1>
            </div>
            <div className="score">
            Question {quizState.currentQuestionIndex + 1}/{quizState.questions.length}
            </div> 
            <Question />
            <div className="next-button" onClick={() => dispatch({ type: "NEXT_QUESTION" })}>Next Question</div>
            <div className="social-icons">
                    <div className="social"><a href="https://web.facebook.com/dsoulwinners"><ImFacebook /></a></div>
                    <div className="social"><a href="https://www.youtube.com/channel/UCC8rsiKPmRINhEdz4FRYRkw"><BsYoutube /></a></div>
                    <div className="social"><a href="https://www.instagram.com/thesoulwinners/"><BsInstagram /></a></div>
                    <div className="social"><a href="https://mobile.twitter.com/_thesoulwinners"><ImTwitter /></a></div>
                    <div className="social"><a href="https://chat.whatsapp.com/DNGOnLvPmkNG6mFfof1Y7B"><ImWhatsapp /></a></div>
            </div>
            <div className="copy-right">
               <h4>&copy; 2021</h4>
               <h3>The SOUL Winners. All Rights Reserved. Designed and Implemented by <a href="https://mobile.twitter.com/_codedr">@_codedr</a></h3>
            </div>
            </div>
            </div>
        )}
    </div>
    )
};

export default Quiz;