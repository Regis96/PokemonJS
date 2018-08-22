angular.module('treinadorPokemon')
    .controller('treinadorController',function(){
        var vm = this;

        vm.treinadores = [
            {nome : 'Régis', cpf : '12345678900'}
        ];

        vm.cadastrarTreinador = function(treinador){
            vm.treinadores.push(treinador);
            delete vm.treinador;
        }

        vm.apagarTreinador = function(treinador){
            var novosTreinadores;
            novosTreinadores = vm.treinadores.filter(treinadorCorrente => {
                return treinadorCorrente.nome !== treinador.nome;
            });
            
            vm.treinadores = novosTreinadores;
        }
    });