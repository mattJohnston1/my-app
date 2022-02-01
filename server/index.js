const express = require('express');
const axios = require('axios')


const app = express();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
})

app.get('/', (req, res) => {
  axios.get('https://coffee.alexflipnote.dev/random.json')
    .then((response) => {
      if (response.status == 200) {
        res.status(200)
        res.json(response.data.file)
      } else {
        throw new Error('Oops! Something went wrong')
      }
    })
    .catch((error) => {
      console.error(error)
    })
})

app.listen(5000, () => {
  console.log('server started');
});