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


const popup = document.querySelector(".popup")


const closePopUp = document.querySelector("#closePopUp")
const layerContainer = document.querySelector(".layerContainer")

function closePopUpLayer(){

    layerContainer.style.display = "none"
    popup.style.display = "none"
    mainpop.style.display ="none"
    test.style.display = "none"
    testResult.style.display = "none"
    learn.style.display = "none"
    final.style.display = "none"
    finalResult.style.display = "none"

    tagLearn.style.display ="none" 
    titleTest.style.display ="none"
    titleSocail.style.display ="none"
    tagSecondTest.style.display ="none"
    
    conceptLecture.style.display = "none"
    schemaQuiz.style.display = "none"
    paragraphQuiz.style.display = "none"
    incorrectLecture.style.display = "none"
    answerAnalysis.style.display = "none"
    logicLectureVid.style.display = "none"
    deepProblem.style.display = "none"

    concept.classList.remove("blue")
    voca.classList.remove("blue") 
    lectureVid.classList.remove("blue") 
    schema.classList.remove("blue")
    Paragraph.classList.remove("blue")
    analysis.classList.remove("blue")
    logicLecVid.classList.remove("blue")
    deep.classList.remove("blue")
}

closePopUp.addEventListener("click",closePopUpLayer)

/*****************************************************/

const socialSchemaTest = document.querySelector("#socialSchemaTest")
const mainpop = document.querySelector("#mainpop")
const wrap = document.querySelector("#wrap")
const test = document.querySelector("#test")
const backPage = document.querySelector("#backPage")


function openSchemaSocial(){
    popup.style.display ="block"
    mainpop.style.display ="flex"
    test.style.display = "block"
}

function backSchemaSocial(){

    popup.style.display ="none"
    test.style.display = "none"
    learn.style.display = "none"
    testResult.style.display = "none"
    final.style.display ="none"
    finalResult.style.display ="none"
    tagLearn.style.display ="none" 
    tagSecondTest.style.display ="none"
}

socialSchemaTest.addEventListener("click",openSchemaSocial)


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
    popup.style.display = "block"
    mainpop.style.display ="flex"
    learn.style.display = "flex"
    vocaQuiz.style.display ="flex" 
    tagLearn.style.display ="flex" 
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
    deepProblem.style.display = "none"

    voca.classList.add("blue") 
    lectureVid.classList.remove("blue")
    schema.classList.remove("blue")
    concept.classList.remove("blue")
    Paragraph.classList.remove("blue")
    analysis.classList.remove("blue")
    logicLecVid.classList.remove("blue")
    deep.classList.remove("blue")
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
    deepProblem.style.display = "none"

    concept.classList.add("blue")
    voca.classList.remove("blue") 
    lectureVid.classList.remove("blue") 
    schema.classList.remove("blue")
    Paragraph.classList.remove("blue")
    analysis.classList.remove("blue")
    logicLecVid.classList.remove("blue")
    deep.classList.remove("blue")
}

concept.addEventListener("click",goConceptLecture)

function goparagraphQuiz(){
    vocaQuiz.style.display ="none" 
    conceptLecture.style.display ="none"
    incorrectLecture.style.display = "none"
    schemaQuiz.style.display = "none"
    answerAnalysis.style.display ="none"
    logicLectureVid.style.display = "none"
    deepProblem.style.display = "none"
    paragraphQuiz.style.display = "flex" 

    Paragraph.classList.add("blue")
    concept.classList.remove("blue")
    voca.classList.remove("blue") 
    lectureVid.classList.remove("blue") 
    schema.classList.remove("blue")
    analysis.classList.remove("blue")
    logicLecVid.classList.remove("blue")
    deep.classList.remove("blue")
}

Paragraph.addEventListener("click",goparagraphQuiz)

