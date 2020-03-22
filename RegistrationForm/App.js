const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmpassword = document.querySelector('#confirm-password');
const accountName = document.querySelector('#ac-name');
const country = document.querySelector('#country');
const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');

const tooltip1 = document.querySelector('#tooltip1');
const tooltip2 = document.querySelector('#tooltip2');
const tooltip3 = document.querySelector('#tooltip3');
const tooltip4 = document.querySelector('#tooltip4');
const btn = document.querySelector('button');

const inputArray=
    [{inputValue: email,
    tooltipValue: tooltip1,
    matchValue: /^[a-z0-9\._\-]+@[a-z0-9\.\-]+\.[a-z]{2,4}$/},
    {inputValue: confirmpassword,
    tooltipValue:tooltip3,
    matchValue: /^[a-zA-Z0-9\.\-_]{4,10}$/},
    {inputValue: password,
    tooltipValue:tooltip2,
    matchValue: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\.\-_@$!%*#?&])[A-Za-z\d\.\-_@$!%*#?&]{8,13}$/},
    {inputValue: accountName,
    tooltipValue:tooltip4,
    matchValue: /^[a-zA-Z0-9\.\-_]{4,10}$/},];
    const selectArray=[country,day,month,year];

function buttonListenerInit(){
    btn.addEventListener("click", function(){
        //input fields
        for (const property of inputArray) {
            if(property.inputValue.value.match(property.matchValue)){
                property.inputValue.className="correct";
            }else{
                property.inputValue.className="incorrect";
                property.tooltipValue.className = "incorrect";
                property.tooltipValue.style.visibility = "visible";
            }
        }
        //select fields
        for (const element of selectArray) {
            if(element.value.match("none")){
                element.className= "incorrect";
            }else{
                element.className="correct";
            }
        }
    })
}
function tooltipReactionInit(){
    for (const property of inputArray) {
        property.inputValue.addEventListener("focusin", function(){
            property.tooltipValue.style.visibility = "visible";
        })
        property.inputValue.addEventListener("focusout", function(){
            property.tooltipValue.style.visibility = "hidden"; 
        })
    }
}
buttonListenerInit();
tooltipReactionInit()


