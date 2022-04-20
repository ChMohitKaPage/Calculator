console.log("app.js");

let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");

for(let button of buttons){
    button.addEventListener('click',function(){
        
    if(button.innerText=='C'){
        screen.value = "";
    }
    else if(button.innerText=="X"){
        screen.value +='*';
    }
    else if(button.innerText=="="){
        
        screen.value = eval(screen.value);
    }
    else if(button.innerText=="<="){
        let text = screen.value;
        screen.value = text.slice(0,-1);
    }
    else{
        screen.value +=button.innerText;
    }
    })
}


    
   setInterval(function(){
    let date = new Date();
        console.log(date.getHours(),date.getMinutes(),date.getSeconds());

   },1000)
    

