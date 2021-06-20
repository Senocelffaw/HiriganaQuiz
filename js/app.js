import CanvasText from "./canvastext.js";
import Choice from "./choice.js";
import FlashCardController from "./flashcardcontroller.js";
import DataInput from "./datainput.js";

var choicesDOM = $(".choice");
var bigCanvas = $('.change')[0];
var bigCanvasID = "japanese-text";
var data = $("#data")[0];
data.value = null; //clear input when refreshed 
var theChoice = new Choice(choicesDOM[0]);
var flashCardController = new FlashCardController(choicesDOM, bigCanvasID, data);

$("#reset_Question")[0].addEventListener('click', e =>{
    if(data.files.length != 0){
        flashCardController.changeQuestion();
        flashCardController.resetBorderClass();
    }
    else{
        alert("Please upload a file to begin");
    }
});

$("#toggleSidebar")[0].addEventListener('click', e => {
    toggleSidebar();
});

$("#closeSidebar")[0].addEventListener('click', e => {
    toggleSidebar();
});

function toggleSidebar(){
    $("#mySideBar")[0].classList.toggle("openSidebar");
}
