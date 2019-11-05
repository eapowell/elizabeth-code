async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
    }

const theData = getAPIData('https://pokeapi.co/api/v2/pokemon/')
.then(data => {
    for (const pokemon of data.results) {
        getAPIData(pokemon.url)
        .then(pokedata => {
            populateDOM(pokedata)
        })      
    }
})

console.log(theData)


let mainArea = document.querySelector ('main')

function poulateDOM(single_pokemon) {
    let pokeDiv = document.createElement('div')
    let pic = document.createElement('img')
    let name = document.createElement("h3")

  // pokeDiv.setAttribute('class', 'charDivs')
  // pic.setAtrribute('class', 'picDivs')

    let pokeNum = getPokeNumber(single_pokemon.id)

    name.textContent = single_pokemon.name

    pic.src = `../images/${pokeNum}.png`

    pokeDiv.appendChild(pic)
    pokeDiv.appendChild(name)

    mainArea.appendChild(pokeDiv)
   }


//console.log(allPokemon().then)
//console.log(allPokemon) 

function getPokeNumber(id) {
    if(id < 10) return '00${id}'
    if(id > 9 && id < 100) {
        return '0${id}'
    } else return id
 }


 
// CARD FLIP
// var card = document.querySelector('.card');
//card.addEventListener( 'click', function() {
 // card.classList.toggle('is-flipped');
//});