
// page header and nav

let nav = document.querySelector("nav")
let home = document.createElement("button")

home.textContent = "HOME"

nav.appendChild(home)

home.addEventListener("click", () => {document.location.href="index.html"})

// constructor
// Constructor

class pokeCharacter {
  constructor(id, name, forms, abilities, types) {
    this.id = id;
    this.name = name;
    this.forms = forms;
    this.abilities = abilities;
    this.types = types;
  }
}



// prompt window to input pokemon ID & create new card

document.querySelector("#search").addEventListener("click", () => {
  let pokeId = prompt("Provide the Pokemon ID of the Pokemon you want to add:")
  let pokeIdNum = parseInt(pokeId, 10)
  if (pokeIdNum > 807) {
    alert("That Pokemon ID does not exist! We only have 807 Pokemon.")
    return
  } else {
    getAPIData(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .then(result => {
        populateDOM(result)
      })
      .catch(error => console.log(error))
  }
});
  
  
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
  const theData = getAPIData('https://pokeapi.co/api/v2/pokemon/?limit=25').then(data => {
      for (const pokemon of data.results) {
          getAPIData(pokemon.url).then(pokedata => {
            populateDOM(pokedata)
          });      
      }
  });
  
  //To capitalize the first letter in passed value
const capitalize = s => {
  if (typeof s !== "string") return ""
  return s[0].toUpperCase() + s.slice(1);
}

  //get the correct pic for each card
  function getPokeNumber(id) {
    if (id < 10) return `00${id}`
    if (id > 9 && id < 100) {
      return `0${id}`
    } else return id
  }

  // home.addEventListener("click", () => {document.location.href="index.html"})
  
  let mainArea = document.querySelector("main")
  
  //Function to append card elements into main area
  function populateDOM(single_pokemon) {
    let pokeScene = document.createElement("div")
    let pokeCard = document.createElement("div")
    let pokeFront = document.createElement("div")
    let pokeBack = document.createElement("div")
  
    
    let name = document.createElement("p")
    let pic = document.createElement("img")
  
    pic.setAttribute("class", "picDivs")
  
    fillCardBack(pokeBack, single_pokemon)
  
    pokeScene.setAttribute("class", "scene")
    pokeCard.setAttribute("class", "card")

   

   

  pokeFront.setAttribute(
    "class",
    `card__face card__face--front ${
      single_pokemon.types.filter(type => type.slot == 1)[0].type.name
    }`
  )

  

  pokeBack.setAttribute("class", "card__face card__face--back")
  pic.setAttribute("class", "picDivs")


  // capitalize name

  let pokeNum = getPokeNumber(single_pokemon.id)
  pokeFront.appendChild(name)
  name.textContent = single_pokemon.name
  console.log(single_pokemon.types[0].type.name)
  name.textContent = capitalize(`${single_pokemon.name}`)
  
  pic.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeNum}.png`
  
  // make the data show up
  
  pokeFront.appendChild(pic)
  pokeFront.appendChild(name)

  pokeCard.appendChild(pokeFront)
  pokeCard.appendChild(pokeBack)
  pokeScene.appendChild(pokeCard)

  mainArea.appendChild(pokeScene)


  // adding mouseover card flip action
  
  pokeCard.addEventListener("click", function() {
  pokeCard.classList.toggle("is-flipped");
  })
  }

  pokeCard.onmouseover = function() {
    this.setAttribute(
      "style", 'border: 5px solid ##ffcb05; border-radius: 7px'
    )
   }

   pokeCard.onmouseleave = function() {
    this.setAttribute("style", `border: none`)
  };

  

 //separate function to fill card back

 function fillCardBack(pokeBack, data) {
  pokeBack.setAttribute("class", "card__face card__face--back")
  let pokeOrder = document.createElement("p")
  let pokeHP = document.createElement("h5")
  let pokeAb = document.createElement("p")
  let pokeAbilities = document.createElement("ul")

  function fillCardBack(pokeBack, data) {
    pokeBack.setAttribute("class", "card__face card__face--back")
    let pokeOrder = document.createElement("p")
    let pokeHP = document.createElement("h5")
    let pokeAb = document.createElement("p")
    let pokeAbilities = document.createElement("ul")
  
    //targeted types using map and then joined with a comma
  
    pokeOrder.textContent = `type: ${data.types
      .map(t => t.type.name)
      .join(", ")}`
  
    pokeHP.textContent = `HP: ${data.stats[5].base_stat}`

    pokeBack.appendChild(pokeOrder)
    pokeBack.appendChild(pokeHP)
    pokeBack.appendChild(pokeAb)
    pokeBack.appendChild(pokeAbilities)
  }
  
  function getPokeNumber(id) {
    if (id < 10) return `00${id}`
    if (id > 9 && id < 100) {
      return `0${id}`
    } else return id
  }
}