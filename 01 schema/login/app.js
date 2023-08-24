const loginBtn = document.querySelector("#loginBtn")

function enterLogIn(){
    location.href="../todayLearn/index.html"
}

loginBtn.addEventListener("click",enterLogIn)


const logInKeep = document.querySelector("#logInKeep")

function fxkeeplogin(){
    logInKeep.classList.toggle("colored")
}

logInKeep.addEventListener("click",fxkeeplogin)