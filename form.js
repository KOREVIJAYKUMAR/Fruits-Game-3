class Form {

    constructor(){

       
        this.title = createElement('h2');
        this.title.html('FRUITS GAME');
        this.title.position(300,100);

        this.input = createInput("Name");
        this.input.position(300,200);

        this.button = createButton("Play");
        this.button.position(370,250);

    }

 
         
      

    
    display(){

      


       this.button.mousePressed(()=>{


        // console.log(this);
            gameState="play";
         
        //    this.greetings.html('Hello '+name+'!');
         //   this.greetings.position(300,200); 

            this.input.hide();
            this.button.hide();
            this.title.hide();

      
       }
      
      );
    
    
    }
    
}
    