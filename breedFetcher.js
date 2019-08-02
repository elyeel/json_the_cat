const request = require('request');
// const arg = process.argv;
// const address = "https://api.thecatapi.com/v1/breeds/search?q=" + arg[2];
// console.time('Done in ');

const fetchBreedDescription = function(breedName, callback) {
  const address = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(address, (error, response, body) => {
    // console.log(body);
    // for any address error, body will contain not found
    if (error) { // this is triggered by network error
      // console.log(error);
      // return;
    } else {
      if (JSON.parse(body).status >= 300) {
        // console.log(body);
      } else {
        // console.timeEnd('Done in ');
        const data = JSON.parse(body);
        if (data.length === 0) {
          // console.log("Invalid input type of breed");
        } else {
          // console.log(data[0].weight);
          callback(null, data[0].description.trim());
        }
      }
      // console.log(typeof data); // data is actually an object
    }
  });
};

module.exports = fetchBreedDescription;