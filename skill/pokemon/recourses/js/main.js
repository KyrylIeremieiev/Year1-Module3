const pokemonImg = document.getElementById("js--pokemonImage");
console.log(pokemonImg)
let random = Math.floor(Math.random() * 600) + 1

let pokemon=fetch("https://pokeapi.co/api/v2/pokemon/" + random)
    .then(function(responce){
        return responce.json();
    })
    .then(function(realData){
        pokemonImg.src= realData.sprites.front_shiny 

    })        
    let finished = false;
    const catchB = document.getElementById("js--CatchButton")
    const statusUpdate = document.getElementById("js--pokeStatus")
    catchB.onclick = function(){
        let catchRandom = Math.floor(Math.random() * 2) + 1
        if(finished==false){
            if(catchRandom==1)
            {
                statusUpdate.innerText = "Pokemon Caught"
            }
            else{
                statusUpdate.innerText= "It got away!"
            }
        }
        finished=true
        catchB.innerText="not ready"
    }


let showHead = document.getElementById("js--showHeading")
let showText = document.getElementById("js--showText")

let show=fetch("https://api.tvmaze.com/search/shows?q=Fate/Zero")
    .then(function(responce){
        return responce.json();
    })
    .then(function(realData){        
        showText.innerHTML=realData[0].show.summary
        showHead.innerHTML=realData[0].show.name
    });
    
const input=document.getElementById("js--input")
const myName = document.getElementById("NameHeading")
input.onkeyup=function(event){
    if(event.keyCode == 13)
    {
        let nameVar = input.value
        let age = fetch("https://api.agify.io?name=" + nameVar)
            .then(function(responce){
                return responce.json();
            })
            .then(function(realData){
                myName.innerText=realData.age
                if(realData.age == null)
                {
                    myName.innerText="name not found"
                }
                input.style.display="none"
            })
    }
}
