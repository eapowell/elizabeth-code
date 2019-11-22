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
            populateDOM(pokedata);
          //   populateDOM(Thoremon)
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
  let name = document.createElement("h2")
  let pic = document.createElement("img")
  let powers = document.createElement("p")
  let height = document.createElement("p")
  let weight = document.createElement("p")
  let pokeId = document.createElement("p")
  let forms = document.createElement("p")
  let hr = document.createElement("hr")
  let tipes = document.createElement("div")

  pokeScene.setAttribute("class", "scene")
  tipes.setAttribute("class", "pre")
  pokeDiv.setAttribute("class", "card")
  pokeFront.setAttribute("class", "card__face card__face--front")
  pokeBack.setAttribute("class", "card__face card__face--back")
  pic.setAttribute("class", "picDivs")

  let pokeNum = getPokeNumber(single_pokemon.id)



pic.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeNum}.png`

// make the data show up

  pokeFront.appendChild(pic)
  pokeFront.appendChild(name)
  pokeFront.appendChild(forms)
  pokeFront.appendChild(pokeId)
  pokeFront.appendChild(hr)

  pokeBack.appendChild(powers)
  pokeBack.appendChild(height)
  pokeBack.appendChild(weight)
  pokeBack.appendChild(tipes)

  pokeDiv.appendChild(pokeFront)
  pokeDiv.appendChild(pokeBack)
  pokeScene.appendChild(pokeDiv)

  mainArea.appendChild(pokeScene)

pokeDiv.addEventListener("click", function() {
  pokeDiv.classList.toggle("is-flipped");
})
}