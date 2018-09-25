'use strict';

const contractReader = function() {};

contractReader.prototype = {

  dataHash : {},

  parseFile : function( filePath, options ) {
    console.log("webpackOverwrite");
    console.log("filePath" , filePath );
    if( !this.dataHash[filePath] ){
      let updatedFilePath = filePath + '.js' ,
          data = require(  updatedFilePath ) ;
      console.log("update file path" , data );
      console.log("required data" , data );
      this.dataHash[filePath] = data;
      return data ;
    }
    console.log("this.dataHash[filePath]" , this.dataHash[filePath] );
    return this.dataHash[filePath] ;
  }

};

module.exports = new contractReader();