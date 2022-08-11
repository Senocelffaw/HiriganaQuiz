export default class DataInput{
    input;
    file;
    questions = [];
    numQuestions;

    constructor(fileInputDom){
        if(fileInputDom === undefined){

        }
        else{
            this.input = fileInputDom;
            this.input.addEventListener('change', (e)=>{
                this.questions = [];
                this.readFile(this.input.files[0]);
        });
        }
    }


    isLoaded(){
        if(this.questions.length > 0){
            return true;
        }
        return false;
    }

    readFile(textFile){
        var reader=new FileReader();
        reader.readAsText(textFile);
        reader.onload = e =>{
            var temp = reader.result.split("\n");
            this.numQuestions = temp.length;
            this.loadQuestions(temp);
        }
    }

    loadXQuestions(text, start, end){
        this.loadNewQuestions(text);
        this.questions = this.questions.slice(start, end);
    }

    loadNewQuestions(text){
        this.questions = [];
        this.loadQuestions(text.split('\n'));
    }

    //Loads the question/answer pairs into the "questions" array
    loadQuestions(temp){
        for(let i = 0; i < temp.length - 1; i++){
            var temptemp = [];
            temptemp = temp[i].split(",");
            this.questions.push([temptemp[0].trim(), temptemp[1].trim()]);
        }
    }

    getQuestion(){
        var questions = 4;
        var question = [];
        var randNum = this.getRandList();

        question.push(this.questions[randNum[0]][0]);
        question.push(this.questions[randNum[0]][1]);

        for(let i = 1; i < questions; i++){
            question.push(this.questions[randNum[i]][1]);
        }

        return question;

    }
////////////////////////////////////////////////
    getRand(numAnswers){
        return Math.floor(Math.random() * numAnswers);
    }

    getRandList(){
        var list = [];
        var numAnswers = 4;
        var toReturn = [];

        for(let i = 0; i < this.questions.length; i++){
            list[i] = i;
        }

        for(let i = 0; i < numAnswers; i++){
            var rand = this.getRand(this.questions.length - i - 1)
            toReturn[i] = list[rand];
            list = this.swap(list, rand, list.length - i - 1);
        }

        return toReturn;
    }


    swap(listToFix, firstIndex, secondIndex){
        if(firstIndex < 0 || secondIndex < 0){
            return null;
        }
        if(firstIndex >= listToFix.length || secondIndex >= listToFix.length){
            return null;
        }

        listToFix[firstIndex] = listToFix[secondIndex];
        listToFix[secondIndex] = false;

        return listToFix;
    }

}