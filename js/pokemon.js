// data.stats[0].base_stat
 class Pokemon {
    constructor(id, name, stats) {
        this.id = id
        this.name = name
        this.base_stat = stats
    }
}

//const Thoremon = new Pokemon(900, 'Thoremon', 130);


// reusable asyne function to fetch data from url api
async function getAPIData(url) {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
} catch (error) {
  console.error(error)
}
}

// now, use the returned async data    
const theData = getAPIData('https://pokeapi.co/api/v2/pokemon/').then(data => {
    for (const pokemon of data.results) {
        getAPIData(pokemon.url).then(pokedata => {
          populateDOM(pokedata)
        //   populateDOM(Thoremon)
        });      
    }
})

console.log(theData)
/*
document.querySelector('#pokeButton').addEventListener('click', () => {
    let pokeId prompt('Provide the Pokemon ID you want to add:')
   
    if(pokeIdNum > 807) {
        alert('That Pokemon ID does not exist! We only have 809 pokemon.')
        return
    } else {
    getAPIData('https://pokeapi..co/api/v2/pokemon/${pokeId}')
    .then(results => {
    // let newPokemon = new Pokemon(pokeId, )
    populateDOM(result)
    })
    .catch(error => console.log(error))
    }
}) */
    
let mainArea = document.querySelector ('main')

// populating card elements in main area

function poulateDOM(single_pokemon) {
    let pokeScene = document.createElement('div')
    let pokeCard = document.createElement('div')
    let pokeFront = document.createElement("div")
    let pokeBack = document.createElement("div")

  // pokeDiv.setAttribute('class', 'charDivs')
  // pic.setAtrribute('class', 'picDivs')

    fillCardFront(pokeFront, single_pokemon)
    fillCardBack(pokeBack, single_pokemon)

    pokeScene.setAttribute('class', 'scene')
    pokeScene.setAttribute('class', 'card')
    pokeCard.appendChild(pokeFront)
    pokeCard.appendChild(pokeBack)
    pokeScene.appendChild(pokeCard)

    mainArea.appendChild(pokeScene)

    pokeCard.addEventListener('click', function() {
        pokeCard.classList.toggle('is-flipped')
    })
    }


function fillCardFront(pokeFront, data) {
    pokeFront.setAttribute('class', 'card_face card_face--front')
    let name = document.createElement('p')
    let pic = document.createElement('img')
    pic.setAttribute('class', 'picDivs')
    let pokeNum = getPokeNumber(data.id)
    pokeFront.appendChild(name)
    //name.textContent = '${data.name} height: ${data.height}'
    //pic.src = '../images/${pokeNum}.png'
    pic.src = 'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeNum}.png '

    pokeFront.appendChild(pic)
    pokeFront.appendChild(name)
}

function fillCardBack(pokeBack, data) {
    pokeBack.setAttribute('class', 'card_face card_face--back')
    let pokeOrder = document.createElement('p')
    let pokeHP = document.createElement('h5')
    pokeOrder.textContent = '#${data.id} ${data.name[0].toUpperCase()}${data.nam.slice(1)}'
    //pokeHP.textContent = data.stats[0].base-stat
    pokeBack.appendChild(pokeOrder)
    pokeBack.appendChild(pokeHP)
}


// function to get the correct pokemon ID
function getPokeNumber(id) {
    if(id < 10) return '00${id}'
    if(id > 9 && id < 100) {
        return '0${id}'
    } else return id
 }


