async function getAPIData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
// return the async data
let allSenators = []
let simpleSenators = []

const theData = getAPIData("senators.json").then(data => {
  allSenators = data.results[0].members
    console.log(allSenators)
    populateDOM(allSenators)
})



const republicans = allSenators.filter(senator => senator.party === 'R')
const democrats = allSenators.filter(senator => senator.party === 'D')
const independent = allSenators.filter(senator => senator.party === 'ID')

console.log(republicans, democrats)


const container = document.querySelector('.container')

function populateDOM(senatorArray) {
    senatorArray.forEach(senator => {
    let card = document.createElement('div')
    card.setAttribute('class', 'card')

    let cardImage = document.createElement('div')
    card.setAttribute('class', 'card-image')

    let cardFIgure = document.createElement('figure')
    cardFIgure.setAttribute('class', 'image is-4by3')

    let figureImage = document.createElement('img')
    //figureImage.src = "https://bulma.io/images/placeholders/1280x960.png"
  //  figureImage.src = "https://www.congress.gov/img/member/${senator.id.toLowerCase()}_200.jpg"
    figureImage.alt = "Placeholder_image"

   // cardFigure.appendChild(figureImage)
 //   cardImage.appendChild(cardFigure)
    card.appendChild(cardImage)
    //card.appendChild(populateCardContent(senator))
    container.appendChild(card)
})
}

function populateCardContent(senator) {
    let cardContent = document.createElement('div')
    cardContent.setAttribute('class', 'card-content')

    let media = documetn.createElement('div')
    media.setAttribute('class', 'card-content')

    let mediaLeft = document.createElement('div')
    mediaLeft.setAttribute('class', 'media-left')

    let figure = document.createElement('figure')  
    figure.setAttribute('class', 'image is-66x66')

    let figureParty = document.createElement('img')
    if(senator.party === "R") {
        figureParty.src = "img/elephant.png"
    }
    if(senator.party === "D") {
        figureParty.src = "img/donkey.png"
    }
    figureParty.alt="Party Affiliation"
   
    let mediaContent = document.createElement('div')
    mediaContent.setAttribute('class', 'media-content')
    
    let titleP = document.createElement('p')
    titleP.setAttribute('class', 'title is--4')
    titleP.textContent = '${senator.first_name} ${sentator.last_name}'
   
    let subtitleP = document.createElement('p')
    subtitleP.setAttribute('class', 'subtitle is-6')


    let contentDiv = document.createElement('div')
    contentDiv.setAttribute('class', 'content')
    contentDiv.textContent = "lorem ipsuem dolor sit amet, blah"
    
    let contentBreak = document.createElement('hr')
    
    let timeSection = document.createElement('time')
    let newDate = new Date()
    timeSelection.dateTime = '${newDate}'
    timeSelection.textContent = '${newDate}'


    mediaContent.appendChild(titleP)
    mediaContent.appendChild(subtitleP)
    figure.appendChild(figureParty)
    mediaLeft.appendChild(figureParty)
    media.appendChild(mediaLeft)
    media.appendChild(mediaContent)
    cardContent.appendChild(media)
    cardContent.appendChild(contentDiv)
    return cardContent
}