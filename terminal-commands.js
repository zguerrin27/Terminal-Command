const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');
 
    console.log(filesToString);
  });
};


module.exports.touch = () => {
  fs.writeFile('message.txt', 'Hello FROMMMM Node.js', 'utf8', (err) => {
    if (err) throw err;
    console.log('Success of touch')
  });
};



module.exports.mkdir = () => {
  fs.mkdir('testDir',function(err){
    if (err) {
        return console.error(err);
    }
    console.log('Success of mkdir!');
 });
};