
//Array to hold Questions and Answers for Quiz
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

//Main variables for keeping Score time and current question
var highScores = JSON.parse(localStorage.getItem('highScores'))||[]
var i=0
var time =40
var score =0

//Fuction to start the quiz once start button is clicked
document.getElementById("start").onclick =  function(){
    document.querySelector('.main-start').innerHTML= " "
    showQuestions();
    showTime()};

    //fuction for timer to count down to 0
function showTime(){
    setInterval(function(){
        if(time>0){

            time --;
            document.getElementById('timer').innerHTML=`<h4>Time: ${time}</h4>`
        }
    }, 1000)
}

//funtionality to show questions by cycling though the array that holds them
function showQuestions(){
    var questionDiv = document.getElementById("questions");

    if(i<5 && time >0){

        questionDiv.innerHTML=`
        <ul>
        <p>${questions[i].title}</p>
    
        <button>${questions[i].choices[0]}</button><br>
        <button>${questions[i].choices[1]}</button><br>
        <button>${questions[i].choices[2]}</button><br>
        <button>${questions[i].choices[3]}</button>
        </ul>`
    }else{
      questionDiv.innerHTML = ""

      endGame()
    }
}
//Functionality for end of game to submit score and name
function endGame(){

  var inputLabel = document.createElement('label');
  inputLabel.setAttribute('name', 'Initials');
  inputLabel.textContent = "Name: ";

  var inputBox = document.createElement('input');
  inputBox.setAttribute('type','text')

  var inputButton = document.createElement('button');
  inputButton.textContent = "Submit";
  inputButton.onclick = function(){
    var name = inputBox.value ;
    var scoreObject = {score:time , name:name}
    highScores.push(scoreObject)
    localStorage.setItem('highScores', JSON.stringify(highScores));
  }

  //Score Functionality: Prevents Negitive Score
  if(time<0){
    time = 0;
  }

  score = time
  document.getElementById('score').innerHTML=`<h3>Current Score: ${score}</h3>`
  document.querySelector('.main-end').append(inputLabel,inputBox, inputButton)
}

//adds questions to the screen and checks the answers 
document.getElementById('questions').onclick= function(e){
    e.preventDefault();
    console.log(e.target.innerText);
    if(e.target.innerText === questions[i].answer){
        document.getElementById('check').innerHTML =`<h3>Correct</h3>`

        setTimeout(function(){
          document.getElementById('check').innerHTML = " "
        } ,750)
    }else{
        document.getElementById('check').innerHTML =`<h3>Wrong</h3>`;
        time -=10

        setTimeout(function(){
          document.getElementById('check').innerHTML = " "
        } ,750)
    }

i++
showQuestions()

}

