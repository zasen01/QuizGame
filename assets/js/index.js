var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      title:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
  ];

var i=0
var time =80
var score =0

document.getElementById("start").onclick =  function(){
    showQuestions();
    showTime()};

function showTime(){
    setInterval(function(){
        if(time>0){

            time --;
            document.getElementById('timer').innerHTML=`<h4>${time}</h4>`
        }
    }, 1000)
}


function showQuestions(){

    if(i<5){

        document.getElementById('questions').innerHTML=`
        <ul>
        <p>${questions[i].title}</p>
    
        <button>${questions[i].choices[0]}</button>
        <button>${questions[i].choices[1]}</button>
        <button>${questions[i].choices[2]}</button>
        <button>${questions[i].choices[3]}</button>
        </ul>`
    }

}

document.getElementById('questions').onclick= function(e){
    e.preventDefault();
    console.log(e.target.innerText);
    if(e.target.innerText === questions[i].answer){
        document.getElementById('check').innerHTML =`<h3>Correct</h3>`
    }else{
        document.getElementById('check').innerHTML =`<h3>Wrong</h3>`;
        time -=10
    }
score= time
document.getElementById('score').innerHTML=`<h3>${score}</h3>`
i++
showQuestions()

}