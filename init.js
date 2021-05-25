#!/usr/bin/env node
let fs = require('fs');
console.log(process.argv)
const arguments = process.argv.slice(2)
if(arguments.length ===6){
    // if if --generator and project type next and --resource (create specific resource --resource)
    if(arguments[2] ==='--generator' && arguments[3] ==='next' && arguments[4] ==='--resource'){
        // directory to check if exists
        const dir = '././src';
        // check if directory exists
        if (fs.existsSync(dir)) {
            console.log('Directory exists!');
        } else {
            fs.mkdirSync(dir);
            console.log('Directory not found.');
        }

    }
}else{
    console.log(arguments)
    console.log('non working')
}
/*const getEntryPoints =  ()=>{
  return axios.get('').then(
      (response)=>{
          console.log('response')
          console.log(response)
      }
/*
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});*/


