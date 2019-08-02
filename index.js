const fetchBreedFetcher = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedFetcher(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details: ', error);
  } else {
    console.log(desc);
  }
  // console.log("error = " + error);
});