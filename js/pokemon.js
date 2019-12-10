// page header and home button
let nav = document.querySelector('nav')
let home = document.createElement('button')

home.textContent = 'HOME'
nav.appendChild(home)
home.addEventListener('click', () => {
  document.location.href = 'index.html'
})

// Constructor
class pokeCharacter {
  constructor(id, name, forms, abilities, types) {
    this.id = id
    this.name = name
    this.forms = forms
    this.abilities = abilities
    this.types = types
  }
}

// prompt window to input pokemon ID & create new card
document.querySelector('#search').addEventListener('click', () => {
  let pokeId = prompt('Provide the Pokemon ID of the Pokemon you want to add:')
  let pokeIdNum = parseInt(pokeId, 10)
  if (pokeIdNum > 807) {
    alert('That Pokemon ID does not exist! We only have 807 Pokemon.')
    return
  } else {
    getAPIData(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .then(result => {
        populateDOM(result)
      })
      .catch(error => console.log(error))
  }
})

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
const theData = getAPIData('https://pokeapi.co/api/v2/pokemon/?limit=25').then(
  data => {
    for (const pokemon of data.results) {
      getAPIData(pokemon.url).then(pokedata => {
        populateDOM(pokedata)
      })
    }
  },
)

// To capitalize the first letter in passed value
const capitalize = s => {
  if (typeof s !== 'string') return ''
  return s[0].toUpperCase() + s.slice(1)
}

// get the correct pic for each card
function getPokeNumber(id) {
  if (id < 10) return `00${id}`
  if (id > 9 && id < 100) {
    return `0${id}`
  } else return id
}

let mainArea = document.querySelector('main')

// Function to append card elements into main area
function populateDOM(single_pokemon) {
  let pokeScene = document.createElement('div')
  let pokeCard = document.createElement('div')
  let pokeFront = document.createElement('div')
  let pokeBack = document.createElement('div')

  let name = document.createElement('h2')
  let pic = document.createElement('img')

  pic.setAttribute('class', 'picDivs')

  fillCardBack(pokeBack, single_pokemon)

  pokeScene.setAttribute('class', 'scene')
  pokeCard.setAttribute('class', 'card')
  pokeFront.setAttribute(
    'class',
    `card__face card__face--front ${
      single_pokemon.types.filter(type => type.slot == 1)[0].type.name
    }`,
  )

  pokeBack.setAttribute('class', 'card__face card__face--back')
  pic.setAttribute('class', 'picDivs')


// capitalize name
  let pokeNum = getPokeNumber(single_pokemon.id)
  pokeFront.appendChild(name)
  name.textContent = single_pokemon.name
  
  name.textContent = capitalize(`${single_pokemon.name}`)

  pic.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeNum}.png`

 

// make the data show up
  pokeFront.appendChild(pic)
  pokeFront.appendChild(name)

  pokeCard.appendChild(pokeFront)
  pokeCard.appendChild(pokeBack)
  pokeScene.appendChild(pokeCard)

  mainArea.appendChild(pokeScene)

// add mouseover border to match type color
  pokeCard.addEventListener("mouseover", function() {
    let type = single_pokemon.types[0].type.name
    pokeCard.setAttribute("style", `box-shadow: 0px 2px 20px 10px ${color(type)}; border-radius: 40px;`)
    
  })
  pokeCard.addEventListener("mouseout", function() {
    pokeCard.setAttribute("style", "box-shadow: none;")
  })

// adding card flip action
  pokeCard.addEventListener('click', function() {
    pokeCard.classList.toggle('is-flipped')
  })

  // adding background color on back to match type - not working yet
  pokeCard.addEventListener('click', function() {
    let type = single_pokemon.types[0].type.name
    pokeBack.setAttribute("style", 'background: ${color(type)};')
  })
  
}

// separate function to fill card back
function fillCardBack(pokeBack, data) {
  pokeBack.setAttribute('class', 'card__face card__face--back')
  let pokeOrder = document.createElement('h5')
  let pokeHP = document.createElement('h5')
  let pokeAb = document.createElement('h5')
  let pokeAbilities = document.createElement('ul')
  

//targeted types using map
  pokeOrder.textContent = `Type: ${data.types.map(t => t.type.name)}`

  pokeHP.textContent = `HP: ${data.stats[5].base_stat}`
  pokeAb.textContent = 'Abilities: '


//pokeFront.appendChild(name)
//name.textContent = single_pokemon.name



  // target abilities with dot notation
  pokeAbilities.innerHTML = data.abilities
    .map(a => a.ability.name)
    .reduce(
      (accumulator, currentValue) =>
        (accumulator += `<li class="pokeability">${currentValue}</li>`),
      '',
    )

  pokeBack.appendChild(pokeOrder)
  pokeBack.appendChild(pokeHP)
  pokeBack.appendChild(pokeAb)
  pokeBack.appendChild(pokeAbilities)

  //name.textContent = capitalize(`${a.ability.name}`)

}

// Set background color of card based on type
function color(type) {
  if (type === 'fire') {
    return '#f6b282'
  } else if (type === 'fairy') {
    return '#f4c1cd'
  } else if (type === 'fighting') {
    return '#f4c1cd'
  } else if (type === 'ghost') {
    return '#a99ac1'
  } else if (type === 'grass') {
    return '#aede96'
  } else if (type === 'ground') {
    return '#ecd9a4'
  } else if (type === 'ice') {
    return '#c1e7e7'
  } else if (type === 'normal') {
    return '#cacaae'
  } else if (type === 'poison') {
    return '#c68cc6'
  } else if (type === 'psychic') {
    return '#fa9ab7'
  } else if (type === 'flying') {
    return '#cabcf6'
  } else if (type === 'bug') {
    return '#cad479'
  } else if (type === 'dark') {
    return '#a99a91'
  } else if (type === 'dragon') {
    return '#a987fa'
  } else if (type === 'electric') {
    return '#fae282'
  } else if (type === 'rock') {
    return '#d4c687'
  } else if (type === 'steel') {
    return '#d4d4e2'
  } else if (type === 'water') {
    return '#a4bcf6'
  }
}
