

const sideOnOff = document.querySelector("#sideOnOff")
const sideBar = document.querySelector("#sideBar")
const middleArea = document.querySelector("#middleArea")
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
    testResult.style.display = "none"
}

socialSchemaTest.addEventListener("click",openSchemaSocial)
backPage.addEventListener("click",backSchemaSocial)

/*****************************************************/

const socialSchemaLearn = document.querySelector("#socialSchemaLearn")
const learn = document.querySelector("#learn")

function openLearnPopup(){
    wrap.style.display = "none"
    learn.style.display = "flex"
}

socialSchemaLearn.addEventListener("click",openLearnPopup)

/*****************************************************/

const btnNextArticle = document.querySelector("#btnNextArticle")
const testResult =document.querySelector("#testResult")

function resultPop(){
    test.style.display ="none"
    testResult.style.display = "block"
}

btnNextArticle.addEventListener("click",resultPop)

/*****************************************************/

const dropdownBtn = document.querySelector("#dropdown")

function dropdownfunction(event){
    voca.classList.toggle("menuWrap")
}

dropdownBtn.addEventListener("click",dropdownfunction)


const lectureVid = document.querySelector("#lectureVid")
const schemaQuiz = document.querySelector("#schemaQuiz")
const incorrectLecture = document.querySelector("#incorrectLecture")
const schema = document.querySelector("#schema")

function goLectureVid(){
    schemaQuiz.style.display = "none"
    incorrectLecture.style.display = "flex"
    lectureVid.classList.add("blue") 
    schema.classList.remove("blue")
}

function goschema(){
    incorrectLecture.style.display = "none"
    lectureVid.classList.remove("blue")
    schema.classList.add("blue")
    schemaQuiz.style.display = "flex"

}

lectureVid.addEventListener("click",goLectureVid)
schema.addEventListener("click",goschema)