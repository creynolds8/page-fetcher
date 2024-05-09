//take 2 cmd line args - url and local file path
//make http request and wait for response
//write given data to file
//get file size
// use needle and fs

const needle = require('needle');
const fs = require('fs');

const args = process.argv.slice(2);

const write = function(body) {
  fs.writeFile(args[1], body, err => {
    if (err) console.log('error ', err);
    else console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`);
  });
};
needle.get(args[0], (error, response, body) => {
  console.log('error: ', error);
  console.log('response: ', response && response.statusCode);
  write(body);
});