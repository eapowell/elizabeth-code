async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
    }
}

const theData = getAPIData('https://pokeapi.co/api/v2/pokemon/')
.then(data => {
    for(const pokemon of data.results) {
        getAPIData(pokemon.url)
        .then(pokedata => {
            console.log(pokemon)
        })
       
    }
})

console.log(theData)







function populateDOM(pokeArray) {
    pokeArray.forEach(pokemon => {

    })
}




const allPokemon = (async () => {
const response = await fetch('https://pokeapi.co/api/v2/pokemon/1')
const myJson = await response.json()
console.log(JSON.stringify(myJson))
})

console.log(allPokemon().then)

//console.log(allPokemon) 

let mainArea = theDocument.querySelector ('main')

function poulateDOM(single-pokemon) {
    letpokeDiv = document.createElement('div')
    let name = document.createElement('div')
    let pic = document.createElement('div')
}

    
let pokeNum = getPokeNumber(single_pokemon.id)

    name.textContent = singlepokemon.name

    pic.src = `../images/${pokeNum}.png`

  
    pokeDiv.appendChild(pic)
    pokeDiv.appendChild(name)

    mainArea.appendChild(pokeDiv)
}

function getPokeNumber(id) {
    if(id < 10) return '00${id}'
    if(id > 9 && < 100) {
        return '0${id}'
    } else return id
    } 


    let end = charURL.lastIndexOf('/')
    let charID =
}