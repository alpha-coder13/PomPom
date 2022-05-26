let J;

const start=()=>{
    J=setInterval(()=>decrease(),1000);
    document.getElementById("Start").innerText="Stop";
}

const Stop=()=>{
    clearInterval(J);
    document.getElementById("Start").innerText="Start";
    document.getElementById("pomodoro").innerText="Pomodoro";
}

function decrease(){
    var k=document.getElementById("timer").innerText;  
    var l="";
   
    for(let i=0;i<k.length;i++){
        if(k[i]!=":")l+=k[i];
    }

    var j=[];
    for(var i=0;i<l.length;i++){
        j.push(parseInt(l[i],10));
    }
    
     var h=(j[0])*10 + (j[1]);
     var min=(j[2])*10+(j[3]);
     if(min>0 || h>0){
        console.log(h,min)
         if(min!=0){
            min --;
        }
        else{
            min=59;
            h--;
        }
        if(h==0 && min ==0){
            Stop();
            window.alert("timer ended")
        }

        var st="";
        var i=2;
        while(i){
            st+=String(Math.floor(h/Math.pow(10,i-1)));
            h=h%10;
            i--;
        }
        st+=":";
        i=2;
        while(i){
            st+=String(Math.floor(min/Math.pow(10,i-1)));
            min=min%10;
            i--;
        }

        document.getElementById("pomodoro").innerText=st+" - Time to focus";
        document.getElementById("timer").innerText=st;
    }
    else {
        Stop()
    }
}
function setindex(r,val){
    if(val)document.getElementById("layer-setting").style.zIndex=r;
    else document.getElementById("about").style.zIndex=r;
}

function convert(str){
    var j=[];
    for(var i=0;i<2;i++){
        j.push(parseInt(str[i],10));
    }
     var k=(j[0])*10 + (j[1]);
return k;
}

function increment(str,val){
    var j= convert(str);
    if(val>0){
        if(j+1>59) return "00";
        else {
            j+=1;
            var i=2;
            var st="";
            while(i){
                st+=String(Math.floor(j/Math.pow(10,i-1)));
                j=j%10;
                i--;
            }
            return st;
            
        }
    }
    else{
        if(j-1<0) return "59";
        else {
            j-=1;
            var i=2;
            var st="";
            while(i){
                st+=String(Math.floor(j/Math.pow(10,i-1)));
                j=j%10;
                i--;
            }
            return st;
        }

    }

}

function setTime(){
    var st=document.getElementsByClassName("min-mid").item(0).innerText +":"+document.getElementsByClassName("sec-mid").item(0).innerText;
    document.getElementById("timer").innerText=st;
}


function changeTimePos(min){
    if(min){
    var k=document.getElementsByClassName("min-top").item(0).innerText;
    document.getElementsByClassName("min-top").item(0).innerHTML=increment(k,1);
    var k=document.getElementsByClassName("min-mid").item(0).innerText;
    document.getElementsByClassName("min-mid").item(0).innerText=increment(k,1);
    var k=document.getElementsByClassName("min-bottom").item(0).innerText;
    document.getElementsByClassName("min-bottom").item(0).innerText=increment(k,1);
    }
    else{
    var k=document.getElementsByClassName("sec-top").item(0).innerText;
    document.getElementsByClassName("sec-top").item(0).innerText=increment(k,1);
    var k=document.getElementsByClassName("sec-mid").item(0).innerText;
    document.getElementsByClassName("sec-mid").item(0).innerText=increment(k,1);
    var k=document.getElementsByClassName("sec-bottom").item(0).innerText;
    document.getElementsByClassName("sec-bottom").item(0).innerText=increment(k,1);
    }
}
function changeTimeNeg(min){
    if(min){
    var k=document.getElementsByClassName("min-top").item(0).innerText;
    document.getElementsByClassName("min-top").item(0).innerText=increment(k,-1);
    var k=document.getElementsByClassName("min-mid").item(0).innerText;
    document.getElementsByClassName("min-mid").item(0).innerText=increment(k,-1);
    var k=document.getElementsByClassName("min-bottom").item(0).innerText;
    document.getElementsByClassName("min-bottom").item(0).innerText=increment(k,-1);
    }
    else{
    var k=document.getElementsByClassName("sec-top").item(0).innerText;
    document.getElementsByClassName("sec-top").item(0).innerText=increment(k,-1);
    var k=document.getElementsByClassName("sec-mid").item(0).innerText;
    document.getElementsByClassName("sec-mid").item(0).innerText=increment(k,-1);
    var k=document.getElementsByClassName("sec-bottom").item(0).innerText;
    document.getElementsByClassName("sec-bottom").item(0).innerText=increment(k,-1);
    }
}

document.getElementById("Min-pos").onclick=function(){
    changeTimePos(true);
}
document.getElementById("Sec-pos").onclick=function(){
    changeTimePos(false);
}
document.getElementById("Min-neg").onclick=function(){
    changeTimeNeg(true);
}
document.getElementById("Sec-neg").onclick=function(){
    changeTimeNeg(false);
}
document.getElementById("settings").onclick = function(e){
    console.log(e);
    setindex(10,true);
}
document.getElementById("CLose").onclick = function(e){
    console.log(e);
    setindex(-10,true);
}
document.getElementById("Set-time").onclick=function(e){
    setTime();
    Stop();
    setindex(-10,true);
}
document.getElementById("Start").onclick=function(){
        if(document.getElementById("Start").innerText[4] == "t")start();
        else {Stop();}
}
document.getElementById("info").onclick=function(){
    setindex(10,false);
}
document.getElementById("about-CLose").onclick = function(e){
    console.log(e);
    setindex(-10,false);
}
