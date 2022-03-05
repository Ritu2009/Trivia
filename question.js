class Question {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
        this.inputBox = createInput('egg','text');
        this.checkButton = createButton("Check");
        this.congratulations= createElement('h2');
    }
    setElements(){
        
        this.inputBox.position(width/2-80, height/2);
        this.checkButton.position(width/2-60, height/2+30);
    }

    display() {
        textSize(35);
        fill("white");
        text(this.question, width/3-100, height/2-50);
        
       
       this.setElements();
      
        this.handleMousePressed();
    }
    handleMousePressed(){
        this.checkButton.mousePressed(()=>{
        
            console.log(this.inputBox.value());
           var a = this.inputBox.value().toLowerCase().trim();
            if(a == this.answer) {
                console.log("answer is"+ this.answer)
                textSize(35);
                fill("white");
                this.congratulations.html("You Won!")
                this.congratulations.html( width/2, height/2);
            }
        }
        )
    }

}