function goAnswerAnalisys(){
    vocaQuiz.style.display ="none" 
    conceptLecture.style.display = "none"
    incorrectLecture.style.display = "none"
    schemaQuiz.style.display = "none"
    paragraphQuiz.style.display = "none"
    logicLectureVid.style.display = "none"
    deepProblem.style.display = "none"
    answerAnalysis.style.display = "flex"

    analysis.classList.add("blue")
    lectureVid.classList.remove("blue")
    schema.classList.remove("blue")
    voca.classList.remove("blue") 
    concept.classList.remove("blue")
    lectureVid.classList.remove("blue")
    Paragraph.classList.remove("blue")
    logicLecVid.classList.remove("blue") 
    deep.classList.remove("blue")
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
    deepProblem.style.display = "none"

    schema.classList.add("blue")
    voca.classList.remove("blue") 
    concept.classList.remove("blue")
    lectureVid.classList.remove("blue")
    Paragraph.classList.remove("blue")
    analysis.classList.remove("blue")
    logicLecVid.classList.remove("blue")
    deep.classList.remove("blue")
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
    deepProblem.style.display = "none"

    lectureVid.classList.add("blue") 
    schema.classList.remove("blue")
    voca.classList.remove("blue") 
    concept.classList.remove("blue")
    Paragraph.classList.remove("blue")
    analysis.classList.remove("blue")
    logicLecVid.classList.remove("blue")
    deep.classList.remove("blue")
}

lectureVid.addEventListener("click",goLectureVid)

function goLogicLecture(){
    schemaQuiz.style.display = "none"
    incorrectLecture.style.display = "none"
    conceptLecture.style.display ="none"
    vocaQuiz.style.display = "none"
    paragraphQuiz.style.display = "none"
    answerAnalysis.style.display ="none"
    deepProblem.style.display = "none"
    logicLectureVid.style.display ="flex"

    logicLecVid.classList.add("blue")
    lectureVid.classList.remove("blue") 
    schema.classList.remove("blue")
    voca.classList.remove("blue") 
    concept.classList.remove("blue")
    Paragraph.classList.remove("blue")
    analysis.classList.remove("blue")
    deep.classList.remove("blue")
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

    
/***********************************************/

const finalTest = document.querySelector("#finalTest")
const final = document.querySelector("#final")
const tagSecondTest = document.querySelector("#tagSecondTest")

function gofinalTest(){
    wrap.style.display = "none"
    popup.style.display ="flex"
    mainpop.style.display ="flex"
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


const toPopUpHome = document.querySelector("#toPopUpHome")
toPopUpHome.addEventListener("click",backSchemaSocial)

const explainVid =document.querySelector("#explainVid")

function lecturePopUp(){
    const url = "https://www.youtube.com/watch?v=dtbm_O2dcGA";
    const name = "popup test";
    const option = "width = 500, height = 500, top = 100, left = 200, location = no"
        window.open(url, name, option);
        }

explainVid.addEventListener("click",lecturePopUp)

const learnDropDwon = document.querySelector("#vocaDropDwon")
const schemaDropDwon = document.querySelector("#schemaDropDwon")
const readingDropDwon = document.querySelector("#readingDropDwon")
const logicDropDwon = document.querySelector("#logicDropDwon")

function dropdownMenu(){
    voca.classList.toggle("none")
}

function dropdownSchemaMenu(){
    concept.classList.toggle("none")
    schema.classList.toggle("none")
}

function dropdownReadingMenu(){
    lectureVid.classList.toggle("none")
    Paragraph.classList.toggle("none")
}

function dropdownLogicMenu(){
    deep.classList.toggle("none")
    logicLecVid.classList.toggle("none")
}

learnDropDwon.addEventListener("click", dropdownMenu)
schemaDropDwon.addEventListener("click", dropdownSchemaMenu)
readingDropDwon.addEventListener("click", dropdownReadingMenu)
logicDropDwon.addEventListener("click",dropdownLogicMenu)


const stateContainer =document.querySelector("#stateContainer")
const titleTest = document.querySelector("#titleTest")
const titleSocail = document.querySelector("#titleSocail")

function addingState(){
    titleTest.style.display ="flex"
    titleSocail.style.display ="flex"
}

socialSchemaTest.addEventListener("click",addingState)

const listFold = document.querySelector("#listFold")
const openlist = document.querySelector("#openlist")
const listIcon = document.querySelector(".listIcon")

function foldingList(){
    menucontainer.style.display = "none"
    listIcon.style.display = "block"
}

listFold.addEventListener("click",foldingList)


function openList(){
    menucontainer.style.display = "flex" 
    listIcon.style.display = "none"
}

openlist.addEventListener("click",openList)