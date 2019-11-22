/*
// page header and nav
const pageHeader = document.querySelector("#header")
pageHeader.textContent = pageData.header
const navBar = documentSelector("#navbar")
navBar.textContent = pageData.navbar
*/

// constructor




// prompt window to input pokemon ID & create new card

document.querySelector("#search").addEventListener("click", () => {
  let pokeId = prompt("Provide the Pokemon ID of the Pokemon you want to add:")
  let pokeIdNum = parseInt(pokeId, 10)
  if (pokeIdNum > 807) {
    alert("That Pokemon ID does not exist! There are only 808 pokemon.")
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
    const response = await fetch(url);
    const data = await response.json();
    return data;
} catch (error) {
  console.error(error);
}
}

// now, use the returned async data    
const theData = getAPIData('https://pokeapi.co/api/v2/pokemon/?limit=25').then(data => {
    for (const pokemon of data.results) {
        getAPIData(pokemon.url).then(pokedata => {
          populateDOM(pokedata)
        });      
    }
});


//get the correct pic for each card
function getPokeNumber(id) {
  if (id < 10) return `00${id}`
  if (id > 9 && id < 100) {
    return `0${id}`
  } else return id
}

let mainArea = document.querySelector("main")

//Function to append card elements into main area
function populateDOM(single_pokemon) {
let pokeScene = document.createElement("div")
let pokeDiv = document.createElement("div")
let pokeFront = document.createElement("div")
let pokeBack = document.createElement("div")
let name = document.createElement("h4")
let pic = document.createElement("img")
let powers = document.createElement("p")
let pokeId = document.createElement("p")


pokeScene.setAttribute("class", "scene")
pokeDiv.setAttribute("class", "card")
pokeFront.setAttribute("class", "card__face card__face--front")
pokeBack.setAttribute("class", "card__face card__face--back")
pic.setAttribute("class", "picDivs")

let pokeNum = getPokeNumber(single_pokemon.id)



pic.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeNum}.png`

// make the data show up

pokeFront.appendChild(pic)
pokeFront.appendChild(name)
pokeFront.appendChild(pokeId)
pokeBack.appendChild(powers)

pokeDiv.appendChild(pokeFront)
pokeDiv.appendChild(pokeBack)
pokeScene.appendChild(pokeDiv)

mainArea.appendChild(pokeScene)

// adding mouseover card flip action

pokeDiv.addEventListener("mouseover", function() {
pokeDiv.classList.toggle("is-flipped");
})
pokeDiv.addEventListener("mouseout", function() {
  pokeDiv.classList.toggle("is-flipped");
  })
}

function fillCardFront(pokeFront, data) {
  // let pokeOrder = document.createElement('h5')
  let pokeOrder = document.createElement('p')
  pokeOrder.textContent = data.order
  pokeFront.appendChild(pokeOrder)
  let pokeHP = document.createElement('h5')
  pokeHP.textContent = `${data.id} ${data.name[0].toUpperCase()} ${data.name.slice(1)}`
  pokeFront.appendChild(pokeHP)
}

function fillCardBack(pokeBack, data) {
 let pokeHP = document.createElement('h5')
 pokeHP.textContent = `${data.id} ${data.name[0].toUpperCase()} ${data.name.slice(1)}`
 pokeHP.textContent = data.stats[0].base_stat
 pokeBack.appendChild(pokeHP) 

}

