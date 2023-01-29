const start=document.getElementById("js--Start")
const stop=document.getElementById("js--Stop")
const reset=document.getElementById("js--Reset")
const dozen=document.getElementById("js--dozenSec")
const sec=document.getElementById("js--sec")
let second = 0;
let dozenSec = 0
let minutes = 0
let run=false
let timer;

start.onclick = function(){
    if(run==true)
    {
        return
    }
    run=true
    timer = setInterval(function(){

            second+=1
            if(second == 10)
            {
            dozenSec+=1
            second=0 
            }
            if(dozenSec==6)
            {
                dozenSec=0
                minutes+=1
            }
            document.getElementById("js--sec").innerHTML = second
            document.getElementById("js--dozenSec").innerHTML = dozenSec
            document.getElementById("js--Min").innerHTML = minutes
        

    }, 1000);
}

stop.onclick = function(){
    clearInterval(timer);
    run=false;
}

reset.onclick = function(){
    clearInterval(timer);
    run=false;
    second = 0;
    dozenSec = 0
    minutes = 0
    document.getElementById("js--sec").innerHTML = second
    document.getElementById("js--dozenSec").innerHTML = dozenSec
    document.getElementById("js--Min").innerHTML = minutes
}


//einde stopwatch, begin slider

const sliderValue = document.getElementById("js--rangeValue")
const slider = document.getElementById("js--slider")
const body = document.getElementById("body")
slider.value=2;
sliderValue.innerText=slider.value + "x"
slider.oninput = function(){
    sliderValue.innerText=slider.value + "x";
    body.style.fontSize=slider.value + "rem";
}

const text=document.getElementById("js--text")
const img=document.getElementById("js--img")
let data = fetch("../data.json").then(
    function(dataIn)
    {
        return dataIn.json();
    }).then(
        function(realData){
        text.innerText=realData.text;
        img.src=realData.image;
    }
);