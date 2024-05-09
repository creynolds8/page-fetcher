//take 2 cmd line args - url and local file path
//make http request and wait for response
//write given data to file
//get file size
// use needle and fs

const needle = require('needle');
const fs = require('fs');

const args = process.argv.slice(2);

needle.get(args[0], (error, response, body) => {
  console.log('error: ', error);
  console.log('response: ', response && response.statusCode);
  //something with body, not log
});