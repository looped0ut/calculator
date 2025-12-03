function add(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;
}

function subtract(a,b){
    return a-b;
}

function devide(a,b){
    return a/b;
}

let operand1=null;
let operand2=null;
let operator="";
let result = null;

function operate(){

    if(operator==="+"){
        return add(operand1,operand2);
    }

    else if(operator==="-"){
        return subtract(operand1,operand2);
    }

    else if(operator==="x"){
        return multiply(operand1,operand2);
    }

    else if(operator==="÷"){
        return devide(operand1,operand2);
    }
}

let op1="";
let op2="";
let res="";

let count1 =0;
let count2 =0;

let but = document.querySelectorAll(".but");

let display = document.querySelector(".display");

let ac = document.querySelector("#ac");

let oper = document.querySelectorAll(".oper");

let num = document.querySelectorAll(".num");

let equal = document.querySelector("#equal");

let sub = document.querySelector("#sub");

let per = document.querySelector("#per");

let ce = document.querySelector("#ce");

display.textContent = "";


ac.addEventListener("click",function(){
    if(display.textContent !==""){
    display.textContent ="0";
    }
    operand1 =null;
    operand2 =null;
    result = null;
    operator ="";
    op1="";
    op2="";
    res="";
    count1 =0;
    count2 =0;
});

num.forEach(element=>{
    element.addEventListener("click",function(){
    if(operand2===null && operator===""){
        op1= op1+element.textContent;
        operand1 = Number(op1);
        display.textContent = op1;
    }
    if(operand1 !==null && operator !==""){
        op2 = op2+element.textContent;
        operand2 = Number(op2);
        display.textContent = op2;
    }
    })
});

oper.forEach(element=>{
    element.addEventListener("click",function(){
        if(operand1 !==null && operator !=="" &&  operand2===null && element.textContent==="-"){
            op2 = sub.textContent;
            display.textContent= op2;
        }
        if( operand1 !==null &&  operand2 ===null && operator===""){
            operator= element.textContent;
            count1 =0;
        }
        if( operand1 !==null && operand2 !== null && operator!==""){
            operand1 = operate();
            op1 =   String(operand1);
            if(op1==="Infinity"){
                display.textContent="You cannot devide by zero :(";
            }
            else if(op1==="NaN"){
                display.textContent="learn to type decimals..."
            }
            else{
                display.textContent= op1;
            }
            operator =  element.textContent
            operand2 = null;
            op2 = "";
            count2 =0;
        }
        if(result !== null &&  operand1 ===null &&  operand2 ===null && operator===""){
            operator=element.textContent;
            operand1 = result;
            result = null;
            count2=0;
        }
    })
})

equal.addEventListener("click",function(){
    if( operand1 !==null && operator !=="" &&  operand2 !==null){
        result = operate();
        if(result===Infinity){
            res ="You cannot devide by zero :(";
        }
        else{
        res = String(result)
        }
        if(res==="NaN"){
            res = "learn to type decimals... "
        }
        
        display.textContent= res;
        operand1 =null;
        operand2 =null;
        operator ="";
        res= "";
        op1="";
        op2="";
        count1=0;
        count2=0;

    }
});


sub.addEventListener("click",function(){
    if((operand1 ===null||operand1===0) && operator==="" &&  operand2 ===null){
        op1 = sub.textContent;
        display.textContent= op1;
    }
});

per.addEventListener("click",function(){

    if(  operator==="" &&  operand2 ===null && count1===0 ){
        op1 = op1+per.textContent;
        display.textContent= op1;
        count1 =1;
    }
    if( operand1 !==null && operator !=="" && count2===0){
        op2 = op2+per.textContent;
        display.textContent=op2;
        count2 =1;
    }
});

ce.addEventListener("click",function(){

    let disp = display.textContent;

    if( op1!== "" && op2 === "" && operator===""){
    if((disp.slice(-1))==="."){
        count1=0;
    }
    op1 = disp.slice(0,-1);
    operand1 = Number(op1);
    display.textContent = op1;
    }

    if( op1!== "" && op2 !== "" && operator!==""){
        if((disp.slice(-1))==="."){
        count2=0;
    }
    op2 = disp.slice(0,-1);
    operand2 = Number(op2);
    display.textContent = op2;
    }

})






