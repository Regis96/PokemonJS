angular.module('treinadorPokemon')
    .controller('treinadorController', ['$scope','pokemonService',function ($scope,pokemonService) {
        var vm = this;
        
        



        vm.pokemons = pokemonService.getPokemons();
        vm.listaPokemonTemporaria = [];

        vm.cadastrarTreinador = function (treinador) {
            treinador['pokemons'] = vm.listaPokemonTemporaria ? vm.listaPokemonTemporaria : [];
            vm.treinadores.push(treinador);
            delete vm.treinador;
            vm.flagFormularioCadastrar = false;
            vm.listaPokemonTemporaria = [];
            vm.pokemon = null;
        }



        vm.concluirEdicao = function (treinador) {
            vm.treinadorEditavel = null;
            vm.flagEditar = false;
            vm.pokemon = null;
        }

        // vm.mostrarTelaDeCadastro = function () {
        //     vm.flagFormularioCadastrar = !vm.flagFormularioCadastrar;
        // }

        vm.excluirPokemonDoTreinador = function (indicePokemon, treinador) {
            treinador.pokemons.splice(indicePokemon, 1);
        }

        vm.mostrarTelaDePesquisa = function () {
            vm.flagPesquisarPokemon = !vm.flagPesquisarPokemon;
            vm.listaPokemonsPesquisado = vm.pokemons;
        }
    }]);

