//lights on off
let val=1;
function lightoff(){
    document.getElementById("layeruno").style.background="linear-gradient(black,rgb(165, 7, 7))";
    document.getElementById("top").style.color="white";
    document.querySelector("table").childNodes.forEach((tr)=>{tr.childNodes.forEach((td)=>{
            if(td.firstChild){td.firstChild.nextSibling.style.backgroundColor="rgb(255, 255, 255,0.14)";
            td.firstChild.nextSibling.style.borderBottom="2px solid rgb(255, 255, 255,0.56)";
        }
        if(td.firstChild)console.log(td.firstChild.nextSibling.childNodes.forEach((but)=>{
            if(but.firstChild){
                but.firstChild.style.color="white";
            };
        }))
        });
    });
    document.getElementById("timer").style.backgroundColor="rgb(255, 255, 255,0.14)";
    document.getElementById("timer").style.borderColor="white";
    document.getElementById("timer").style.color="white";
    document.getElementById("Start").style.backgroundColor="rgb(165, 7, 7)";
    document.getElementById("Start").style.color="white";
}
function lightOn(){
    document.getElementById("layeruno").style.background="linear-gradient(white,rgb(212, 105, 105))";
    document.getElementById("top").style.color="black";
    document.querySelector("table").childNodes.forEach((tr)=>{tr.childNodes.forEach((td)=>{
            if(td.firstChild){td.firstChild.nextSibling.style.backgroundColor="rgb(0, 0, 0,0.14)";
            td.firstChild.nextSibling.style.borderBottom="2px solid rgb(0, 0, 0,0.56)";
        }
        if(td.firstChild)console.log(td.firstChild.nextSibling.childNodes.forEach((but)=>{
            if(but.firstChild){
                but.firstChild.style.color="black";
            };
        }))
        });
    });
    document.getElementById("timer").style.backgroundColor="rgb(0, 0, 0,0.14)";
    document.getElementById("timer").style.borderColor="black";
    document.getElementById("timer").style.color="black";
    document.getElementById("Start").style.backgroundColor="rgb(212, 105, 105)";
    document.getElementById("Start").style.color="black";
}
document.getElementById("bulb").onclick=function(){
    console.log("event occured")
    if(val){
        val=0;
        lightoff();
    }
    else{
        val=1;
        lightOn();
    }
}