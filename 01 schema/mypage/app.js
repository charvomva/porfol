
const sideOnOff = document.querySelector("#sideOnOff")
const sideBar = document.querySelector("#sideBar")
const middleArea = document.querySelector("#middleArea")
let Off = false

function offSideBar(){

    if( Off == false){
        sideBar.style.display = "none"
        middleArea.style.width = "100%"
        Off = true
    } else {
        sideBar.style.display ="flex"
        middleArea.style.width = "67%"
        Off = false
    }
}

sideOnOff.addEventListener("click",offSideBar)

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
    final.style.display ="none"
    finalResult.style.display ="none"
    titlestyle.style.display ="none"
    tagLearn.style.display ="none" 
    tagSecondTest.style.display ="none"
}

socialSchemaTest.addEventListener("click",openSchemaSocial)
backPage.addEventListener("click",backSchemaSocial)

/*****************************************************/

const socialSchemaLearn = document.querySelector("#socialSchemaLearn")
const learn = document.querySelector("#learn")
const tagLearn = document.querySelector("#tagLearn")
const vocaQuiz = document.querySelector("#vocaQuiz")
const menucontainer = document.querySelector(".menucontainer")
const concept = document.querySelector("#concept")
const conceptLecture = document.querySelector("#conceptLecture")
const lectureVid = document.querySelector("#lectureVid")
const schemaQuiz = document.querySelector("#schemaQuiz")
const incorrectLecture = document.querySelector("#incorrectLecture")
const schema = document.querySelector("#schema")
const voca = document.querySelector("#voca")
const Paragraph = document.querySelector("#Paragraph")
const paragraphQuiz = document.querySelector("#paragraphQuiz")
const analysis = document.querySelector("#analysis")
const answerAnalysis = document.querySelector("#answerAnalysis")
const logicLecVid = document.querySelector("#logicLecVid")
const logicLectureVid = document.querySelector("#logicLectureVid")
const deep = document.querySelector("#deep")
const deepProblem = document.querySelector("#deepProblem")

function openLearnPopup(){
    wrap.style.display = "none"
    tagLearn.style.display = "block"
    learn.style.display = "flex"
    vocaQuiz.style.display ="flex" 
}

socialSchemaLearn.addEventListener("click",openLearnPopup)

function goVocaPage(){
    vocaQuiz.style.display = "flex"
    schemaQuiz.style.display = "none"
    incorrectLecture.style.display = "none"
    conceptLecture.style.display ="none"
    paragraphQuiz.style.display = "none" 
    answerAnalysis.style.display ="none"
    logicLectureVid.style.display = "none"

    voca.classList.add("blue") 
    lectureVid.classList.remove("blue")
    schema.classList.remove("blue")
    concept.classList.remove("blue")
    Paragraph.classList.remove("blue")
    analysis.classList.remove("blue")
    logicLecVid.classList.remove("blue")
    }

voca.addEventListener("click",goVocaPage )

function goConceptLecture(){
    vocaQuiz.style.display ="none" 
    conceptLecture.style.display ="flex"
    incorrectLecture.style.display = "none"
    schemaQuiz.style.display = "none"
    paragraphQuiz.style.display = "none" 
    answerAnalysis.style.display ="none"
    logicLectureVid.style.display = "none"

    concept.classList.add("blue")
    voca.classList.remove("blue") 
    lectureVid.classList.remove("blue") 
    schema.classList.remove("blue")
    Paragraph.classList.remove("blue")
    analysis.classList.remove("blue")
    logicLecVid.classList.remove("blue")
}

concept.addEventListener("click",goConceptLecture)

function goparagraphQuiz(){
    vocaQuiz.style.display ="none" 
    conceptLecture.style.display ="none"
    incorrectLecture.style.display = "none"
    schemaQuiz.style.display = "none"
    answerAnalysis.style.display ="none"
    logicLectureVid.style.display = "none"
    paragraphQuiz.style.display = "flex" 

    Paragraph.classList.add("blue")
    concept.classList.remove("blue")
    voca.classList.remove("blue") 
    lectureVid.classList.remove("blue") 
    schema.classList.remove("blue")
    analysis.classList.remove("blue")
    logicLecVid.classList.remove("blue")
}

Paragraph.addEventListener("click",goparagraphQuiz)

