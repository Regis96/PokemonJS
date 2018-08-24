angular.module('treinadorPokemon')
    .controller('treinadorController',function(){
        var vm = this;


        vm.treinadores = [
            { nome: 'Régis', cpf: '12345678900', idade: 21, pokemons: [] }
        ];

        vm.apagarTreinador = function (treinador) {
            var novosTreinadores;
            novosTreinadores = vm.treinadores.filter(treinadorCorrente => {
                return treinadorCorrente.nome !== treinador.nome;
            });

            vm.treinadores = novosTreinadores;
        }


        vm.editarTreinador = function (treinador) {
            vm.treinadorEditavel = treinador;
            vm.treinadorParaAdicionarPokemon = treinador;
            vm.flagEditar = true;
        }

    });