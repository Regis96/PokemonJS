var fs = require('fs');

fs.readFile('./pokeicons.json', function (err, dataIcones) {
    var icones = JSON.parse(dataIcones);

    fs.readFile('./pokedata.json',function(err,data){
        var data = JSON.parse(data);
        var newObject = [];
        for(var key in icones){
            var icone = icones[key];
            var nome = data[key - 1]['name'];
            var tipos = data[key - 1]['types'];

            newObject.push({
                icone : icone,
                nome : nome,
                tipos : tipos,
                level : 5,
                id : key - 1,
                ataque: getRand(1,20),
                defesa: getRand(1,20),
                vida: getRand(20,100)
            });
        }

        fs.writeFile('./pokemon.final.json',JSON.stringify(newObject),function(err){
            if(!err){
                console.log('sucesso!');
            }
        })
    });
    
    
});


function getRand(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}