function goAnswerAnalisys(){
    vocaQuiz.style.display ="none" 
    conceptLecture.style.display = "none"
    incorrectLecture.style.display = "none"
    schemaQuiz.style.display = "none"
    paragraphQuiz.style.display = "none"
    logicLectureVid.style.display = "none"
    answerAnalysis.style.display = "flex"

    analysis.classList.add("blue")
    lectureVid.classList.remove("blue")
    schema.classList.remove("blue")
    voca.classList.remove("blue") 
    concept.classList.remove("blue")
    lectureVid.classList.remove("blue")
    Paragraph.classList.remove("blue")
    logicLecVid.classList.remove("blue") 
}

analysis.addEventListener("click",goAnswerAnalisys)

function goschema(){
    incorrectLecture.style.display = "none"
    schemaQuiz.style.display = "flex"
    vocaQuiz.style.display ="none"
    conceptLecture.style.display ="none"
    paragraphQuiz.style.display = "none"
    answerAnalysis.style.display ="none" 
    logicLectureVid.style.display = "none"

    schema.classList.add("blue")
    voca.classList.remove("blue") 
    concept.classList.remove("blue")
    lectureVid.classList.remove("blue")
    Paragraph.classList.remove("blue")
    analysis.classList.remove("blue")
    logicLecVid.classList.remove("blue")
}

schema.addEventListener("click",goschema)

function goLectureVid(){
    schemaQuiz.style.display = "none"
    incorrectLecture.style.display = "flex"
    conceptLecture.style.display ="none"
    vocaQuiz.style.display = "none"
    paragraphQuiz.style.display = "none"
    answerAnalysis.style.display ="none" 
    logicLectureVid.style.display = "none"

    lectureVid.classList.add("blue") 
    schema.classList.remove("blue")
    voca.classList.remove("blue") 
    concept.classList.remove("blue")
    Paragraph.classList.remove("blue")
    analysis.classList.remove("blue")
    logicLecVid.classList.remove("blue")
}

lectureVid.addEventListener("click",goLectureVid)

function goLogicLecture(){
    schemaQuiz.style.display = "none"
    incorrectLecture.style.display = "none"
    conceptLecture.style.display ="none"
    vocaQuiz.style.display = "none"
    paragraphQuiz.style.display = "none"
    answerAnalysis.style.display ="none"
    logicLectureVid.style.display ="flex"

    logicLecVid.classList.add("blue")
    lectureVid.classList.remove("blue") 
    schema.classList.remove("blue")
    voca.classList.remove("blue") 
    concept.classList.remove("blue")
    Paragraph.classList.remove("blue")
    analysis.classList.remove("blue")
}

logicLecVid.addEventListener("click",goLogicLecture )

function goDeepProblem(){
    schemaQuiz.style.display = "none"
    incorrectLecture.style.display = "none"
    conceptLecture.style.display ="none"
    vocaQuiz.style.display = "none"
    paragraphQuiz.style.display = "none"
    answerAnalysis.style.display ="none"
    logicLectureVid.style.display ="none"
    deepProblem.style.display = "flex"

    logicLecVid.classList.remove("blue")
    lectureVid.classList.remove("blue") 
    schema.classList.remove("blue")
    voca.classList.remove("blue") 
    concept.classList.remove("blue")
    Paragraph.classList.remove("blue")
    analysis.classList.remove("blue")
    deep.classList.add("blue")
}

deep.addEventListener("click",goDeepProblem)


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
    
/***********************************************/

const finalTest = document.querySelector("#finalTest")
const final = document.querySelector("#final")
const tagSecondTest = document.querySelector("#tagSecondTest")

function gofinalTest(){
    wrap.style.display = "none"
    final.style.display ="block"
    tagSecondTest.style.display ="block"
}

finalTest.addEventListener("click",gofinalTest)

/***********************************************/

const showResult = document.querySelector("#showResult")
const finalResult = document.querySelector("#finalResult")

function goFinalResult(){
    final.style.display ="none"
    finalResult.style.display ="block"
}

showResult.addEventListener("click",goFinalResult)

const stateContainer =document.querySelector("#stateContainer")
const titlestyle = document.querySelector(".titlestyle")


function addingState(){
    titlestyle.style.display ="block"
}

socialSchemaTest.addEventListener("click",addingState)
