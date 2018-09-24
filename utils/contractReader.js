'use strict';

const fs = require('fs'),
      path = require('path');

const contractReader = function() {};

contractReader.prototype = {

   parseFile : function(filePath, options) {
    filePath = path.join(__dirname, '/' + filePath);
    const fileContent = fs.readFileSync(filePath, options || 'utf8');
    return JSON.parse(fileContent);
  }
  
};


module.exports = new contractReader();
