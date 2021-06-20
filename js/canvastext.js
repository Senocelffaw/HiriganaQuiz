export default class CanvasText{

    theCanvas;
    ctx;
    squareLength = 500;

    constructor(canvasID){


        this.theCanvas = $("#" + canvasID)[0];
        this.theCanvas.height = this.squareLength;
        this.theCanvas.width = this.squareLength;
        this.ctx = this.theCanvas.getContext("2d");
        
    }

    setCharacter(text){
        this.clear();
        this.ctx.font =  this.squareLength + "px Arial";
        this.ctx.textBaseline = 'middle';
        this.ctx.textAlign = 'center';   
        this.ctx.fillText(text,this.squareLength/2, this.squareLength/2 + this.squareLength/20);
    }

    clear(){
        this.theCanvas.width = this.squareLength;
    }


}