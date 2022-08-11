import CanvasText from "./canvastext.js";
import Choice from "./choice.js";
import FlashCardController from "./flashcardcontroller.js";
import DataInput from "./datainput.js";

var choicesDOM = $(".choice");
var bigCanvasID = "japanese-text";
var data = $("#data")[0];
data.value = null; //clear input when refreshed 
var theChoice = new Choice(choicesDOM[0]);
var flashCardController = new FlashCardController(choicesDOM, bigCanvasID, data);

var sidebarToggle = $("#toggleSidebar")[0];
var closeSidebar = $("#closeSidebar")[0];
var resetQuestion = $("#reset_Question")[0];
var sidebar =  $("#mySideBar")[0];
var allQuestions = $("#everything")[0];
var vowels = $("#1")[0];

allQuestions.addEventListener('click', e =>{
    fetch('../textFiles/Hiragana.txt')
    .then(response => response.text())
    .then(text => flashCardController.changeQuestions(text))
    .then(flashCardController.changeQuestion());
});

for(let i = 1; i <= 8; i++){
    let start = (i - 1)*5;
    let end = start + 5;
    let dom = "#" + i;
    $(dom)[0].addEventListener('click', e=>{
        fetch('../textFiles/Hiragana.txt')
        .then(response => response.text())
        .then(text => {
            flashCardController.loadXQuestions(text, start, end )
            flashCardController.changeQuestion();
        })
    });
}




resetQuestion.addEventListener('click', e =>{
    if(data.files.length != 0 || flashCardController.isLoaded()){
        flashCardController.changeQuestion();
        flashCardController.resetBorderClass();
    }
    else{
        alert("Please upload a file to begin");
    }
});

sidebarToggle.addEventListener('click', e => {
    toggleSidebar();
});

closeSidebar.addEventListener('click', e => {
    toggleSidebar();
});

function toggleSidebar(){
    sidebar.classList.toggle("openSidebar");
}
