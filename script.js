const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button")

buttons.forEach((btn) => (

    display.value = eval(0),

    btn.addEventListener("click", () =>{
            if(display.value === "0"){
                display.value = display.value.slice(0 ,-1);
            }
        
            if(btn.id === "="){
                display.value = eval(display.value)    
            } else if ( btn.id === "AC") {
                display.value = "";
            } else if (btn.id == "DE"){
                display.value = display.value.slice(0, -1);
            } else display.value += btn.id

            if(display.value === ""){
                display.value = eval(0);
            }

    } )
) )