let bracketFlag = 0;
    const addToDisplay = (myval) =>{
        let display = document.getElementById("display");
        if (myval == "AC"){
            display.value = "";
            bracketFlag == 0 ;
        }
        else if(myval == "Back"){
            display.value = display.value.slice(0,-1);
        }
        else if(myval=="()"){
            if(bracketFlag == 0){
                display.value += "(";
                bracketFlag=1;
            }
            else if (bracketFlag == 1){
                display.value += ")";
                bracketFlag == 0;
            }
        }
        else if( myval == "="){
            try{
                display.value = eval(display.value);
            }
            catch{
                display.value ="ERROR";
            }
        }
        else{
            display.value += myval;
        }
        
    }
    