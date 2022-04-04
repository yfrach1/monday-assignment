import React,{useState} from 'react';
import './Demo.css'
import {Shuffle} from '../functions/Shuffle'
const Queastions = [
    {questionNumber:1, question: "What are Monday's colors?", correctAnswer:"green, red, yellow", 
    incorrectAnswer:["yellow, green, white" , "red, yellow, blue", "green, pink, yellow"]}

    ,{questionNumber:2, question: "What are Monday's colors?", correctAnswer:"green, red, yellow", 
    incorrectAnswer:["yellow, green, white" , "red, yellow, blue", "green, pink, yellow"]}

    ,{questionNumber:3, question: "What are Monday's colors?", correctAnswer:"green, red, yellow", 
    incorrectAnswer:["yellow, green, white" , "red, yellow, blue", "green, pink, yellow"]}
]


const Demo = (props) => {
    const [quesDis, setQuesDis] = useState(0)
    const indexes = [0,1,2,3]
    let showAnswer = [true,true,true,true];
    let display = Queastions[quesDis].incorrectAnswer.concat(Queastions[quesDis].correctAnswer)
    let correctAnswer = Queastions[quesDis].correctAnswer;
    Shuffle(display);

    const CutAnswersByHalf = () =>{
        // correctIndex =display.indexOf(correctAnswer);
        // let answersToCut = [...indexes];
        // answersToCut.splice(index, correctIndex);


    }

return(
<div style={{width:"100%", height:"100vh"}}>
    
    <div className='displayQueastion'>
    <button className='cutAnswersByHalf' onClick={CutAnswersByHalf}>50/50</button>
<div style={{marginBottom : "50px" , fontSize : "50px"}}>{Queastions[quesDis].question}</div>
    <div className='answerButton'>
        <div>{showAnswer[0]&&display[0]}</div>
        <div>{showAnswer[1]&&display[1]}</div>    
    </div>
    <div className='answerButton'>
        <div>{showAnswer[2]&&display[2]}</div>
        <div>{showAnswer[3]&&display[3]}</div>
    </div>
    </div>
</div>)

}


export default Demo