let operator = "";
let setInt = false;
let ScreenNumber;
let value1 = "";
let value2 = "";
operator = "";
let font_size = 80;
let screenText = document.getElementById("screen-number");
const n = 5;


const keys = document.querySelectorAll("button");
alert(setInt);


for (let i = 0; i < keys.length; i++) {
    const button = keys[i];
    console.log(i);
    button.addEventListener("click", calculate);
       
}


function calculate(){
    const buttonText = this.innerText;

    if(buttonText === "AC"){
        screenText.innerText = 0;
        setInt = false;
        return;
    }

    if(buttonText === "DEL"){
        if(screenText.innerText.length == 1){
            screenText.innerText = 0;
            setInt = false;
            return;
        }
        else{
            screenText.innerText = screenText.innerText.substring(0, screenText.innerText.length -1);
            return;
        }

    }

    if(buttonText === "="){
        
        if(setInt == true){
            screenText.innerText = eval(screenText.innerText);
            setInt = false;
            return;
        }
        return;
        
    }

    if(buttonText === "?"){
        return;
    }

    if(buttonText === "%"){
        return;
    }
    
    else{
        if(setInt == false){
            screenText.innerText = this.innerText;
            setInt = true;
            return;
        }
        else{
            screenText.innerText += this.innerText;
            return;
        }        
    }

    

}

function getBtnText(a){


    if(setInt == ""){
        setInt = a;
        document.getElementById("screen-number").innerText = a;
    }
    else{
        
        if(screenText.innerText.length >= 7 && screenText.innerText.length < 14){
            font_size -= 10;
            screenText.style.fontSize = font_size + "px";
            screenText.innerText = screenText.innerText + a;
        }        
        else{
            screenText.innerText = screenText.innerText + a;
            console.log(screenText.style.fontSize);
        }
    }
}

function clearText(){
    document.getElementById("screen-number").innerText = 0;
    setInt = "";
    screenText.style.fontSize = "80px";
    font_size = 80;
}

function add(){
    operator = "+";
    value1 = document.getElementById("screen-number").innerText;
    setInt = "";
    document.getElementById("screen-number").innerText = 0;
}

function minus(){
    operator = "-";
    value1 = document.getElementById("screen-number").innerText;
    setInt = "";
    document.getElementById("screen-number").innerText = 0;
}

function multiply(){
    operator = "*";
    value1 = document.getElementById("screen-number").innerText;
    setInt = "";
    document.getElementById("screen-number").innerText = 0;
}

function divide(){
    operator = "/";
    value1 = document.getElementById("screen-number").innerText;
    setInt = "";
    document.getElementById("screen-number").innerText = 0;
}


function answer(){
    if(value1 !=""){
        
        if(operator == "+"){
            value2 = document.getElementById("screen-number").innerText;
            document.getElementById("screen-number").innerText = "";
            document.getElementById("screen-number").innerText = parseFloat(value1) + parseFloat(value2);
            setInt = "";
            value1 ="";
        }

        if(operator == "-"){
            value2 = document.getElementById("screen-number").innerText;
            document.getElementById("screen-number").innerText = "";
            document.getElementById("screen-number").innerText = parseFloat(value1) - parseFloat(value2);
            setInt = "";
            value1 ="";
        }

        if(operator == "/"){
            value2 = document.getElementById("screen-number").innerText;
            document.getElementById("screen-number").innerText = "";
            document.getElementById("screen-number").innerText = parseFloat(value1) / parseFloat(value2);
            setInt = "";
            value1 ="";
        }

        if(operator == "*"){
            value2 = document.getElementById("screen-number").innerText;
            document.getElementById("screen-number").innerText = "";
            document.getElementById("screen-number").innerText = parseFloat(value1) * parseFloat(value2);
            setInt = "";
            value1 ="";
        }
    }
}