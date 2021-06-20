import Choice from "./choice.js";
import canvastext from "./canvastext.js";
import DataInput from "./datainput.js";

export default class FlashCardController{

    canvasText;
    DOMArray;
    theData;
    choices = [];
    numOfChoices = 4;



    constructor(canvasDOMArray, bigCanvas, data){
        this.canvasText = new canvastext(bigCanvas);
        this.DOMArray = canvasDOMArray;
        this.theData = new DataInput(data);
        for(var i = 0; i < this.numOfChoices; i++){
            this.DOMArray[i].addEventListener("click", e =>{
                this.checkAnswer(e);
            });
            this.choices[i] = new Choice(canvasDOMArray[i]);
        }

    }

    setAll(text){
        for(var i = 0; i < this.numOfChoices; i++){
            this.choices[i].setText(text);
        }
    }

    changeQuestion(){
        var questions = this.theData.getQuestion();
        var random = this.getRand(this.choices.length) + 1;

        questions = this.swap(questions, 1, random);

        this.canvasText.setCharacter(questions[0]);

        for(let i = 1; i <= this.numOfChoices; i++){
            this.choices[i-1].setText(questions[i]);
            this.choices[i-1].getCanvasDOM().setAttribute("answer", false);
        }

        this.choices[random-1].getCanvasDOM().setAttribute("answer", true);
    }

    swap(list, first, second){
        var temp = list[first];
        list[first] = list[second];
        list[second] = temp;

        return list;
    }


    getRand(upTo){
        return Math.floor(Math.random() * upTo);
    }

    checkAnswer(event){
        if(event.target.getAttribute("answer") == "true"){
            event.target.classList.add("greenBorder");
        }
        else{
            event.target.classList.add("redBorder");
        }
    }

    resetBorderClass(){
        for(let i = 0; i < this.numOfChoices; i++){
            this.DOMArray[i].classList.remove("redBorder");
            this.DOMArray[i].classList.remove("greenBorder");
        }
    }
}