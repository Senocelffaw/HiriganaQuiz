export default class Choice{

    canvasDOM;
    text;
    ctx;
    canvas;
    canvasWidth = 150;
    fontStyle = "bold " + this.canvasWidth/3 + "px Arial";

    constructor(canvasDOM){
        this.text = "defailt text"
        this.canvasDOM = canvasDOM;
        this.canvas = canvasDOM;
        this.ctx = this.canvas.getContext("2d");
        this.setCanvasWidth(this.canvasWidth);
    }

    setText(text){
        this.text = text;

        this.clear();
        this.ctx.font =  this.fontStyle;
        this.ctx.textBaseline = 'middle';
        this.ctx.textAlign = 'center';   
        this.ctx.fillText(text,this.canvasWidth/2, this.canvasWidth/2 );
    }

    clear(){
        this.canvas.width = this.canvas.width;
    }

    setCanvasWidth(width){
        this.canvasWidth = width;
        this.canvas.width = width;
        this.canvas.height = width;
    }

    getCanvasDOM(){
        return this.canvasDOM;
    }


}