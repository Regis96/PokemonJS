angular.module('treinadorPokemon')
    .controller('treinadorController',function(){
        var vm = this;

        vm.treinadores = [{nome : 'Régis', cpf : '12345678900'}];

        vm.cadastrarTreinador = function(treinador){
            vm.treinadores.push(treinador);
            delete vm.treinador;
        }
    });