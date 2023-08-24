const header = document.querySelector("header")
const li = document.querySelector("li");
const subMenu = document.querySelector("#subMenu")


function dropSubMenu(event){
    subMenu.classList.remove("off");
    subMenu.classList.add("submenustyle");
}

function removeSubMenu(){
    subMenu.classList.add("off");
    subMenu.classList.remove("submenustyle");
}

li.addEventListener("",dropSubMenu)
subMenu.addEventListener("mouseleave", removeSubMenu)

/*****************************************************/

const sideOnOff = document.querySelector("#sideOnOff")
const sideBar = document.querySelector("#sideBar")
let Off = false

function offSideBar(){

    if( Off == false){
        
        sideBar.style.display = "none"
        Off = true
    } else {
        sideBar.style.display ="flex"
        Off = false
    }
    
}

sideOnOff.addEventListener("click",offSideBar)

/*****************************************************/

const tutorChat = document.querySelector("#sideBar form")
const tutorInput = document.querySelector("#sideBar input")
const dialog = document.querySelector("#dialog")

function addingText(event){
    event.preventDefault();
    const span = document.createElement("span")
    span.innerText = event.target.value;
    dialog.appendChild(span);
    tutorInput.value="";
}

tutorInput.addEventListener("change",addingText)

/*****************************************************/

const dropdownbutton = document.querySelector("#dropdownbutton")
const dropdownbutton02 = document.querySelector("#dropdownbutton02")
const weeklyInfo = document.querySelector("#weeklyInfo")
const weeklyInfo02 = document.querySelector("#weeklyInfo02")

function dropdown(){
    weeklyInfo.classList.toggle("weeklyInfo");
}

function dropdown02(){
    weeklyInfo02.classList.toggle("weeklyInfo");
}

dropdownbutton.addEventListener("click",dropdown)
dropdownbutton02.addEventListener("click",dropdown02)

/*****************************************************/

const studyGoButton = document.querySelector("#studyGoButton")
const popup = document.querySelector(".popup")

function bringPopUp(){
    popup.style.display = "block"
    layerContainer.style.display = "flex"
}

studyGoButton.addEventListener("click",bringPopUp)

const closePopUp = document.querySelector("#closePopUp")
const layerContainer = document.querySelector(".layerContainer")

function closePopUpLayer(){

    layerContainer.style.display = "none"
    popup.style.display = "none"
}

closePopUp.addEventListener("click",closePopUpLayer)

/*****************************************************/

const socialSchemaTest = document.querySelector("#socialSchemaTest")
const mainpop = document.querySelector("#mainpop")
const wrap = document.querySelector("#wrap")
const test = document.querySelector("#test")
const backPage = document.querySelector("#backPage")

function openSchemaSocial(){
    wrap.style.display = "none"
    test.style.display = "block"
}

function backSchemaSocial(){
    wrap.style.display = "block"
    test.style.display = "none"
    learn.style.display = "none"
}

socialSchemaTest.addEventListener("click",openSchemaSocial)
backPage.addEventListener("click",backSchemaSocial)

/*****************************************************/

const btnNextArticle = document.querySelector("#btnNextArticle")


const socialSchemaLearn = document.querySelector("#socialSchemaLearn")
const learn = document.querySelector("#learn")

function openLearnPopup(){
    wrap.style.display = "none"
    learn.style.display = "flex"
}

socialSchemaLearn.addEventListener("click",openLearnPopup)