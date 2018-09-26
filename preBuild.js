#!/usr/bin/env node

const fs = require('fs'),
  rootPrefix = '.',
  writeFolderPrefix = '/dist',
  paths = ['/contracts/abi', '/contracts/bin'];

function prepareData(option) {
  var fileContent = null,
    dirFilePath = null,
    readFilePath = null,
    writeFilePath = null,
    filePath = null,
    option = option || 'utf8';
  paths.forEach(function(path) {
    dirFilePath = rootPrefix + path;
    fs.readdir(dirFilePath, function(err, items) {
      items.forEach(function(item) {
        if (item.indexOf('.js') > -1) return;
        readFilePath = rootPrefix + path + '/' + item;
        fileContent = fs.readFileSync(readFilePath, option);
        try {
          JSON.parse(fileContent);
        } catch (e) {
          fileContent = '"' + fileContent + '"';
        }
        writeFilePath = rootPrefix + writeFolderPrefix + path + '/' + item + '.js';
        fileContent = 'module.exports = ' + fileContent;
        fs.writeFileSync(writeFilePath, fileContent, option);
      });
    });
  });
}

prepareData();
