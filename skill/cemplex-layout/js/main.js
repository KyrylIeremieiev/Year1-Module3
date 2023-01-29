const ctx = document.getElementById('js--chart1');
const ch2 = document.getElementById('js--chart2')
loaded=0
function getPokemon() {
    normal = 0, fighting = 0, flying = 0, poison = 0, ground = 0, rock = 0, bug = 0, ghost = 0,
    steel = 0, fire = 0, water = 0, grass = 0, electric = 0, psychic = 0, ice = 0, dragon = 0, dark = 0, fairy = 0, shadow = 0;
    for (let i = 0; i < 100; i++) {
        //Jeroen, als u dit ziet: De reden dat het op random u const laat gebruiken,
        //is omdat het het randomizen gebeurt als het variable wordt aangeroepen :)
        //dit werkt niet met de pokemon omdat het variable met const maar 1 keer wordt aangeroepen en opgeslagen
        const random = Math.floor(Math.random() * 600) + 1
        let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + random)
            .then(function (responce) {
                return responce.json();
            })
            .then(function (realData) {
                switch (realData.types[0].type.name) {
                    case "normal":
                        normal = normal + 1;
                        break;
                    case "fighting":
                        fighting = fighting + 1;
                        break;
                    case "flying":
                        flying = flying + 1;
                        break;
                    case "poison":
                        poison = poison + 1;
                        break;
                    case "ground":
                        ground = ground + 1;
                        break;
                    case "rock":
                        rock = rock + 1;
                        break;
                    case "bug":
                        bug += 1;
                        break;
                    case "ghost":
                        ghost += 1;
                        break;
                    case "steel":
                        steel += 1;
                        break;
                    case "fire":
                        fire += 1;
                        break;
                    case "water":
                        water += 1;
                        break;
                    case "grass":
                        grass += 1;
                        break;
                    case "electric":
                        electric += 1;
                        break;
                    case "psychic":
                        psychic += 1;
                        break;
                    case "ice":
                        ice += 1;
                        break;
                    case "dragon":
                        dragon += 1;
                        break;
                    case "dark":
                        dark += 1;
                        break;
                    case "fairy":
                        fairy += 1;
                        break;
                    case "shadow":
                        shadow += 1;
                        break;
                }
            }).then(function(){
                if(loaded ==99)
                {
                loadChart()
                }
                loaded+=1
                console.log(loaded)
            });
    }
}

getPokemon()

function loadChart()
{
new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['playStation', "Xbox", 'Nintendo', 'Else'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5],
            borderWidth: 1
        }]

    },
    //options: {
    //  scales: {
    //    y: {
    //    beginAtZero: true
    //}
    //}
    //}
});

new Chart(ch2, {
    type: 'bar',
    data: {
        labels: ["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost",
        "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy", "shadow"],
        datasets: [{
            label: '# of Votes',
            data: [normal, fighting, flying, poison, ground, rock, bug, ghost,
                steel, fire, water, grass, electric, psychic, ice, dragon, dark, fairy, shadow],
            borderWidth: 1
        }]

    },
});
}