let score=0
let current=0

let questions=[

{
q:"1. What is the probability that both balls are red?",
c:["1/3","2/9","5/18","4/15"],
a:"2/9"
},

{
q:"2. What is the probability the first ball is blue then green?",
c:["1/10","1/15","1/5","2/15"],
a:"1/15"
},

{
q:"3. What is the probability at least one ball is green?",
c:["17/45","1/5","2/9","1/3"],
a:"17/45"
},

{
q:"4. If the first ball is red, probability second red?",
c:["4/9","1/2","2/5","5/9"],
a:"4/9"
},

{
q:"5. Which is more likely?",
c:[
"Two red balls",
"One blue and one green",
"Two green balls",
"All equal"
],
a:"Two red balls"
}

]


function startGame(){

let name=document.getElementById("playerName").value

if(name==""){
alert("Enter your name")
return
}

document.getElementById("startScreen").classList.add("hidden")
document.getElementById("instructions").classList.remove("hidden")

}


function startLevel1(){

document.getElementById("instructions").classList.add("hidden")
document.getElementById("level1").classList.remove("hidden")

showQuestion()

}


function showQuestion(){

let q=questions[current]

document.getElementById("question").innerText=q.q

let box=document.getElementById("choices")

box.innerHTML=""

q.c.forEach(choice=>{

let btn=document.createElement("button")

btn.innerText=choice

btn.onclick=()=>checkAnswer(choice)

box.appendChild(btn)

})

}


function checkAnswer(choice){

if(choice==questions[current].a){
score++
}

current++

if(current<questions.length){

showQuestion()

}else{

document.getElementById("level1").classList.add("hidden")
document.getElementById("level2").classList.remove("hidden")

}

}


function checkLogic(){

let ana=document.getElementById("ana").value
let ben=document.getElementById("ben").value
let cara=document.getElementById("cara").value

if(

ana=="Teacher" &&
ben=="Engineer" &&
cara=="Doctor"

){

score++

}

document.getElementById("level2").classList.add("hidden")

document.getElementById("endScreen").classList.remove("hidden")

document.getElementById("finalScore").innerText=
"Your Score: "+score+" / 6"

}
