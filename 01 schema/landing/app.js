const answerInput = document.querySelector(".answerInput")
const showAnswer = document.querySelector("#showAnswer")
const theAnswer =document.querySelector("#theAnswer")

function showingAnswer(){
   
    theAnswer.style.display ="flex"

}

showAnswer.addEventListener("click", showingAnswer)



const mobileMenu = document.querySelector(".mobileMenu")
const menu = document.querySelector("#menu")

function showMobileMenu (){

    if (matchMedia("screen and (max-width: 500px)").matches){
        menu.classList.add("on")
    } 
}

mobileMenu.addEventListener("click",showMobileMenu)


const mobileCloseBtn = document.querySelector("#mobileCloseBtn")
const home = document.querySelector("#home")
const levelTest = document.querySelector("#levelTest")
const customer = document.querySelector("#customer")
const myPage = document.querySelector("#myPage")


function closeMobileMenu(){
    if (matchMedia("screen and (max-width: 500px)").matches){
    menu.classList.remove("on")
    }
}

mobileCloseBtn.addEventListener("click",closeMobileMenu)

home.addEventListener("click",closeMobileMenu)
levelTest.addEventListener("click",closeMobileMenu)
customer.addEventListener("click",closeMobileMenu)
myPage.addEventListener("click",closeMobileMenu)


const freeleveltest = document.querySelector(".freeleveltest")
const goleveltest = document.querySelector("#goleveltest")

function showAlert(event){
    window.alert('레벨테스트는 회원 가입 후 응시할 수 있습니다.');
    window.open('https://schemareading.com/login/');
}



freeleveltest.addEventListener("click",showAlert);
