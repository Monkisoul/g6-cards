import { Deck, Hand } from '/deck.js'


window.onload = () => {
  const deck = new Deck()

  const cards = deck.cards.map((card) => {
    const cardDiv = document.createElement('div')
    cardDiv.classList.add('card');
    const number = card.slice(0, -1);
    const symbol = card.slice(-1);
    cardDiv.setAttribute('symbol', symbol);
    cardDiv.setAttribute('number', number);
    const isNumber = !isNaN(number);
    return `<div class="card ${symbol} number =${number}">
      <div class="card-corner top-left">
        <div>${number}</div>
        <div>${symbol}</div>
      </div>
      <div class="symbols">
      ${number == "A" ? `<div>${symbol}</div>`: ''}

      ${number == "J" || number == "Q" ||  number == "K" ? `<div class="image"></div>`: ''}
      
      ${(isNumber) ? `${new Array(parseInt(number))
      .fill(symbol)
          .map((cardSymbol) => `
            <div>${cardSymbol}</div>
          `)
          .join('')
        }` : ''}
     
        </div>
      <div class="card-corner bottom-right">
        <div>${number}</div>
        <div>${symbol}</div>
      </div>
                  
    </div>`
  })
  .join('')

  const container = document.getElementById('container')

  container.innerHTML = cards
}

      