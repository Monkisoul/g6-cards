const cors = require('cors')
const express = require('express');
const app = express();
const { Deck, Hand } = require('./public/deck.js');


app.use(cors())
app.use(express.static(`${__dirname}/public`))
app.use(express.json());

const deck = new Deck()
const table = new Hand(deck, +5)

app.get('/table', (req, res)=> {
   res.json({ hand: table.cards })
})
  
app.get('/hand', (req, res) =>{
  const hand = new Hand(deck, +2)
   res.json({
    hand: hand.cards,
    
  })
})  
app.get('/fetching', (req, res) => {
  const hands = [];
  hands.push(new Hand(deck, +2))
   res.json({
    hands: hands.map((hand) => hand.cards),
    deck: table.cards
  })
})


app.listen(4040, () => {
  console.log('Server running on port 4040');
});

