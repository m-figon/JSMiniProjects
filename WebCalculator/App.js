const display = document.querySelector(".display");

const addBtn = document.querySelector("#add");
const minusBtn = document.querySelector("#minus");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const equalsBtn = document.querySelector("#equals");

const zeroBtn = document.querySelector("#zero");
const oneBtn = document.querySelector("#one");
const twoBtn = document.querySelector("#two");
const threeBtn = document.querySelector("#three");
const fourBtn = document.querySelector("#four");
const fiveBtn = document.querySelector("#five");
const sixBtn = document.querySelector("#six");
const sevenBtn = document.querySelector("#seven");
const eightBtn = document.querySelector("#eight");
const nineBtn = document.querySelector("#nine");

let operationButtonArray=[addBtn, minusBtn, multiplyBtn, divideBtn];
let numberButtonArray=[oneBtn,twoBtn,threeBtn,fourBtn,fiveBtn,sixBtn,sevenBtn,eightBtn,nineBtn, zeroBtn]
let operationsArray=['+', "-", "*", "/"];
let numbersArray=[1,2,3,4,5,6,7,8,9,0];

const h1 = document.createElement("h1");
let start,equalsTime,afterOperation, operationTime, variableA,variableB,currentOperation;
let currentValue=0;

function operationInit(){
    currentOperation=null;
    start= true;
    equalsTime=false;
    operationTime=false;
    afterOperation=false;
    variableA=0;
    variableB=0;
    equalsButtonDisable(true);
}

function displayInit(){
    h1.textContent=currentValue.toString();
    display.appendChild(h1);
}

function operationHandler(operation){
    if(start && currentValue===0){
        start=false;
        h1.textContent+=operation;
        afterOperation=true;
        currentOperation=operation;
        operationButtonsDisable(true);
        numberButtonsDisable(false);
    }
    if(operationTime){
        operationTime=false;
        h1.textContent+=operation;
        afterOperation=true;
        currentOperation=operation;
        operationButtonsDisable(true);
        numberButtonsDisable(false);
    }
    
}
function equalsHandler(){
    if(equalsTime){
        h1.textContent+='=';
        if(currentOperation==='+'){
            currentValue=variableA+variableB;
        }else if(currentOperation==='-'){
            currentValue=variableA-variableB;
        }else if(currentOperation==='*'){
            currentValue=variableA*variableB;
        }else if(currentOperation==='/'){
            currentValue=variableA/variableB;
        }
        numberButtonsDisable(false);
        operationButtonsDisable(true);
        equalsButtonDisable(true);
        h1.textContent+=currentValue;
        operationInit();
    }
}
function numberHandler(operation){
    if(start){
        start=false;
        operationTime=true;
        h1.textContent=null;  
        variableA=operation;
        h1.textContent+=operation.toString();
        currentValue=0;
        numberButtonsDisable(true);
        operationButtonsDisable(false);
    }
    if(afterOperation){
        afterOperation=false;
        variableB=operation;
        h1.textContent+=operation.toString();
        equalsTime=true;
        numberButtonsDisable(true);
        operationButtonsDisable(true);
        equalsButtonDisable(false);
    }
}
function operationButtonsDisable(state){
    for(let i=0; i<4;i++){
        operationButtonArray[i].disabled=state;
    }
}

function numberButtonsDisable(state){
    for(let i=0; i<10;i++){
        numberButtonArray[i].disabled=state;
    }
}
function equalsButtonDisable(state){
    for(let i=0; i<10;i++){
        equalsBtn.disabled=state;
    }
}

//flags init and turning off equals button
operationInit();
//starting number on display init
displayInit();

//operations buttons listeners init
for(let i=0; i<4;i++){
    operationButtonArray[i].addEventListener("click",function() { operationHandler(operationsArray[i]) });
}
//numbers buttons listeners init
for(let i=0; i<10;i++){
    numberButtonArray[i].addEventListener("click",function() { numberHandler(numbersArray[i]) });
}
//equals button listener init
equalsBtn.addEventListener("click",function() { equalsHandler() });

