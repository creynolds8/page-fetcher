//take 2 cmd line args - url and local file path
//make http request and wait for response
//write given data to file
//get file size
// use needle and fs

const needle = require('needle');
const fs = require('fs');

const args = process.argv.slice(2);

