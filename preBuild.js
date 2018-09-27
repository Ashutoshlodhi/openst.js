#!/usr/bin/env node

const fs = require('fs'),
  rootPrefix = '.',
  paths = ['/contracts/abi', '/contracts/bin'],
  writableFile = rootPrefix + '/utils/contractProviderWeb.js';

function prepareData(option) {
  var fileContent = null,
    dirFilePath = null,
    readFilePath = null,
    option = option || 'utf8',
    insertContent = null,
    fileInsertContents = [];
  paths.forEach(function(path) {
    dirFilePath = rootPrefix + path;
    fs.readdir(dirFilePath, function(err, items) {
      items.forEach(function(item) {
        readFilePath = rootPrefix + path + '/' + item;
        fileContent = fs.readFileSync(readFilePath, option);
        try {
          JSON.parse(fileContent);
        } catch (e) {
          fileContent = '"' + fileContent + '"';
        }
        insertContent = "dataHash['" + item + "'] = " + fileContent;
        fileInsertContents.push(insertContent);
      });
    });
  });

  fs.readFile(writableFile, 'utf8', function(err, data) {
    const startDelimiter = '//startDataHash',
      endDelimiter = '//endDataHash',
      newline = '\r\n',
      regexPattern = startDelimiter + '.*?' + endDelimiter;

    let replaceRegex = new RegExp(regexPattern, 's');
    if (!replaceRegex.test(data)) {
      throw ' -- Error in prescript content replace, someone changed the commend //startDataHash //endDataHash';
    }

    let fileContent = startDelimiter + newline + fileInsertContents.join(';' + newline) + newline + endDelimiter,
      result = data.replace(replaceRegex, fileContent);

    fs.writeFileSync(writableFile, result);
  });
}

prepareData();
