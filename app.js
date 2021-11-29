//1. IMPORTACIONES
const express = require('express');
const app = express();

const hbs = require('hbs');

const path = require('path');

const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();


//2. MIDDLEWARES
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));




//ROUTES


app.get("/randomBeers", (req, res) => {
  const randomBeers = punkAPI.getRandom()
  randomBeers
  .then((beers) => {
    res.render("randomBeers", {
      cerveza: beers
    })
  })
})



app.get("/beers", (req,res) => {
  const listBeers = punkAPI.getBeers()

  listBeers 
  .then((beers) => {
    res.render("beers",{ 
      data: beers
    })
  })

  .catch((error) => {
  })

})


app.get("/", (req, res) => {
  res.render("home");
});



//4. SERVIDOR
app.listen(3000, () => console.log('🏃‍ on port 3000'));
