require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const dns = require('dns');
const urlparser = require('url');

const urlDatabase = [];
let urlCounter = 1;

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});

// POST endpoint for creating a short URL
app.post('/api/shorturl', (req, res)=>{
  const originalUrl = req.body.url;
  
  // Use try-catch block to handle invalid URL formats
  let parsedUrl;
  try{
    parsedUrl = new URL(originalUrl);
    if(parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:'){
      throw new Error('Invalid Protocol');
    }
  }catch (error){
    return res.json({error: 'invalid url'});
  }

  const hostname = parsedUrl.hostname;


  dns.lookup(hostname, (err, address)=>{
    if(err||!address){
      return res.json({error: 'invalid url'});
    }

    // If url is valid, handle database logic

    // Check if the input already exists in the database
    let existingEntry = urlDatabase.find(entry=>entry.original_url === originalUrl);
    if(existingEntry){
      res.json({
        original_url: existingEntry.original_url,
        short_url: existingEntry.short_url
      });
    }else{
      // If the input is new
      const newShortUrl = urlCounter++;
      const newEntry = {
        original_url: originalUrl,
        short_url: newShortUrl
      };
      urlDatabase.push(newEntry);
      res.json({
      original_url: newEntry.original_url,
      short_url: newEntry.short_url
    });
    }
  })
})



// GET endpoint for redirecting
app.get('/api/shorturl/:short_url', (req, res) => {
  // Convert the URL parameter from a string to a number
  const shortUrlId = parseInt(req.params.short_url, 10);

  // Check if the parameter is a valid number
  if (isNaN(shortUrlId)) {
    return res.status(400).json({ error: 'Wrong format' });
  }

  // Find the URL entry in our "database"
  const urlEntry = urlDatabase.find(entry => entry.short_url === shortUrlId);

  // If an entry is found, redirect to the original URL
  if (urlEntry) {
    res.redirect(urlEntry.original_url);
  } else {
    // Otherwise, respond with a "not found" error
    res.status(404).json({ error: 'No short URL found for the given input' });
  }
});