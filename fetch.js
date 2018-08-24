var fs = require('fs');
var request = require('request');

var download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
      console.log('content-type:', res.headers['content-type']);
      console.log('content-length:', res.headers['content-length']);
  
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
  };
  

fs.readFile('pokeicons.json',function(err,data){
    var json = JSON.parse(data)
    for(var key in json){
        download(json[key], 'icones/' + key + '.png', function(){
            console.log('done');
          });
    }
})


